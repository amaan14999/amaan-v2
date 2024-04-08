import Image from "next/image";
import Text from "@/components/text/Text";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import LinkCTA from "@/components/link-cta/LinkCTA";
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
              A full stack developer building fast, beautiful and accessible
              website and apps.
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
            src={"/Avatar.jpg"}
            width={500}
            height={500}
            className="border-none rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50"
          />
        </FadeInSection>
      </header>
    </>
  );
}
