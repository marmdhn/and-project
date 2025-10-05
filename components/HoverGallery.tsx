"use client";

import { useState } from "react";
import Image from "next/image";

interface HoverGalleryProps {
  images: string[];
}

export default function HoverGallery({ images }: HoverGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative w-96 aspect-square mx-auto rounded-xl overflow-hidden group"
      onMouseLeave={() => setActiveIndex(0)}
    >
      <Image
        src={images[activeIndex]}
        alt={`product-image-${activeIndex}`}
        width={400}
        height={400}
        className="w-full object-cover transition-all duration-300"
      />

      <div
        className="absolute top-0 left-0 h-full w-1/3 cursor-pointer"
        onMouseEnter={() => setActiveIndex(1)}
      />
      <div
        className="absolute top-0 left-1/3 h-full w-1/3 cursor-pointer"
        onMouseEnter={() => setActiveIndex(2)}
      />
      <div
        className="absolute top-0 left-2/3 h-full w-1/3 cursor-pointer"
        onMouseEnter={() => setActiveIndex(3)}
      />
    </div>
  );
}
