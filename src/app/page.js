import Image from "next/image";
import { Metadata } from "next";
import Text from "@/components/text/Text";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import LinkCTA from "@/components/link-cta/LinkCTA";
import ExternalLink from "@/components/external-link/ExternalLink";
import {
  CodeSimple,
  Briefcase,
  ChartLine,
  GlobeSimple,
} from "@phosphor-icons/react/dist/ssr";

const year = new Date().getFullYear() - 2016;

export const metadata = {
  openGraph: {
    title: "Amaan",
    description:
      "A Full-stack developer building fast, accessible, and user-centric websites and apps",
    url: "https://itsamaan.me/",
    type: "website",
    images: [
      {
        url: "https://itsamaan.me/banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Amaan",
      },
    ],
  },
  twitter: {
    site: "@not_iitian",
    card: "summary_large_image",
    title: "Amaan",
    description:
      "A Full-stack developer building fast, accessible, and user-centric websites and apps.",
    images: [
      {
        url: "https://itsamaan.me/banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Amaan",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <header className="w-constraint flex gap-8 sm:gap-16 justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div className="flex-[3]">
          <FadeInSection>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-gray-900 !leading-tight">
              Hello 👋🏻 <br /> I am Amaan
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              A Full-stack developer building fast, accessible, and user-centric
              websites and apps.
            </Text>
          </FadeInSection>
          <div className="flex items-center justify-start gap-2 sm:gap-4">
            <FadeInSection delay={0.2}>
              <LinkCTA href="/about" label="About Me" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <LinkCTA isSecondary={true} href="/contact" label="Contact Me" />
            </FadeInSection>
          </div>
        </div>
        <FadeInSection className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-4 sm:py-12 sm:py-auto">
          <Image
            alt="Amaan"
            src={"/profile.webp"}
            width={500}
            height={500}
            // @todo: Add blur data
            className="border-none rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-cyan-100/50 hover:shadow-cyan-200/50 active:shadow-cyan-200/50"
          />
        </FadeInSection>
      </header>
      <main className="w-constraint pb-20">
        <section id="tldr" className="my-12 py-12">
          <FadeInSection>
            <h3 className="text-3xl sm:text-4xl font-medium">TLDR;</h3>
            <Text>Short on time? This is me, bento box style!</Text>
          </FadeInSection>
          <div className="grid gap-4 mt-12 grid-cols-1 grid-rows-6 md:grid-rows-3 md:grid-cols-8 bg-gradient-to-br from-cyan-300 via-sky-400 to-cyan-300 p-4 rounded-2xl shadow-2xl">
            <FadeInSection className="w-full col-span-1 md:col-span-5 row-span-1 h-full px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <h4 className="text-center text-lg sm:text-xl font-serif font-thin text-gray-700">
                Full Stack Developer
              </h4>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Technical Writer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Computer Science Graduate
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Open Source Contributor
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Photographer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-2 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Bookworm
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Shinzo wo Sasageyo ✊🏻
              </p>
            </FadeInSection>
          </div>
        </section>
        <section id="about" className="my-12 py-12 space-y-12 sm:space-y-20">
          <FadeInSection>
            <h3 className="text-3xl sm:text-4xl font-medium">About Me</h3>
            <Text>Here&apos; a little bit about me and my work!</Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-8 sm:gap-20 items-center">
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl p-4 shadow-2xl shadow-cyan-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <CodeSimple size={32} weight="bold" className="text-cyan-400" />
              </div>
            </div>
            <Text className="!m-0">
              I am a{" "}
              <span className="emphasis">Full-Stack JavaScript Developer</span>{" "}
              specializing in front-end development. I am proficient with with
              React, Node, Next.JS, and SQL. I also enjoy working with Python
              Flask and Django for building backend services.
            </Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 items-center">
            <Text className="!m-0">
              With <span className="emphasis">over 2 years</span> of hands-on
              experience, I've developed a wide range of web projects, from
              sleek landing pages to comprehensive standalone web applications.
            </Text>
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl p-4 shadow-2xl shadow-cyan-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <Briefcase size={32} weight="bold" className="text-cyan-400" />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-8 sm:gap-20 items-center">
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl p-4 shadow-2xl shadow-cyan-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <ChartLine size={32} weight="bold" className="text-cyan-400" />
              </div>
            </div>
            <Text className="!m-0">
              I love open source and actively contribute to various projects,
              making a mark with a significant PR merge by{" "}
              <ExternalLink href="https://github.com/juspay/hyperswitch">
                Juspay's Hyperswitch
              </ExternalLink>
              .
              <br />
              In my free time, I love participating in hackathons and have won
              many, including{" "}
              <span className="emphasis">MLH High School Hacks.</span>
            </Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 items-center">
            <Text className="!m-0">
              Besides coding, I'm a passionate photographer of{" "}
              <span className="emphasis">
                over <span>{year}</span> years
              </span>{" "}
              . I love{" "}
              <ExternalLink href="https://www.instagram.com/_thelenses_/">
                capturing the beauty
              </ExternalLink>{" "}
              of the world around me. When I'm not behind the camera, I indulge
              in reading, anime, and binge-watching TV series.
            </Text>
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-2xl p-4 shadow-2xl shadow-cyan-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <GlobeSimple
                  size={32}
                  weight="bold"
                  className="text-cyan-400"
                />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/about" label="Know More" />
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
