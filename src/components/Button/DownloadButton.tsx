import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface DownloadButtonProps {
  downloadUrl: string; // URL of the file to download
  fileName: string; // The name for the downloaded file
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  downloadUrl,
  fileName,
}) => {
  const [state, setState] = useState("ready");
  const buttonRef = useRef(null);
  const loadingCirclesRef = useRef<SVGCircleElement[]>([]);
  const downloadIconRef = useRef(null);
  const loadingTextRef = useRef<HTMLDivElement | null>(null);

  const startLoadingAnimation = () => {
    // Animate loading circles
    loadingCirclesRef.current.forEach((circle, index) => {
      gsap.to(circle, {
        keyframes: [
          { attr: { cy: 30 }, duration: 0.3 },
          { attr: { cy: 25 }, duration: 0.6 },
          { attr: { cy: 30 }, duration: 0.3 },
          { attr: { cy: 30 }, duration: 0.3 },
          { attr: { cy: 25 }, duration: 0.6 },
          { attr: { cy: 30 }, duration: 0.3 },
          { attr: { cy: 30 }, duration: 0.3 },
          { attr: { cy: 25 }, duration: 0.6 },
          { attr: { cy: 30 }, duration: 0.3 },
        ],
        repeat: -1,
        ease: "power1.inOut",
        delay: index * 0.3,
      });
    });

    // Animate the second circle (for an expanded effect)
    gsap.to(loadingCirclesRef.current[1], {
      attr: { r: 150, cx: 95, cy: 25 },
      delay: 2,
      duration: 2,
      ease: "expo.out",
    });

    // Animate the "Downloading..." text after the circles start animating
    gsap.fromTo(
      loadingTextRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 2 }
    );
  };

  const handleExitLoadingState = () => {
    gsap.to(loadingTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (state === "loading") {
      startLoadingAnimation();
    } else if (state === "ready") {
      handleExitLoadingState();
    }
  }, [state]);

  const handleClick = () => {
    setState("loading");

    // Simulate the file download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      link.click(); // Simulate click to trigger download
      setState("ready"); // Reset to the ready state after the download
    }, 3500); // Adjust this delay for the duration of the loading animation
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`relative w-[190px] h-[50px] bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
        state === "ready" ? "text-white" : "text-gray-400"
      }`}
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      {state === "ready" && (
        <div className="flex items-center" ref={downloadIconRef}>
          <i className="fas fa-download mr-2"></i>
          <span className="font-semibold">Download Files</span>
        </div>
      )}
      {state === "loading" && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="190"
            height="50"
            viewBox="0 0 190 50"
            className="absolute"
          >
            {[50, 95, 140].map((cx, index) => (
              <circle
                key={index}
                ref={(el) => {
                  if (el) loadingCirclesRef.current[index] = el;
                }}
                className="fill-current text-gray-300"
                cx={cx}
                cy="25"
                r="12"
              />
            ))}
          </svg>

          <div
            ref={loadingTextRef}
            className="absolute flex items-center text-blue-600"
            style={{ transform: "translateY(50px)", opacity: 0 }}
          >
            <i className="fas fa-spinner animate-spin mr-2"></i>
            <span className="font-semibold">Downloading...</span>
          </div>
        </>
      )}
    </button>
  );
};

export default DownloadButton;
