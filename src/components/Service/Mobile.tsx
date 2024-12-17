import React, { useEffect, useRef } from "react";
import FlipCard from "@/components/Service/components/page"; // Import the FlipCard component
import { CiCloudRainbow, CiServer } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { FaStore, FaCode, FaReact } from "react-icons/fa";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const emblaRef = useRef<HTMLDivElement | null>(null); // Ref for Embla viewport

  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating dynamic, high-performing user interfaces using modern frontend frameworks like React.js and Next.js. Specializing in responsive design and SEO optimization.",
      detailedDescription:
        "With a focus on performance and SEO optimization, we specialize in building scalable, responsive websites using React and modern frontend technologies like Next.js. Our designs ensure an intuitive user experience.",
      linkHref: "#frontend-development",
      iconSrc: <FaReact />,
      skillName: "React.js, Next.js, HTML, CSS",
    },
    {
      title: "Backend Development",
      description:
        "Building robust backend systems with technologies like Node.js, Express.js, and Laravel. Focused on scalability, security, and performance optimization.",
      detailedDescription:
        "We develop scalable, secure backend systems using technologies like Node.js, Express.js, and Laravel. We focus on data integrity, security, and performance to ensure your application is fast, reliable, and safe.",
      linkHref: "#backend-development",
      iconSrc: <CiServer />,
      skillName: "Node.js, Express.js, Laravel",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end web development with expertise in both frontend (React.js, Next.js) and backend (Node.js, Express.js, Laravel).",
      detailedDescription:
        "We handle both frontend and backend development to create seamless web applications. Our expertise in React, Next.js, Node.js, Express.js, and Laravel allows us to build dynamic, scalable, and user-friendly applications.",
      linkHref: "#full-stack-web-development",
      iconSrc: <FaCode />,
      skillName: "React.js, Next.js, Node.js, Express.js, Laravel",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Developing secure, scalable, and user-friendly e-commerce platforms with real-time inventory, secure payment gateways, and dynamic user experiences.",
      detailedDescription:
        "We build custom e-commerce platforms tailored to your business needs. From real-time inventory management to seamless payment gateways, we ensure a smooth shopping experience for your customers.",
      linkHref: "#ecommerce-solutions",
      iconSrc: <FaStore />,
      skillName: "Shopify, WooCommerce, Payment Gateways",
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs to enhance the functionality of applications. Expertise in RESTful and GraphQL APIs for seamless data exchange.",
      detailedDescription:
        "We integrate APIs from third-party services to enhance your application’s functionality. With experience in RESTful and GraphQL APIs, we ensure smooth data exchange for real-time user interactions.",
      linkHref: "#api-integration",
      iconSrc: <CiCloudRainbow />,
      skillName: "RESTful APIs, GraphQL",
    },
    {
      title: "Desktop Application Development",
      description:
        "Building cross-platform desktop applications using WPF and C#.",
      detailedDescription:
        "We develop cross-platform desktop applications using WPF and C#, ensuring performance and security. Our goal is to provide seamless experiences for users on different platforms, without compromising functionality.",
      linkHref: "#desktop-application",
      iconSrc: <IoIosDesktop />,
      skillName: "WPF, C#, Cross-Platform Development",
    },
  ];

  useEffect(() => {
    let embla: ReturnType<typeof EmblaCarousel> | null = null;

    if (emblaRef.current) {
      embla = EmblaCarousel(emblaRef.current, { loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false }),
      ]);
    }

    return () => {
      if (embla) embla.destroy();
    };
  }, []);

  return (
    <div className="embla w-full flex justify-center items-center pt-2">
      <div
        className="embla__viewport w-full h-[700px]  sm:h-[500px] overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full gap-3">
          {services.map((service, index) => (
            <div
              className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-full${
                index === 0 ? "pl-2" : ""
              } ${index === services.length - 1 ? "pr-4" : ""}`}
              key={index}
            >
              <div className="h-full w-full flex justify-center items-center py-0 px-0">
                <FlipCard
                  title={service.title}
                  iconSrc={service.iconSrc}
                  skillName={service.skillName}
                  description={service.description}
                  detailedDescription={service.detailedDescription}
                  linkHref={service.linkHref}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
