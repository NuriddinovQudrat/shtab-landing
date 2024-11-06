"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/legacy/image";

export const Foods = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse">
      <div className="md:w-1/2 w-full flex items-center justify-end">
        <div className="lg:w-1/2 w-full p-4 lg:pr-20">
          <h1 className="flex items-center text-secondary-foreground uppercase mb-5">
            <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
            fresh & food
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-5">Bringing our products to shelves</h1>
          <p className="text-sm mb-10">
            Discover our extensive range of products, a testament to our dedication in delivering
            wholesome and nutritious food to our customers
          </p>
          <Button variant={"default"}>
            Learn more <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative 2xl:h-screen xl:h-[70vh] lg:h-[60vh] md:h-[50vh] h-[40vh]">
        <Image
          alt="Image"
          src={"/vegetables.jpg"}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};
