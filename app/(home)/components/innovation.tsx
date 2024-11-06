"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/legacy/image";

export const Innovation = () => {
  return (
    <div className="flex md:flex-row-reverse flex-col-reverse">
      <div className="md:w-1/2 w-full flex items-center justify-end">
        <div className="lg:w-1/2 w-full p-4 lg:pl-20 mr-auto">
          <h1 className="flex items-center text-secondary-foreground uppercase mb-5">
            <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
            Innovation
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-5">Driving innovation</h1>
          <p className="text-sm mb-10">
            Delve into our ongoing commitment to sustainability, powered by technology and
            innovation
          </p>
          <Button variant={"default"}>
            Learn more <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative 2xl:h-screen xl:h-[70vh] lg:h-[60vh] md:h-[50vh] h-[40vh]">
        <Image
          alt="Image"
          src={"/innovation.png"}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[YOUR_BASE64_BLUR_DATA]"
          className="hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};
