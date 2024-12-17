import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Example icons
import Image from "next/image"; // Import Next.js Image component for optimized images

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Section */}
        <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
          <p className="text-sm md:text-base">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-teal-300 hover:text-teal-200 transition-all duration-300"
            >
              mohammadismail162003@gmail.com
            </a>
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Phone:</span> +961 76 875 862
          </p>
        </div>

        <div className="flex justify-center items-center my-4 md:my-0 flex-1">
          <Image
            src="/logo/logo.svg"
            alt=" Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="flex space-x-6 mt-6 md:mt-0 flex-1 justify-end">
          <a
            href="https://www.linkedin.com/in/mohammad-ismail-6a32762b6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/mhamdismail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:mohammadismail162003@gmail.com
"
            className="text-teal-300 hover:text-teal-200 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-300 font-light">
          © 2024 Ismail. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
