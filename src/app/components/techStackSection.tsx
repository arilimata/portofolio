"use client";

import { motion } from "motion/react";

import { Flex, Grid, Text } from "@radix-ui/themes";
import TechStack from "./techStack";

export default function TechStackSection() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className=""
    >
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-center justify-center items-center"
          >
        <Text className="text-4xl text-white font-mono">Tech Stack</Text>
        <Text className="text-xl text-gray-700 font-mono">Behind every line of code, there’s a stack that supports it.</Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Grid
          columns={{ initial: "3", sm: "3", md: "4", lg: "6", xl: "7" }}
          className="mt-20 gap-15"
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "NextJS",
            "Tailwind",
            "RadixUI",
            "FramerMotion",
            "NodeJS",
            "ExpressJS",
            "Laravel",
            "Docker",
            "GoogleCloud",
            "MySQL",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex content-center justify-around items-center"
            >
              <TechStack logo={tech} />
            </motion.div>
          ))}
        </Grid>
      </motion.div>
    </Flex>
  );
}
