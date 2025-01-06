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
    <div className="p-4 py-10" id="employees">
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
    imgUrl: "/employees/2.jpg",
    name: "Xolmurodova Maqsad",
    position: "Buyuk Britaniya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/3.jpg",
    name: "Murodov Sardorbek ",
    position: "Samarqand viloyatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/4.jpg",
    name: "Ismailov Mustaqim",
    position: "Sirdaryo viloyatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/5.jpg",
    name: "Hasanov Azizjon",
    position: "Latviya, Litva va Estoniya davlatlariga mas'ul xodim",
  },
  {
    imgUrl: "/employees/6.jpg",
    name: "Muxammedov Dilshod",
    position: "Toshkent shaharga mas'ul xodim",
  },
  {
    imgUrl: "/employees/7.jpg",
    name: "",
    position: "",
  },
  {
    imgUrl: "/employees/8.jpg",
    name: "Karimov Ibrohim",
    position: "Toshkent viloyatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/9.jpg",
    name: "Xo'janiyozov Xayrullo",
    position: "AQSH va Kanada davlatlariga mas'ul xodim",
  },
  {
    imgUrl: "/employees/10.jpg",
    name: "Saydazimov Sarvar",
    position: "Xitoy davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/11.jpg",
    name: "Suyunov Shahzod",
    position: "Arab davlatlariga mas'ul xodim",
  },
  {
    imgUrl: "/employees/12.jpg",
    name: "Karimov Islom",
    position: "Fransiya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/13.jpg",
    name: "Shonanov Oybek",
    position: "Turkiya va Qirg'iziston davlatlariga mas'ul xodim",
  },
  {
    imgUrl: "/employees/14.jpg",
    name: "Hasanova Arofat",
    position: "Germaniya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/15.jpg",
    name: "Xo'djayeva Kamila",
    position: "Janubiy Koreya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/16.jpg",
    name: "Samiyeva Nozima",
    position: "Avstriya va Vengriya davlatlariga mas'ul xodim",
  },
  {
    imgUrl: "/employees/17.jpg",
    name: "Bekmirzayev Asadbek",
    position: "Ummon Sultonligi davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/18.jpg",
    name: "Gulyamova Go'zal",
    position: "Koreya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/19.jpg",
    name: "Baxtiyorov Muhammadali",
    position: "Malayziya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/20.jpg",
    name: "Murodjonova Nargiza",
    position: "Yaponiya davlatiga mas'ul xodim",
  },
  {
    imgUrl: "/employees/21.jpg",
    name: "Ilhomova Farangiz",
    position: "Hindiston va Pokiston davlatlariga mas'ul xodim",
  },
];
