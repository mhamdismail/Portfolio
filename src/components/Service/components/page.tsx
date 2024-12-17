import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type FlipCardProps = {
  title: string;
  iconSrc: JSX.Element;
  skillName: string;
  description: string;
  detailedDescription: string;
  linkHref: string;
};

const FlipCard: React.FC<FlipCardProps> = ({
  title,
  iconSrc,
  skillName,
  description,
  detailedDescription,
  linkHref,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(cardRef.current, { rotationY: 0, transformStyle: "preserve-3d" });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotationY: 180,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      className="group w-full h-full md:w-72 md:h-96 perspective-1500 cursor-pointer mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Flip card for ${title}`}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transform transition-transform duration-700"
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg">
          <h3 className="text-3xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
            {title}
          </h3>
          <div className="flex flex-col items-center justify-around sm:justify-center gap-4 sm:gap-6 flex-grow">
            <div className="mb-4 sm:mb-6">
              {React.cloneElement(iconSrc, {
                className: "w-40 h-40 sm:w-28 sm:h-28 md:w-32 md:h-32",
              })}{" "}
            </div>
            <p className="text-xl sm:text-lg md:text-sm text-center">
              {description}
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="relative w-full h-full rotate-y-180 backface-hidden rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg group hover:shadow-xl hover:shadow-teal-400/50">
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-shadow-lg">
            {title}
          </h3>
          <div className="flex flex-col items-center justify-center flex-grow">
            <p className="text-xl sm:text-lg md:text-sm text-center text-shadow-md">
              {detailedDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
