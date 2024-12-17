"use client";
import React from "react";
import AboutUs from "../subPages/AboutUs/page";
import Project from "../subPages/Project/page";
import Skills from "../subPages/Skills/page";
import Services from "../subPages/Service/page";
const page = () => {
  return (
    <div className="overflow-hidden">
      <div id="about-us" className="bg-white">
        <AboutUs />
      </div>

      <div id="skills" className="bg-gray-800">
        <Skills />
      </div>
      <div id="projects" className="bg-white">
        <Project />
      </div>
      <div id="services" className="bg-gray-800 ">
        <Services />
      </div>
    </div>
  );
};

export default page;
