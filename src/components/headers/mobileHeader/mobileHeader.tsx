"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { Link } from "@/navigation";
import SupportButton from "../SupportButton";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

// Dynamically import the new SideNav component
const SideNav = dynamic(() => import("./sideNav/sideNav"));

const MobileHeader: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false); // State to control the side nav open/close
  const supportButtonRef = useRef<HTMLDivElement | null>(null);

  // Toggle the side nav visibility
  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev); // Toggle between open and close
  };

  // GSAP animation for support button
  useEffect(() => {
    if (supportButtonRef.current) {
      gsap.fromTo(
        supportButtonRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "bounce.out",
        }
      );
    }
  }, []);

  return (
    <header className="bg-[url('/images/header.jpg')] justify-between bg-cover bg-center h-screen overflow-hidden">
      <SideNav isVisible={isSideNavOpen} toggleSidNav={toggleSideNav} />

      <nav className="flex relative items-center justify-between text-customBlack px-3 py-4">
        <Link href={"/"}>
          <Image src="/logo/logo.svg" alt="Logo" width={50} height={50} />
        </Link>

        <div
          className="text-5xl z-50 text-white cursor-pointer"
          onClick={toggleSideNav}
        >
          <IoMenu />
        </div>
      </nav>

      <div
        ref={supportButtonRef}
        className="absolute w-full bottom-0 h-full flex items-end justify-end md:pr-16"
      >
        <SupportButton isVisible={true} />
      </div>
    </header>
  );
};

export default MobileHeader;
