"use client";

import { Box, Text } from "@radix-ui/themes";
import { motion } from "motion/react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce site built with Next.js, Tailwind CSS, and Radix UI",
    image: "/Projects/Marketplace.png",
  },
  {
    id: 2,
    title: "VeggieVision",
    description: "Bangkit capstone project using TensorFlow.js, Docker, and GCP.",
    image: "/Projects/VeggieVision.png",
  },
  {
    id: 3,
    title: "Wedding Invitation Website",
    description: "A beautiful wedding invitation website built with HTML, CSS, and JavaScript.",
    image: "/Projects/WeddingInvitation.png",
  },
  {
    id: 4,
    title: "Company Profile Website",
    description: "Profile website built with Next.js and Tailwind CSS.",
    image: "/Projects/CompanyProfile.png",
  },
];

export default function PortfolioSection() {
  return (
    <Box className="flex flex-col py-16 px-6 md:px-12 lg:px-24">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-center justify-center items-center mb-12"
          >
        <Text className="text-4xl text-white font-mono">Portofolio</Text>
        <Text className="text-xl text-gray-700 font-mono">Each project is a chapter — together, they tell my story as a developer.</Text>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          >
            <Box className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden hover:scale-[1.02] hover:shadow-cyan-500/40 transition-transform duration-300 ease-out cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-40 object-cover"
              />
              <Box className="p-5">
                <Text
                  className="h3 text-lg font-semibold text-white mb-2"
                >
                  {project.title}
                </Text>
                <Text as="p" className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </Text>
              </Box>
            </Box>
          </motion.div>
        ))}
      </div>
    </Box>
  );
}
