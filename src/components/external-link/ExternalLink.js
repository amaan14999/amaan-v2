"use client";
import React from "react";

const ExternalLink = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className ? className : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};
export default ExternalLink;
