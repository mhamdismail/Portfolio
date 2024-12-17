"use client";
import React, { useRef } from "react";
import Swipers from "@/components/Project/Swiper";
import { useAnimateScroll } from "@/components/Animation/UseAnimateScroll";

function Page() {
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
  };
  useAnimateScroll(refs);

  return (
    <div className="lg:container  mx-auto py-12 px-6 md:pl-10 lg:pl-12 space-y-8 ">
      <div className="mb:flex flex-col  ">
        {/* Title Section */}
        <h1
          ref={refs.title}
          className="text-4xl md:text-5xl font-extrabold text-left text-gray-900 md:mb-16 md-4"
        >
          Projects
        </h1>
      </div>
      <div>
        <Swipers />
      </div>
    </div>
  );
}

export default Page;
