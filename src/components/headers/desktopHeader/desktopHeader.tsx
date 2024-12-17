"use client";
import { Link } from "@/navigation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SupportButton from "../SupportButton";
import { gsap } from "gsap";

type componentProps = { lang: string };
type ComponentNames =
  | "AboutUs"
  | "Project"
  | "Skills"
  | "Service"
  | "Contact Me"; // No change to this

const DesktopHeader = ({ lang }: componentProps) => {
  const [openComponent, setOpenComponent] = useState<ComponentNames | null>(
    null
  );

  const supportButtonRef = useRef<HTMLDivElement | null>(null);

  const setDefault = () => {
    setOpenComponent(null);
  };

  const headerRef = useRef<HTMLDivElement>(null);

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
          onComplete: () => {
            gsap.to(supportButtonRef.current, {
              rotation: 1,
              duration: 0.1,
              repeat: 5,
              yoyo: true,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(supportButtonRef.current, {
                  rotation: 0,
                  duration: 0.5,
                  ease: "power1.inOut",
                });
              },
            });
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setDefault();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = (componentName: ComponentNames) => {
    setOpenComponent((prev) => (prev === componentName ? null : componentName));
  };

  return (
    <div
      className="bg-[url('/images/header.jpg')] justify-between bg-cover bg-center h-screen overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <header ref={headerRef}>
        <nav className="flex relative items-center justify-between px-14 py-4">
          <Link href="/">
            <div className="flex flex-col">
              <b className="text-3xl text-center text-white hover:text-blue-500 font-bold glow-on-hover">
                <Image src="/logo/logo.svg" alt="Logo" width={50} height={50} />
              </b>
            </div>
          </Link>
          <div
            className={`flex ${
              lang === "ar" ? "space-x-reverse" : ""
            } space-x-5`}
          >
            <ul
              className={`flex ${
                lang === "ar" ? "space-x-reverse" : ""
              } space-x-10`}
            >
              <li
                className={`relative cursor-pointer hover:text-blue-500 ${
                  openComponent === "AboutUs" ? "text-blue-500" : "text-white"
                } transition-colors duration-500 glow-on-hover ease-in-out`}
                onClick={() => toggle("AboutUs")}
              >
                <Link
                  className={`relative cursor-pointer hover:text-blue-500 ${
                    openComponent === "AboutUs" ? "text-blue-500" : "text-white"
                  } transition-colors duration-500 glow-on-hover ease-in-out`}
                  href="#about-us"
                >
                  About Us
                </Link>
              </li>
              <li
                className={`relative cursor-pointer hover:text-blue-500 ${
                  openComponent === "Skills" ? "text-blue-500" : "text-white"
                } transition-colors duration-500 glow-on-hover ease-in-out`}
                onClick={() => toggle("Skills")}
              >
                <Link
                  className={`relative cursor-pointer hover:text-blue-500 ${
                    openComponent === "Skills" ? "text-blue-500" : "text-white"
                  } transition-colors duration-500 glow-on-hover ease-in-out`}
                  href="#skills"
                >
                  Skills
                </Link>
              </li>
              <li
                className={`relative cursor-pointer hover:text-blue-500 ${
                  openComponent === "Project" ? "text-blue-500" : "text-white"
                } transition-colors duration-500 glow-on-hover ease-in-out`}
                onClick={() => toggle("Project")}
              >
                <Link
                  className={`relative cursor-pointer hover:text-blue-500 ${
                    openComponent === "Project" ? "text-blue-500" : "text-white"
                  } transition-colors duration-500 glow-on-hover ease-in-out`}
                  href="#projects"
                >
                  Projects
                </Link>
              </li>
              <li
                className={`relative cursor-pointer hover:text-blue-500 ${
                  openComponent === "Service" ? "text-blue-500" : "text-white"
                } transition-colors duration-500 glow-on-hover ease-in-out`}
                onClick={() => toggle("Service")}
              >
                <Link
                  className={`relative cursor-pointer hover:text-blue-500 ${
                    openComponent === "Service" ? "text-blue-500" : "text-white"
                  } transition-colors duration-500 glow-on-hover ease-in-out`}
                  href="#services"
                >
                  Services
                </Link>
              </li>
              <li
                className="relative flex flex-col cursor-pointer hover:text-blue-500"
                onClick={() => toggle("Contact Me")}
              >
                <Link
                  className={`relative cursor-pointer glow-on-hover hover:text-blue-500 ${
                    openComponent === "Contact Me"
                      ? "text-blue-500"
                      : "text-white"
                  } transition-colors duration-500 ease-in-out`}
                  href="#contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div
        ref={supportButtonRef}
        className="bottom-0 h-[89vh] flex items-end justify-end md:pr-16"
      >
        <SupportButton isVisible={openComponent === "Contact Me"} />
      </div>
    </div>
  );
};

export default DesktopHeader;
