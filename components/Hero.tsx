import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Spotlights */}
      <>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </>

      {/* Background Overlay */}
      <div
        className="absolute inset-0 w-full h-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       flex items-center justify-center"
      >
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"
        />
      </div>

      {/* Hero Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic
          </p>

          {/* Text Effect */}
          <TextGenerateEffect
            words="Bringing Ideas to Life with Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Description */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Subahan, a MERN Stack Developer based in Bangladesh.
          </p>

          {/* Magic Button */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
