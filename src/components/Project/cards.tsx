import React from "react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  description,
  technologies,
  imageUrl,
}) => {
  return (
    <div
      className="relative w-full rounded-lg shadow-lg overflow-hidden bg-cover bg-center md:h-[500px] h-[600px] mx-auto"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Card Content */}
      <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
        {/* Title and Role */}
        <div>
          <h2 className="text-2xl sm:text-lg md:text-3xl font-bold text-blue-400">
            {title}
          </h2>
          <h3 className="text-base sm:text-sm md:text-lg text-blue-300 mt-2">
            {role}
          </h3>
        </div>

        {/* Project Description */}
        <div className="flex-grow my-4">
          <h4 className="text-lg sm:text-base md:text-xl font-semibold mb-2 text-white">
            Project Highlights:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-xs md:text-base text-blue-200">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-base sm:text-sm md:text-lg font-semibold text-white mb-2">
            Technologies Used:
          </h4>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="text-xs sm:text-xs md:text-sm text-gray-800 bg-blue-100 py-1 px-3 rounded-full shadow-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
