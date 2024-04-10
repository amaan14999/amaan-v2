import React from "react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import LinkCTA from "@/components/link-cta/LinkCTA";
import Text from "@/components/text/Text";
import Image from "next/image";
import Link from "next/link";

import { FileArrowDown, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import WorkExperience from "./work/WorkExperience";
import { TechStack } from "./tech-stack/TechStack";
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

            {/* <FadeInSection delay={0.2}>
              <Link
                href={"https://resume.itsamaan.me/"}
                target="_blank"
                className="group flex mt-8 py-2 px-2 sm:px-4 font-serif text-md sm:text-lg gap-1 text-cyan-500 items-center"
              >
                Resume
                <div className="relative w-4 h-4">
                  <FileArrowDown
                    className="absolute bottom-[0.5px] opacity-100 scale-100 group-hover:scale-0 transition-all group-hover:opacity-0 group-hover:translate-y-4"
                    weight="bold"
                  />
                  <ArrowDown
                    className="absolute bottom-[0.5px] opacity-0 scale-0 group-hover:scale-100 transition-all group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0"
                    weight="bold"
                  />
                </div>
              </Link>
            </FadeInSection> */}
          </div>
        </div>
        <FadeInSection
          delay={0.1}
          className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-4 sm:py-12 sm:py-auto"
        >
          <Image
            alt="Amaan"
            src={"/Avatar.jpg"}
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
