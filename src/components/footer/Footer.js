import React from "react";
import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Copyright,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cyan-500">
      <div className="flex items-start justify-between flex-col-reverse sm:flex-row py-12 w-constraint">
        <div className="mt-12 sm:mt-0">
          <Link href="/">
            <Image
              src="/name.svg"
              alt="Name"
              width={170}
              height={85}
              priority={true}
            />
            <p className="sr-only">Amaan</p>
          </Link>
          <div className="mt-8 sm:mt-20 flex items-center font-serif text-gray-900">
            <Copyright weight="bold" />
            <p className="ml-2">
              <span className="font-sans">{year}</span> Amaan
            </p>
          </div>
        </div>
        <div>
          <h3 className="sr-only">Socials</h3>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/not_iitian"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter Profile"
            >
              <TwitterLogo weight="regular" size="24" />
            </a>
            <a
              href="https://t.me/amaan14999"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <TelegramLogo weight="regular" size="24" />
            </a>
            <a
              href="https://github.com/amaan14999"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <GithubLogo weight="regular" size="24" />
            </a>
            <a
              href="https://www.linkedin.com/in/amaan14999/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <LinkedinLogo weight="regular" size="24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
