import DownloadButton from "@/components/Button/DownloadButton";
import React, { useRef } from "react";
import { useAnimateScroll } from "../../Animation/UseAnimateScroll";
import SubmitButton from "@/components/Button/SubmitButton";

interface TextSectionProps {
  paragraph: string;
}
const TextSection: React.FC<TextSectionProps> = ({ paragraph }) => {
  const refs = {
    text: useRef<HTMLParagraphElement>(null),
    button: useRef<HTMLDivElement>(null),
  };
  useAnimateScroll(refs);

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-6 py-12">
      <p
        ref={refs.text}
        className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
      >
        {paragraph}
      </p>
      <div
        className="flex justify-center items-center md:justify-start py-4"
        ref={refs.button}
      >
        <DownloadButton
          downloadUrl="/Mohammad Ismail full Stack Developer.pdf"
          fileName="Mohammad Ismail Full Stack Developer.pdf"
        />
      </div>
    </div>
  );
};

export default TextSection;
