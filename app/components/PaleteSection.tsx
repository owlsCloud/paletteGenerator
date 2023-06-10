"use client";
import React, { useState } from "react";

const PaletteSection = ({ color }: any) => {
  const [copied, setCopied] = useState("");

  const handleCopy = (color: string) => {
    setCopied(color);
    navigator.clipboard.writeText(color);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-1/5 h-[96%] text-center relative"
    >
      <p
        className="text-3xl font-semibold absolute w-fit left-1/3 bottom-0 mb-12 hover:cursor-pointer"
        onClick={() => handleCopy(color)}
      >
        {color.toUpperCase()}
      </p>
    </div>
  );
};

export default PaletteSection;
