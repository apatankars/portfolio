"use client";
import { useState } from "react";

interface NamePronProps {
  name: string;
}

export default function NamePron(props: NamePronProps) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block transition-opacity duration-300 ${
        hovered
          ? "opacity-100 text-[rgb(114,135,253)]"
          : "opacity-100 text-[rgb(223,142,29)]"
      }`}
    >
      {hovered ? "ər-ma:n" : props.name}
    </span>
  );
}
