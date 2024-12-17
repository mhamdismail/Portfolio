"use client";
import React, { useRef } from "react";
import { useAnimateScroll } from "@/components/Animation/UseAnimateScroll";
import Desktop from "@/components/Service/Desktop";
import Mobile from "@/components/Service/Mobile";

const Services = () => {
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
  };
  useAnimateScroll(refs);

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-12 px-6 md:pl-10 lg:pl-12">
        <p
          ref={refs.title}
          className="text-4xl md:text-5xl font-extrabold text-left text-white  mb-8"
        >
          Professional Services
        </p>
        <div className="md:block hidden">
          <Desktop />
        </div>
        <div className="md:hidden block">
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Services;
