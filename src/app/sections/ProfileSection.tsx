"use client";

import { useState } from "react";

export default function ProfileSection() {
  const [showContactForm, setShowContactForm] = useState(false);
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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert(
      `Thank you ${formData.name}! Your message has been received.\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    );
    setFormData({ name: "", email: "", message: "" });
    setShowContactForm(false);
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

  return (
    <section
      id="profile"
      className="bg-gradient-to-r from-black to-gray-800 text-white py-20"
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
              Full-stack developer with a passion for creating elegant and
              efficient solutions. Specializing in modern web technologies and
              cloud-based applications.
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
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none"
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
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none"
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
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-900 focus:outline-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded font-semibold transition"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="border-2 border-gray-700 text-gray-300 hover:border-gray-500 px-6 py-2 rounded font-semibold transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 bg-red-900 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
