import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SkillsCard from "../Skills/SkillsCards/SkillsCards";

const Swiper = () => {
  const skills1 = [
    {
      iconSrc: "/icon/html-5.png",
      skillName: "HTML",
      description: "Building structured and accessible web content with HTML5",
    },
    {
      iconSrc: "/icon/css-3.png",
      skillName: "CSS",
      description:
        "Styling responsive and adaptive layouts with CSS3 for styling",
    },
    {
      iconSrc: "/icon/tailwind.png",
      skillName: "Tailwind CSS",
      description:
        "Building modern, responsive interfaces with Tailwind CSS for styling",
    },
    {
      iconSrc: "/icon/react.png",
      skillName: "React.js",
      description: "Developing dynamic, responsive UIs using React.js",
    },
    {
      iconSrc: "/icon/letter-n.png",
      skillName: "Next.js",
      description:
        "Server-side rendering and SEO-friendly web apps with Next.js",
    },
    {
      iconSrc: "/icon/node-js.png",
      skillName: "Node.js",
      description:
        "Building scalable backend services with Node.js efficiently .",
    },
    {
      iconSrc: "/icon/example.png",
      skillName: "Express.js",
      description: "Creating REST APIs and backend solutions with Express.js",
    },
    {
      iconSrc: "/icon/database.png",
      skillName: "MongoDB",
      description: "NoSQL database design and management with MongoDB",
    },
  ];

  const skills2 = [
    {
      iconSrc: "/icon/mysql.png",
      skillName: "MySQL",
      description: "Designing and optimizing relational databases with MySQL",
    },
    {
      iconSrc: "/icon/java-script.png",
      skillName: "JavaScript",
      description:
        "Skilled in ES6+ JavaScript to build efficient and scalable full-stack applications",
    },
    {
      iconSrc: "/icon/php.png",
      skillName: "PHP",
      description:
        "Building robust backend services with PHP and the Laravel framework ",
    },
    {
      iconSrc: "/icon/c-sharp.png",
      skillName: "C#",
      description: "Developing desktop applications using C# and WPF",
    },
    {
      iconSrc: "/icon/git.png",
      skillName: "Git",
      description: "Version control and collaborative development with Git",
    },
    {
      iconSrc: "/icon/problem-solving-skills.png",
      skillName: "Problem-solving",
      description: "Creative and effective solutions to complex challenges",
    },
    {
      iconSrc: "/icon/networking.png",
      skillName: "Communication",
      description:
        "Strong communication skills for effective collaboration in development .",
    },
    {
      iconSrc: "/icon/united.png",
      skillName: "Teamwork",
      description:
        "Collaborating effectively in agile and cross-functional teams .",
    },
  ];

  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 4000, // Autoplay delay for the first swiper
      stopOnInteraction: true,
    }),
  ]);

  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000, // Autoplay delay for the second swiper
      stopOnInteraction: true,
    }),
  ]);

  return (
    <div>
      {/* First swiper */}
      <div className="embla w-full flex justify-center items-center">
        <div
          className="embla__viewport w-full h-full overflow-hidden"
          ref={emblaRef1}
        >
          <div className="embla__container flex gap-3">
            {skills2.map((skill, index) => (
              <div
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-5/6 ${
                  index === 0 ? "pl-2" : ""
                } ${index === skills2.length - 1 ? "pr-4" : ""}`}
                key={index}
              >
                <div className="h-full py-2 px-5">
                  <SkillsCard
                    iconSrc={skill.iconSrc}
                    skillName={skill.skillName}
                    description={skill.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer between swipers */}
      <div className="my-12"></div>

      {/* Second swiper (right to left direction) */}
      <div className="embla w-full flex justify-center items-center">
        <div
          className="embla__viewport w-full h-full overflow-hidden"
          ref={emblaRef2}
        >
          <div className="embla__container flex gap-3">
            {skills1.map((skill, index) => (
              <div
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-5/6 ${
                  index === 0 ? "pl-2" : ""
                } ${index === skills1.length - 1 ? "pr-4" : ""}`}
                key={index}
              >
                <div className="h-full py-2 px-5">
                  <SkillsCard
                    iconSrc={skill.iconSrc}
                    skillName={skill.skillName}
                    description={skill.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
