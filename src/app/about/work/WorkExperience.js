"use client";
import React from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import FadeInSection from "@/components/fade-in-section/FadeInSection";
import Text from "@/components/text/Text";
import { TimelineSection, TimelineView } from "./timeline";

const data = [
  {
    title: "Software Developer Intern",
    company: {
      name: "HappyFox Technologies",
      url: "https://www.happyfox.com",
    },
    from: "Jan 2024",
    to: "Present",
    description: [
      "Currently working on the migration of HappyFox Technologies' existing Django-based website to a Wagtail CMS-based architecture, significantly reducing development time and dependency on developers by streamlining content management processes.",
      "Developed a fully responsive pricing page for HappyFox Helpdesk using React.js and Tailwind CSS, incorporating dynamic functionalities and API integrations to enhance user interactions and backend communications.",
      "Designed and implemented modular Django models within Wagtail, utilizing StreamField blocks and structures like ListBlock and StructBlock to boost site modularity and allow non-technical users to easily manage and update content.",
      "Managed the database transition from MySQL to PostgreSQL, enhancing the CMS's performance and scalability, which supported a 40% increase in data handling capacity and improved overall site functionality.",
    ],
  },
  {
    title: "Open Source Contributor",
    company: {
      name: "HyperSwitch - Juspay",
      url: "https://hyperswitch.io",
    },
    from: "Oct 2023",
    to: "Nov 2023",
    description: [
      "Enhanced payment tracking capabilities within HyperSwitch, utilizing Rust to streamline the merchant experience by simplifying the process of locating payments in the connector dashboard, improving transaction tracking efficiency by 30%.",
      "Collaborated on the implementation of a new ID system in RouterData, which improved compatibility with existing connector APIs by 25% and enhanced the management and security of payment requests.",
      "Contributed to system architecture optimizations that resulted in a 20% faster data retrieval time, facilitating quicker and more reliable payment processing for users across the connector dashboard.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: {
      name: "Celebal Technologies",
      url: "https://celebaltech.com/",
    },
    from: "May 2023",
    to: "July 2023",
    description: [
      "Developed a secure e-learning platform using React.js, implementing private routing and integrating Auth0 for robust user authentication during login, which enhanced security and user trust.",
      "Designed and utilized AWS S3 buckets for efficient image storage on the e-learning platform, integrating a CDN to achieve a 60% improvement in load times and a 40% reduction in server load, significantly enhancing content delivery and accessibility.",
      "Engineered a responsive shopping cart feature using React hooks, employing Context API and Redux for optimal state management, which reduced load times by 20% and improved the user experience with real-time updates, boosting overall site engagement.",
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
