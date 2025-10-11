import Image from "next/image";
import TypingIntro from "./components/typingAnimation";
import { Button, Container, Flex, Section, Text } from "@radix-ui/themes";
import PortfolioSection from "./components/portofolio";
import Contact from "./components/contact";
import WorkExperience from "./components/workExperience";
import TechStackSection from "./components/techStackSection";
import AboutMe from "./components/aboutMe";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      <Container id="home">
        {/* Intro Section */}
        <Flex
          align="center"
          justify="center"
          direction="column"
          className="min-h-screen"
        >
          <div className="mb-4 rounded-full overflow-hidden border-1 shadow-lg">
            <Image src={"/profile-2.png"} width={130} height={130} alt="Illustration" className="" />
          </div>
          <Text className="text-xl sm:text-2xl md:text-4xl font-bold font-mono text-white">
            Hi, I&apos;m Ariella Firdaus Imata
          </Text>
          {/* Komponen typing kamu */}
          <div className="mt-2 text-cyan-400 font-mono">
            {" "}
            <TypingIntro />
          </div>
          <Flex className="mt-8 shadow-md font-bold font-mono">
            <Button asChild color="yellow">
              <a href="#about">{"Learn About Me ->"}</a>
            </Button>
          </Flex>
        </Flex>

        {/* About Me */}
        <Section id="about" />
        <AboutMe />

        {/* Tech Stack */}
        <Section id="techstack" />
        <TechStackSection />

        {/* Work Experience */}
        <Section id="workexperience"/>
        <WorkExperience />

        <Section id="portfolio" />
        <Flex direction={"column"} align="center" justify="center" className="">
          <PortfolioSection />
        </Flex>

        <Section id="contact"/>
        <Contact />
      </Container>
    </div>
  );
}
