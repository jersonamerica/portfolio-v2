"use client";

import { useState } from "react";
import Image from "next/image";
import { useAnimateOnView } from "@/hooks/useAnimateOnView";

export default function ProfileSection() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleDownloadCV = () => {
    // Download the Resume.pdf from the public folder
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Jerson_America_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { ref, isVisible } = useAnimateOnView();

  return (
    <section
      id="profile"
      ref={ref}
      className={`bg-gradient-to-r from-black to-gray-800 text-white py-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Jerson America
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Frontend developer focused on clean code and user-centric web
              experiences.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleDownloadCV}
                className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
              >
                Download CV
              </button>
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Contact Form Modal */}
            {showContactForm && (
              <div className="mt-8 bg-gray-900 p-6 rounded-lg">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  Get In Touch
                </h3>

                {submitStatus.type === "success" && (
                  <div className="mb-4 p-4 bg-green-900 border border-green-700 text-green-100 rounded-lg">
                    ✓ {submitStatus.message}
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-4 p-4 bg-red-900 border border-red-700 text-red-100 rounded-lg">
                    ✕ {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none disabled:opacity-50"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      disabled={isLoading}
                      className="border-2 border-gray-700 text-gray-300 hover:border-gray-500 px-6 py-2 rounded font-semibold transition disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden border-4 border-red-900">
              <Image
                src="/jers.jpg"
                alt="Jerson America"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
