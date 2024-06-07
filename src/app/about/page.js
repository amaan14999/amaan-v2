import React from "react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import LinkCTA from "@/components/link-cta/LinkCTA";
import Text from "@/components/text/Text";
import Image from "next/image";
import WorkExperience from "./work/WorkExperience";
import { TechStack } from "./tech-stack/TechStack";

export const metadata = {
  title: "About | Amaan",
  description:
    "Get to know more about me, my work experience, and the technologies I work with.",
  openGraph: {
    title: "About | Amaan",
    description:
      "Get to know more about me, my work experience, and the technologies I work with.",
    type: "website",
    url: "https://itsamaan.tech",
    images: [
      {
        url: "https://itsamaan.tech/banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Amaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@not_iitian",
    title: "About | Amaan",
    description:
      "Get to know more about me, my work experience, and the technologies I work with.",
    image: {
      src: "https://itsamaan.tech/banner.jpg",
      alt: "Amaan",
      width: 1920,
      height: 1080,
    },
  },
};

const About = () => {
  return (
    <>
      <header className="w-constraint flex gap-8 sm:gap-16 justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div className="flex-[3]">
          <FadeInSection>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-gray-900 !leading-tight">
              About Me
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              As a Full Stack Developer with a creative sense, I bring more than
              2 years of experience in building websites and standalone web
              applications.
            </Text>
          </FadeInSection>
          <div className="flex items-center justify-start gap-2 sm:gap-4 flex-wrap">
            <FadeInSection delay={0.2}>
              <LinkCTA href="#work-experience" label="My Work" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <LinkCTA
                isSecondary={true}
                href="#tech-stack"
                label="Tech Stack"
              />
            </FadeInSection>
          </div>
        </div>
        <FadeInSection
          delay={0.1}
          className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-4 sm:py-12 sm:py-auto"
        >
          <Image
            alt="Amaan"
            src={"/Avatar.webp"}
            width={500}
            height={500}
            // @todo: Add blur data
            className="border-none aspect-square object-cover object-center rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50"
          />
        </FadeInSection>
      </header>
      <main className="w-constraint relative">
        <WorkExperience />
        <TechStack />
      </main>
    </>
  );
};

export default About;
