import React from "react";
import ExternalLink from "@/components/external-link/ExternalLink";
import {
  Envelope,
  TelegramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/contact-form/ContactForm";
import FadeInSection from "@/components/fade-in-section/FadeInSection";

export const metadata = {
  title: "Contact | Amaan",
  description:
    "Reach out to me via email, Twitter, or Telegram. I am always open to new opportunities and collaborations.",
  openGraph: {
    title: "Contact | Amaan",
    description:
      "Reach out to me via email, Twitter, or Telegram. I am always open to new opportunities and collaborations.",
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
    title: "Contact | Amaan",
    description:
      "Reach out to me via email, Twitter, or Telegram. I am always open to new opportunities and collaborations.",
    image: {
      src: "https://itsamaan.tech/banner.jpg",
      alt: "Amaan",
      width: 1920,
      height: 1080,
    },
  },
};

const ContactPage = () => {
  return (
    <div className="pt-8">
      <main className="w-constraint pb-16">
        <FadeInSection>
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </FadeInSection>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8">
          <div className="flex-1">
            <FadeInSection delay={0.1}>
              <h2 className="text-xl font-sans font-light mt-8 text-gray-600">
                Want to connect? I am active on the following channels:
              </h2>
            </FadeInSection>
            <ul className="text-lg text-gray-700 mt-8 space-y-6">
              <li>
                <FadeInSection
                  delay={0.4}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <Envelope size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      E-Mail
                    </p>
                    <ExternalLink
                      href="mailto:amaan14999@gmail.com"
                      className="text-sm sm:text-base break-words"
                    >
                      amaan14999@gmail.com
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection
                  delay={0.5}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <TwitterLogo size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      Twitter
                    </p>
                    <ExternalLink
                      href="https://twitter.com/not_iitian"
                      className="text-sm sm:text-base break-words"
                    >
                      @not_iitian
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection
                  delay={0.6}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <TelegramLogo size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      Telegram
                    </p>
                    <ExternalLink
                      href="https://t.me/amaan14999"
                      className="text-sm sm:text-base break-words"
                    >
                      @amaan14999
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
