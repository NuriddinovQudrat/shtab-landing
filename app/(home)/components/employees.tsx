"use client";

import EmployeeCard from "@/components/shared/employee-card";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

export const Employees = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4" id="employees">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-secondary-foreground uppercase">
              <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
              {t("employees")}
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full">
            <h1 className="sm:text-4xl text-3xl mb-5">{t("export-employees")}</h1>
          </div>
        </div>

        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {employees.map((employee, index) => (
              <EmployeeCard key={index} employee={employee} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary" />
          <CarouselNext className="text-primary" />
        </Carousel>
      </div>
    </div>
  );
};

const employees = [
  {
    imgUrl: "/employees/1.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/2.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/3.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/4.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/5.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/6.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/7.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/8.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/9.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/10.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/11.JPG",
    name: "Yorkin Malikov",
  },
  {
    imgUrl: "/employees/12.JPG",
    name: "Yorkin Malikov",
  },
];
