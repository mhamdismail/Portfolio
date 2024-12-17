import React, { useRef, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";

const SocialMediaIcons: React.FC = () => {
  const facebookRef = useRef<HTMLAnchorElement | null>(null);
  const githubRef = useRef<HTMLAnchorElement | null>(null);
  const instaRef = useRef<HTMLAnchorElement | null>(null);
  const linkedinRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const socialMediaHoverEffect = (element: HTMLAnchorElement | null) => {
      if (element) {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.06,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.4,
            ease: "power3.inOut",
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
            duration: 0.6,
            ease: "power3.out",
          });
        });
      }
    };

    socialMediaHoverEffect(facebookRef.current);
    socialMediaHoverEffect(githubRef.current);
    socialMediaHoverEffect(instaRef.current);
    socialMediaHoverEffect(linkedinRef.current);
  }, []);

  return (
    <div className="grid grid-cols-4 space-x-2 md:space-x-5 py-14 items-center justify-between lg:space-x-4">
      <a
        href="https://github.com"
        ref={githubRef}
        className="p-2 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gradient-to-l from-black to-transparent"
      >
        <FaGithub className="text-white text-2xl" />
      </a>
      <a
        href="https://linkedin.com"
        ref={linkedinRef}
        className="p-2 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gradient-to-l from-black to-transparent"
      >
        <FaLinkedin className="text-white text-2xl" />
      </a>
      <a
        href="https://instagram.com"
        ref={instaRef}
        className="p-2 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gradient-to-l from-black to-transparent"
      >
        <FaInstagram className="text-white text-2xl" />
      </a>
      <a
        href="https://facebook.com"
        ref={facebookRef}
        className="p-2 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gradient-to-l from-black to-transparent"
      >
        <FaFacebook className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
