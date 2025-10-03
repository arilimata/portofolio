"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { motion } from "motion/react";

type Experience = {
  id: number;
  company: string;
  position: string;
  start: string;
  end: string;
  tasks: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "Pertamina EP Asset 4 – Sukowati Field",
    position: "IT Operation Intern",
    start: "Jul 2024",
    end: "Oct 2024",
    tasks: [
      "Developed and managed network infrastructure for critical oil and gas operations.",
      "Designed and implemented a web-based network monitoring system to improve issue detection and resolution.",
      "Delivered daily end-user support by troubleshooting hardware, software, and network issues."
    ],
  },
  {
    id: 2,
    company: "Bangkit Capstone Project",
    position: "Machine Learning Engineer",
    start: "Feb 2024",
    end: "Jun 2024",
    tasks: [
      "Built Backend API using express.js and integrated ML model with TensorFlow.js.",
      "Deployed containerized app on Google Cloud Platform using Docker.",
      "Collaborated with cross-functional teams in Agile sprints.",
    ],
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    start: "2024",
    end: "Present",
    tasks: [
      "Created responsive websites using Next.js and Tailwind CSS.",
      "Designed and deployed wedding invitation & company profile websites.",
      "Ensured cross-browser compatibility and optimized performance.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <Box className="py-20 px-6 md:px-12 lg:px-24">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-center justify-center items-center mb-12"
          >
        <Text className="text-4xl text-white font-mono">Work Experience</Text>
        <Text className="text-xl text-gray-700 font-mono">A journey through the experiences that honed my skills and perspective.</Text>
      </motion.div>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-700 transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Circle marker */}
              <div className="hidden absolute left-1/2 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10 md:block" />

              {/* Card */}
              <Box
                className={`w-full md:w-[45%] bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-cyan-500/40 transition-transform duration-300 ease-out ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                {/* Date */}
                <Flex className="text-sm text-gray-400 font-mono mb-2">
                  {exp.start} – {exp.end}
                </Flex>
                {/* Company */}
                <Flex className="text-lg font-bold text-white font-mono">
                  {exp.company}
                </Flex>
                {/* Position */}
                <Flex className="text-cyan-400 font-semibold text-sm mb-4 font-mono">
                  {exp.position}
                </Flex>
                {/* Tasks */}
                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm font-mono leading-relaxed">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </Box>
            </motion.div>
          ))}
        </div>
      </div>
    </Box>
  );
}
