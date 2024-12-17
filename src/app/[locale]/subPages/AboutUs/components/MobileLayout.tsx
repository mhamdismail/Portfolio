"use client";
import TextSection from "../../../../../components/AboutUs/components/TextSection";
import ImageSection from "../../../../../components/AboutUs/components/ImageSection";
import { useRef } from "react";
import { useAnimateScroll } from "@/components/Animation/UseAnimateScroll";

const MobileLayout = () => {
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
  };
  useAnimateScroll(refs);

  return (
    <div className="md:hidden flex flex-col space-y-8 px-6">
      <h1
        ref={refs.title}
        className="text-4xl md:text-5xl  font-extrabold text-start text-gray-900"
      >
        About me
      </h1>

      <div className=" flex flex-col   justify-center items-center">
        {" "}
        <ImageSection />
        <TextSection paragraph="I am a versatile Full Stack Developer specializing in both the MERN (MongoDB, Express, React, Node.js) and SERN (SQL, Express, Node.js) stacks. With a strong command of front-end and back-end development, I create efficient, scalable applications that deliver exceptional user experiences." />
      </div>
    </div>
  );
};

export default MobileLayout;
