import Image from "next/image";
import React from "react";

type SkillsCardProps = {
  iconSrc: string;
  skillName: string;
  description: string;
};

const SkillsCard: React.FC<SkillsCardProps> = ({
  iconSrc,
  skillName,
  description,
}) => {
  return (
    <div className="group h-60 relative flex flex-col items-center justify-center p-14 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ">
      <div className="absolute inset-0 rounded-lg opacity-75 bg-gradient-to-tl from-blue-500 to-teal-500 blur-lg group-hover:blur-md group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative z-10 flex flex-col items-center">
        {" "}
        <Image
          src={iconSrc}
          alt={skillName}
          className="w-20 h-20 mb-4 object-contain rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          width={100}
          height={100}
        />
        <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-teal-300">
          {skillName}
        </h3>
        <p className="text-sm text-gray-300 text-center transition-colors duration-300 group-hover:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
