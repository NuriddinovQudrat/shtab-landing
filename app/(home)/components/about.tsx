"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary p-4 py-10" id="about">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              {t("about")}
            </h1>
          </div>
          <div className="md:w-2/3 w-full mb-5">
            <h1 className="sm:text-4xl text-3xl mb-5 text-white">{t("main-tasks")}</h1>
          </div>
        </div>

        <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-10">
          <div className="lg:w-1/3 w-full text-white">
            <div className="flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="md:py-6">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">
                        {t("task")} 1
                      </h2>
                      <p className="leading-relaxed">{t("task1")}</p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">
                        {t("task")} 2
                      </h2>
                      <p className="leading-relaxed">{t("task2")}</p>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">
                        {t("task")} 3
                      </h2>
                      <p className="leading-relaxed">{t("task3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 h-full w-full flex items-center justify-center">
            <Carousel
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 10000,
                }),
              ]}
            >
              <CarouselContent>
                {carouselItems?.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-transparent border-none flex items-center justify-center w-full">
                        <CardContent className="flex w-full lg:h-[500px] md:h-[400px] h-[300px] items-center justify-center p-6 relative overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.description}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            className="rounded-xl"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

const carouselItems = [
  {
    imageUrl: "/carousel/export-shtab1.jpg",
    description: "export shtab",
  },
  {
    imageUrl: "/carousel/export-shtab2.jpg",
    description: "export shtab",
  },
  {
    imageUrl: "/carousel/export-shtab3.jpg",
    description: "export shtab",
  },
  {
    imageUrl: "/carousel/export-shtab4.jpg",
    description: "export shtab",
  },
  {
    imageUrl: "/carousel/export-shtab5.jpg",
    description: "export shtab",
  },
  {
    imageUrl: "/carousel/export-shtab6.jpg",
    description: "export shtab",
  },
];
