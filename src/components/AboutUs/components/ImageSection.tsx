import Image from "next/image";
import { useRef } from "react";
import { useAnimateScroll } from "../../Animation/UseAnimateScroll";

const ImageSection = () => {
  const refs = {
    box: useRef<HTMLDivElement>(null),
  };

  useAnimateScroll(refs);

  return (
    <div className="flex justify-center items-center md:justify-end w-full ">
      <div className="relative flex h-[300px] w-[300px] md:w-[450px]  md:h-[450px] border-4 justify-center items-center border-white rounded-full overflow-hidden">
        <div className="absolute flex h-[292px] w-[292px]  md:w-[442px]  md:h-[442px]  border-4 justify-center items-center rounded-full">
          <div
            ref={refs.box}
            className="w-40 h-[380px] md:h-[500px] bg-blue-600"
          ></div>
          <Image
            src="/images/112A4964.JPG"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
