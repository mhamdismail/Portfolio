import React, { useRef } from "react";
import FlipCard from "@/components/Service/components/page"; // Import the FlipCard component
import { CiCloudRainbow } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { useAnimateScroll } from "@/components/Animation/UseAnimateScroll";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating dynamic, high-performing user interfaces using modern frontend frameworks like React.js and Next.js.",
      detailedDescription:
        "With a focus on performance and SEO optimization, we specialize in building scalable, responsive websites using React and modern frontend technologies like Next.js. Our designs ensure an intuitive user experience.",
      linkHref: "#frontend-development",
      iconSrc: <FaReact />,
      skillName: "React.js, Next.js, HTML, CSS",
    },
    {
      title: "Backend Development",
      description:
        "Building robust backend systems with technologies like Node.js, Express.js, and Laravel. Focused on scalability and performance .",
      detailedDescription:
        "We develop scalable, secure backend systems using technologies like Node.js, Express.js, and Laravel. We focus on data integrity, security, and performance to ensure your application is fast, reliable, and safe.",
      linkHref: "#backend-development",
      iconSrc: <CiServer />,
      skillName: "Node.js, Express.js, Laravel",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web development with expertise in both frontend (React.js, Next.js) and backend (Node.js, Express.js, Laravel)",
      detailedDescription:
        "We handle both frontend and backend development to create seamless web applications. Our expertise in React, Next.js, Node.js, Express.js, and Laravel allows us to build dynamic, scalable, and user-friendly applications.",
      linkHref: "#full-stack-web-development",
      iconSrc: <FaCode />,
      skillName: "React.js, Next.js, Node.js, Express.js, Laravel",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing secure, scalable, and user-friendly e-commerce platforms with real-time inventory, secure payment gateways.",
      detailedDescription:
        "We build custom e-commerce platforms tailored to your business needs. From real-time inventory management to seamless payment gateways, we ensure a smooth shopping experience for your customers.",
      linkHref: "#ecommerce-solutions",
      iconSrc: <FaStore />,
      skillName: "Shopify, WooCommerce, Payment Gateways",
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs to enhance the functionality of applications. Expertise in RESTful and GraphQL APIs for seamless data exchange",
      detailedDescription:
        "We integrate APIs from third-party services to enhance your application’s functionality. With experience in RESTful and GraphQL APIs, we ensure smooth data exchange for real-time user interactions.",
      linkHref: "#api-integration",
      iconSrc: <CiCloudRainbow />,
      skillName: "RESTful APIs, GraphQL",
    },
    {
      title: "Desktop Application Development",
      description:
        "Building cross-platform desktop applications using WPF and C#",
      detailedDescription:
        "We develop cross-platform desktop applications using WPF and C#, ensuring performance and security. Our goal is to provide seamless experiences for users on different platforms=",
      linkHref: "#desktop-application",
      iconSrc: <IoIosDesktop />,
      skillName: "WPF, C#, Cross-Platform Development",
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3">
      {services.map((service, index) => (
        <FlipCard
          key={index}
          title={service.title}
          iconSrc={service.iconSrc}
          skillName={service.skillName}
          description={service.description}
          detailedDescription={service.detailedDescription}
          linkHref={service.linkHref}
        />
      ))}
    </div>
  );
};

export default Services;
