"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Box, Flex, Text, Button } from "@radix-ui/themes";
import { motion } from "motion/react";
import { Mail, User, MessageSquare, Github, Linkedin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col max-w-2xl mx-auto text-center gap-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700"
      >
        {/* Heading */}
        <Text className="text-4xl md:text-5xl font-bold font-mono text-white mb-6">
          Contact Me
        </Text>
        <Text className="text-gray-400 mb-12 text-lg font-mono leading-relaxed">
          Have a project in mind, collaboration idea, or just want to say hello?
          Drop me a message and I&apos;ll get back to you as soon as possible.
        </Text>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Input Name */}
          <div className="flex items-center gap-3 bg-gray-900/70 border border-gray-700 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 shadow-sm focus-within:shadow-cyan-500/30 transition">
            <User className="w-5 h-5 text-cyan-400" />
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 font-mono"
            />
          </div>

          {/* Input Email */}
          <div className="flex items-center gap-3 bg-gray-900/70 border border-gray-700 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 shadow-sm focus-within:shadow-cyan-500/30 transition">
            <Mail className="w-5 h-5 text-cyan-400" />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 font-mono"
            />
          </div>

          {/* Input Message */}
          <div className="flex items-start gap-3 bg-gray-900/70 border border-gray-700 rounded-lg p-3 focus-within:ring-2 focus-within:ring-cyan-500 shadow-sm focus-within:shadow-cyan-500/30 transition">
            <MessageSquare className="w-5 h-5 mt-1 text-cyan-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400 font-mono resize-none"
              rows={5}
            />
          </div>

          {/* Submit Button */}
          <Flex justify="center" className="mt-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold font-mono py-2 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/40 active:scale-95 transition-transform duration-300 ease-out disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Flex>
        </form>

        {status && <p className="text-sm text-gray-300 mt-4">{status}</p>}

        {/* Social Links */}
        <Flex justify="center" gap="4" className="mt-10">
          <a
            href="https://github.com/arilimata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/arilimata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition" />
          </a>
        </Flex>
      </motion.div>
    </Box>
  );
}
