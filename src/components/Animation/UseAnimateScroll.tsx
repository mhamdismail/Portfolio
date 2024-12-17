import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Refs {
  title?: React.RefObject<HTMLElement>;
  text?: React.RefObject<HTMLElement>;
  button?: React.RefObject<HTMLElement>;
  box?: React.RefObject<HTMLElement>;
  swiperContainer?: React.RefObject<HTMLElement>; // Add swiperContainer ref
}

export const useAnimateScroll = (refs: Refs) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Title
    if (refs.title?.current) {
      gsap.fromTo(
        refs.title.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.in",
          scrollTrigger: {
            trigger: refs.title.current,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate Text
    if (refs.text?.current) {
      gsap.fromTo(
        refs.text.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: refs.text.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate Button
    if (refs.button?.current) {
      gsap.fromTo(
        refs.button.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: refs.button.current,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate Rotating Box
    if (refs.box?.current) {
      gsap.fromTo(
        refs.box.current,
        { rotation: 0 },
        {
          rotation: 720,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "circ.inOut",
        }
      );
    }

    // Animate Swiper Container
    if (refs.swiperContainer?.current) {
      gsap.fromTo(
        refs.swiperContainer.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: refs.swiperContainer.current,
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [refs]);
};
