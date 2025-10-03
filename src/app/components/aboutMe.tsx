"use client";

import { Box, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-20 px-6"
    >
      <Flex
        direction={{ initial: "column", md: "row" }}
        align="center"
        gap="7"
        className="max-w-6xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box className="relative flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={260}
              height={260}
              className="rounded-2xl border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 object-cover"
            />
          </Box>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Heading
            size="8"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            About Me
          </Heading>

          <Separator size="4" my="4" className="bg-gray-700" />

          <Text size="4" className="leading-relaxed text-gray-300">
            I’m <span className="text-cyan-400">Ariella Firdaus Imata</span>, a
            developer with a strong interest in{" "}
            <span className="text-cyan-400">web development</span>,{" "}
            <span className="text-cyan-400">cybersecurity</span>, and{" "}
            <span className="text-cyan-400">digital forensics</span>. My goal is
            to build impactful solutions, explore innovative technologies, and
            grow through collaboration.
          </Text>

          <ul className="mt-6 space-y-2 text-gray-400 list-disc list-inside">
            <li>💻 Building full-stack apps with Next.js, Express, and MySQL</li>
            <li>🔐 Exploring cybersecurity & forensic analysis</li>
            <li>📊 Applying data analysis & machine learning</li>
            <li>🌏 Open to research and real-world collaborations</li>
          </ul>
        </motion.div>
      </Flex>
    </section>
  );
}
