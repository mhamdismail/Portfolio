"use client";
import React, { useCallback, useEffect, useState } from "react";
import Cards from "@/components/Project/cards";
import UseEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const Swiper = () => {
  const project = [
    {
      title: "Hospital Website",
      role: "Full Stack Developer",
      description: [
        "Developed a hospital website with features for session scheduling, reporting, payment management, and appointment handling.",
        "Automated scheduling processes to enhance efficiency and resource allocation.",
        "Designed an intuitive user interface for both patients and administrative staff.",
        "Improved data management with optimized MySQL queries, enhancing overall performance.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "Tailwind CSS",
        "js-cookie",
      ],
      imageUrl: "/images/hospital.png",
    },
    {
      title: "Clinic Management System",
      role: "Full Stack Developer",
      description: [
        "Created a clinic system with APIs for patient management, appointment scheduling, and authentication.",
        "Enhanced UX with animations, responsive design, and integrated SEO strategies for better visibility.",
        "Utilized nodemailer for automated email notifications, improving patient communication.",
        "Implemented multi-language support, catering to a diverse user base.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "Sequelize",
        "MySQL",
        "Tailwind CSS",
        "Swiper.js",
        "Framer Motion",
      ],
      imageUrl: "/images/CLINIC.png",
    },
    {
      title: "Coffee Shop Website",
      role: "Full Stack Developer",
      description: [
        "Built a coffee shop site with dynamic menu displays, secure payments, and event promotion features.",
        "Implemented a user-friendly interface, ensuring ease of navigation across devices.",
        "Integrated responsive design to provide a seamless experience on mobile and desktop.",
        "Applied SEO best practices, increasing online visibility and customer engagement.",
      ],
      technologies: ["Next.js", "Node.js"],
      imageUrl: "/images/CLINIC.png",
    },
    {
      title: "Online Game Cards Shop",
      role: "Full Stack Developer",
      description: [
        "Developed a multi-language shop with secure authentication, region-based features, and a dynamic cart system.",
        "Implemented real-time notifications for actions like adding items to the cart and successful logins.",
        "Customized user experience based on location, enhancing relevance and engagement.",
        "Ensured a responsive design using Tailwind CSS, providing a consistent experience across devices.",
      ],
      technologies: [
        "Node.js",
        "Next.js",
        "Telegram API",
        "i18n",
        "Tailwind CSS",
      ],
      imageUrl: "/images/gameshop.png",
    },
  ];
  const [emblaRef, emblaApi] = UseEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [slideCount, setSlideCount] = useState<number | null>(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setSlideCount(project.length);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect); // Clean up listener
    };
  }, [emblaApi, project.length]);

  return (
    <div>
      <div className="embla w-full flex justify-center items-center  ">
        <div
          className="embla__viewport w-full h-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {project.map((pro, index) => (
              <div
                key={index}
                className="embla__slide flex flex-shrink-0 w-full h-full justify-center items-cen sm:px-2"
              >
                <Cards
                  title={pro.title}
                  role={pro.role}
                  description={pro.description}
                  technologies={pro.technologies}
                  imageUrl={pro.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 w-full  px-2 py-1 md:py-3">
        <div className=" flex space-x-4  items-center justify-start w-full">
          <button
            className="px-6 py-2 bg-gray-800 justify-start text-white rounded-lg shadow-md hover:bg-gray-700"
            onClick={scrollPrev}
          >
            ←
          </button>
          <button
            className="px-6 py-2 bg-gray-800 justify-end text-white rounded-lg shadow-md hover:bg-gray-700"
            onClick={scrollNext}
          >
            →
          </button>
        </div>

        {Array.from({ length: slideCount || 0 }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
              index === selectedIndex
                ? "bg-gray-900"
                : " bg-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
