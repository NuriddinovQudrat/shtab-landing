"use client";

import React, { useState } from "react";
import { CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface EmployeeCardProps {
  employee: {
    imgUrl: string;
    name: string;
    position: string;
    tel: string[];
    email?: string;
  };
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
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
              <div
                className={cn(
                  "w-full h-full object-cover transition-all duration-200",
                  isHover && "scale-110",
                )}
                style={{
                  backgroundImage: `url(${employee.imgUrl ? employee.imgUrl : "/employees/user.png"})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className={cn(
                  "w-full absolute text-white font-semibold flex flex-col opacity-0 bottom-0 left-0 right-0 h-28 items-center justify-center transition-all duration-200",
                  isHover && "opacity-100",
                )}
                style={{
                  background: "linear-gradient(0deg, #459e5f 0, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <h1 className="text-2xl">{employee.name}</h1>
                <p className="text-sm">{employee.position}</p>
                <div className="flex items-center justify-around text-sm md:flex-row flex-col">
                  <div>
                    {employee?.tel?.map((tel, index1) => (
                      <a href={`tel:${tel}`} key={index1}>
                        {tel}
                        {index1 !== employee.tel.length - 1 && <span className="mx-1">|</span>}
                      </a>
                    ))}
                  </div>
                  <a href={`mailto:${employee.email}`} className="ml-4">
                    {employee.email}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default EmployeeCard;
