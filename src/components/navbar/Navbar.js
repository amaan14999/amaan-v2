"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

const logo = (
  <Image
    src="/Logo.png"
    height={36}
    width={36}
    alt="Amaan"
    className="inline-block bg-white rounded-full border-none"
    style={{
      scale: 1.05,
    }}
  />
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <nav className="py-4 fixed top-0 left-0 w-full z-[200]">
      <div className="hidden sm:flex sm:items-center sm:justify-center">
        <div className="mx-4 w-full lg:w-[80%] 2xl:w-[1024px] flex items-center p-2 justify-between bg-gray-900/10 backdrop-blur rounded-full shadow-2xl shadow-gray-900/5">
          <div className="flex items-center">
            <Link className="border rounded-full" href="/" title="Home Page">
              {logo}
            </Link>
          </div>
          <ul className="list-none flex gap-6 mr-4">
            {navLinks.map(({ href, label }, index) => (
              <li key={index}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
