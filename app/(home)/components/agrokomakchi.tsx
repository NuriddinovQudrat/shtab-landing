"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/legacy/image";
import React from "react";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const Agrokomakchi = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-[40vh] relative">
      <div
        className="bg-[url('/agrokomakchi/bg-agrokomakchi.jpeg')] w-full h-full absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-full bg-black/60 absolute z-[1]"></div>

      {/* CENTER */}
      <div className="w-full h-full absolute z-[2] flex flex-col justify-center items-center gap-10">
        <h1 className="text-white md:text-3xl text-2xl uppercase font-bold">Mobil ilovamiz</h1>
        <div className=" flex items-center justify-center md:gap-10 gap-5">
          <a href="https://apps.apple.com/uz/app/agrokomakchi/id1658946098" target="_blank">
            <div className="bg-white rounded-md p-2 px-4 flex items-center gap-2">
              <Image
                src={"/agrokomakchi/app-store.png"}
                alt="App Stor"
                width={isMobile ? 30 : 40}
                height={isMobile ? 30 : 40}
              />
              <div>
                <p className="text-sm">Yuklab oling</p>
                <h2 className="md:text-xl font-semibold">App Store</h2>
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=uz.karantin.agrokomakchi"
            target="_blank"
          >
            <div className="bg-white rounded-md p-2 px-4 flex items-center gap-2">
              <Image
                src={"/agrokomakchi/play-store.png"}
                alt="App Stor"
                width={isMobile ? 30 : 40}
                height={isMobile ? 30 : 40}
              />
              <div>
                <p className="text-sm">Yuklab oling</p>
                <h2 className="md:text-xl font-semibold">Google Play</h2>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 z-[3]">
        <div className="flex gap-5 items-center">
          <a href="https://t.me/exportstate" target="_blank">
            <FaTelegram color="white" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/agency-of-plant-protection-and-quarantine-of-the-republic-of-uzbekistan/"
            target="_blank"
          >
            <FaLinkedin color="white" size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=12894742834&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaSquareWhatsapp color="white" size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};
