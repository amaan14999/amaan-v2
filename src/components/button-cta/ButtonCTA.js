"use client";
import React from "react";

const ButtonCTA = ({ children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group bg-cyan-400 disabled:bg-red-200 disabled:cursor-not-allowed font-serif text-white text-lg py-2 px-4 mt-8 inline-flex items-center rounded-xl transition-all shadow-xl hover:shadow-2xl active:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
