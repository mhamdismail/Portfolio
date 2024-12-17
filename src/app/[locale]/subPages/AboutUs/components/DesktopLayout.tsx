"use client";
import TextSection from "../../../../../components/AboutUs/components/TextSection";
import ImageSection from "../../../../../components/AboutUs/components/ImageSection";
import { useRef } from "react";
import { useAnimateScroll } from "@/components/Animation/UseAnimateScroll";

const DesktopLayout = () => {
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
  };
  useAnimateScroll(refs);
  return (
    <div className="lg:container md:flex flex-col  h-screen hidden   ">
      {/* Section Heading */}
      <p
        ref={refs.title}
        className="text-4xl md:text-5xl font-extrabold text-left text-gray-900 mb-8"
      >
        About Me
      </p>

      <div className="flex flex-row justify-between items-center gap-20">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 max-w-lg space-y-6">
          <TextSection paragraph="I am a versatile Full Stack Developer specializing in both the MERN (MongoDB, Express, React, Node.js) and SERN (SQL, Express, Node.js) stacks. With a strong command of front-end and back-end development, I create efficient, scalable applications that deliver exceptional user experiences." />
        </div>

        <div className="flex justify-center items-center w-full md:w-[470px] ">
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
