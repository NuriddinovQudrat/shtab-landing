"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import { CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const EmployeeCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <CarouselItem
      className="pl-1 md:basis-1/2 lg:basis-1/3"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="p-1">
        <Card>
          <CardContent className="flex p-0 rounded-md md:h-[500px] h-[400px] items-center justify-center">
            <div className="w-full h-full rounded-md relative overflow-hidden">
              <Image
                src={"/employees/1.jpg"}
                alt="User"
                layout="fill"
                objectPosition={"center"}
                className={cn("object-cover transition-all duration-200", isHover && "scale-110")}
              />
              <div
                className={cn(
                  "w-full absolute flex opacity-0 bottom-0 left-0 right-0 h-20 items-center justify-center transition-all duration-200",
                  isHover && "opacity-100",
                )}
                style={{
                  background: "linear-gradient(0deg, #459e5f 0, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <h1 className="text-white text-2xl font-semibold">Yorkin Malikov</h1>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default EmployeeCard;
