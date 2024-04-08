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
            src={"/profile.jpg"}
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
                Photographer
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
                Designer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-2 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                SEO Expert
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Shinzo wo Sasageyo
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}
