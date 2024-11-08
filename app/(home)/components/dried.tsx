"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

export const Dried = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex md:flex-row-reverse flex-col-reverse">
      <div className="md:w-1/2 w-full flex items-center justify-end">
        <div className="lg:w-1/2 w-full p-4 lg:pl-20 mr-auto">
          <h1 className="flex items-center text-secondary-foreground uppercase mb-5">
            <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
            Qurutilgan
          </h1>
          <h1 className="sm:text-4xl text-3xl mb-5">Qurutilgan meva va sabzavotlar</h1>
          <p className="text-sm mb-10">
            O&apos;zbekiston Respublikasida eksport uchun mo&apos;ljallangan 40 turga yaqin
            qurutilgan meva va sabzavotlar turi mavjud
          </p>
          <Link
            href={"https://agrokomakchi.uz/mahsulotlar/1/?title=Quritilgan%20mahsulotlar"}
            target="_blank"
          >
            <Button variant={"default"}>
              Batafsil <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative 2xl:h-screen xl:h-[70vh] lg:h-[60vh] md:h-[50vh] h-[40vh]">
        <Image
          alt="Image"
          src={"/dried.JPG"}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,[YOUR_BASE64_BLUR_DATA]"
          className={`hover:scale-110 transition-all duration-300 ${
            isLoaded ? "blur-0" : "blur-lg"
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};
