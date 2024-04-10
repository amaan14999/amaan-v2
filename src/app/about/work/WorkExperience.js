"use client";
import React from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import Text from "@/components/text/Text";
import { TimelineSection, TimelineView } from "./timeline";

const data = [
  {
    title: "Full Stack Developer",
    company: {
      name: "Amazing Tech Solutions",
      url: "https://amazingtechsolutions.example.com",
    },
    from: "Jan 2022",
    to: "Present",
    description: [
      "Lead the development of a flagship project, enhancing the product’s scalability and performance.",
      "Implemented a series of microservices, improving system reliability and service decoupling.",
      "Refactored legacy codebase, resulting in a 50% reduction in loading times and improved code maintainability.",
    ],
  },
  {
    title: "Frontend Developer",
    company: {
      name: "Innovative Startups Inc.",
      url: "https://innovativestartups.example.com",
    },
    from: "May 2020",
    to: "Dec 2021",
    description: [
      "Developed and maintained the front-end portion of the application using React and Redux.",
      "Collaborated closely with UX/UI designers to implement new features.",
      "Optimized application for maximum speed and scalability, improving the Core Web Vitals scores by over 30%.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: {
      name: "Creative Digital Agency",
    },
    from: "Sep 2018",
    to: "Apr 2020",
    description: [
      "Assisted in the development of web applications for a variety of clients, focusing on HTML, CSS, and JavaScript.",
      "Contributed to team meetings and provided valuable input for website design and structure.",
      "Helped improve website accessibility and implemented SEO best practices across multiple projects.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-24">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Work Experience</h2>
        <Text>
          Here&apos;s what I have done in my career as a professional.
        </Text>
      </FadeInSection>
      {data.map((item, index) => (
        <TimelineView key={index} className="mt-16">
          <FadeInSection className="flex flex-col sm:flex-row snap-start">
            <TimelineSection
              title={item.title}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              subtitle={
                <div className="mt-3">
                  <p className="text-gray-500 text-xs uppercase">
                    {item.from} - {item.to}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-600 text-lg">{item.company.name}</p>
                    {item.company.url && (
                      <a
                        title="Company website"
                        href={item.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        <ArrowSquareOut weight="bold" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              }
            >
              <ul className="list-disc space-y-2 ml-4 sm:ml-0 sm:text-lg">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>
                    <p className="leading-normal font-light text-gray-700">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </TimelineSection>
          </FadeInSection>
        </TimelineView>
      ))}
    </section>
  );
};

export default WorkExperience;
