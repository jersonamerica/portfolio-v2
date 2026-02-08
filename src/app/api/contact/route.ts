import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response("Server configuration error", { status: 500 });
    }
    const resend = new Resend(apiKey);

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email to you (the portfolio owner)
    const ownerEmailResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL || "jers.america@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Reply to: <a href="mailto:${email}">${email}</a></p>
        </div>
      `,
    });

    if (ownerEmailResult.error) {
      return NextResponse.json(
        { error: "Failed to send email to owner" },
        { status: 500 },
      );
    }

    // Send confirmation email to visitor
    const visitorEmailResult = await resend.emails.send({
      from: "Jerson America <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your message!</h2>
          <p>Hi ${name},</p>
          <p>I received your message and will get back to you as soon as possible. In the meantime, feel free to check out my projects and experience on my portfolio.</p>
          <p style="margin-top: 30px; color: #666;">Best regards,<br>Jerson America</p>
        </div>
      `,
    });

    if (visitorEmailResult.error) {
      // Still return success if owner email was sent, even if visitor email fails
      return NextResponse.json(
        { success: true, message: "Email received, confirmation email failed" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
