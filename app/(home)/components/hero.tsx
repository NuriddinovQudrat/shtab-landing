"use client";

import React from "react";
import { Navbar } from "./navbar";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen" id="home">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="bg-black/50 w-full h-screen z-10 absolute top-0 left-auto right-auto">
        <Navbar />
        <section>
          <div className="container mx-auto flex py-60 md:pt-96 md:flex-row flex-col items-center">
            <div className="lg:max-w-5xl">
              <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-[500] text-white lg:text-left text-center">
                {t("hero-text")}
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
