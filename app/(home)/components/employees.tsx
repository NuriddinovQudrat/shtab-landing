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
import Employee1 from "@/components/images/employees/1.jpg";
import Employee2 from "@/components/images/employees/2.jpg";
import Employee3 from "@/components/images/employees/3.jpg";
import Employee4 from "@/components/images/employees/4.jpg";
import Employee5 from "@/components/images/employees/5.jpg";
import Employee6 from "@/components/images/employees/6.jpg";
// import Employee7 from "@/components/images/employees/7.jpg";
import Employee8 from "@/components/images/employees/8.jpg";
import Employee9 from "@/components/images/employees/9.jpg";
import Employee10 from "@/components/images/employees/10.jpg";
import Employee11 from "@/components/images/employees/11.jpg";
import Employee12 from "@/components/images/employees/12.jpg";
import Employee13 from "@/components/images/employees/13.jpg";
import Employee14 from "@/components/images/employees/14.jpg";
import Employee15 from "@/components/images/employees/15.jpg";
import Employee16 from "@/components/images/employees/16.jpg";
import Employee17 from "@/components/images/employees/17.jpg";
import Employee18 from "@/components/images/employees/18.jpg";
import Employee19 from "@/components/images/employees/19.jpg";
import Employee20 from "@/components/images/employees/20.jpg";
import Employee21 from "@/components/images/employees/21.jpg";
import Employee22 from "@/components/images/employees/22.jpg";

const Employees = () => {
  const { t } = useTranslation();

  const employees = [
    {
      imgUrl: Employee1.src,
      name: "Ismoilov Husniddin",
      position: t("leader"),
      tel: ["+99833 633 44 44"],
      email: "manager07@exportstate.com",
    },
    {
      imgUrl: Employee2.src,
      name: "Xolmurodova Maqsad",
      position: t("gbr"),
      tel: ["+99871 202 77 78", "1588"],
      email: "manager07@exportstate.com",
    },
    {
      imgUrl: Employee3.src,
      name: "Murodov Sardorbek ",
      position: t("samarqand"),
      tel: ["+99871 202 77 78", "1513"],
    },
    {
      imgUrl: Employee4.src,
      name: "Ismailov Mustaqim",
      position: t("sirdaryo"),
      tel: ["+99871 202 77 78", "1515"],
    },
    {
      imgUrl: Employee5.src,
      name: "Hasanov Azizjon",
      position: t("latviya-litva"),
      tel: ["+99871 202 77 78", "1517"],
      email: "manager22@exportstate.com",
    },
    {
      imgUrl: Employee6.src,
      name: "Muxamedov Dilshod",
      position: t("toshkent"),
      tel: ["+99871 202 77 78", "1575"],
    },
    //   {
    //     imgUrl: Employee7.src,
    //     name: "",
    //     position: "",
    //     tel: ["+99871 202 77 78", "1588"],
    //     email: "manager07@exportstate.com",
    //   },
    {
      imgUrl: Employee8.src,
      name: "Karimov Ibrohim",
      position: t("toshkent-v"),
      tel: ["+99871 202 77 78", "1516"],
      email: "manager07@exportstate.com",
    },
    {
      imgUrl: Employee9.src,
      name: "Xo'janiyozov Xayrullo",
      position: t("aqsh-canada"),
      tel: ["+99871 202 77 78", "1595"],
      email: "manager21@exportstate.com",
    },
    {
      imgUrl: Employee10.src,
      name: "Saydazimov Sarvar",
      position: t("china"),
      tel: ["+99871 202 77 78", "1584"],
      email: "manager11@exportstate.com",
    },
    {
      imgUrl: Employee11.src,
      name: "Suyunov Shahzod",
      position: t("arab"),
      tel: ["+99871 202 77 78", "1596"],
      email: "manager13@exportstate.com",
    },
    {
      imgUrl: Employee12.src,
      name: "Karimov Islom",
      position: t("fransiya"),
      tel: ["+99871 202 77 78", "1593"],
      email: "manager19@exportstate.com",
    },
    {
      imgUrl: Employee13.src,
      name: "Shonanov Oybek",
      position: t("turk-qirgz"),
      tel: ["+99871 202 77 78", "1587"],
      email: "manager14@exportstate.com",
    },
    {
      imgUrl: Employee14.src,
      name: "Hasanova Arofat",
      position: t("germany"),
      tel: ["+99871 202 77 78", "1596"],
      email: "manager06@exportstate.com",
    },
    {
      imgUrl: Employee15.src,
      name: "Xo'djayeva Kamila",
      position: t("koreya-singapur"),
      tel: ["+99871 202 77 78", "1583"],
      email: "manager10@exportstate.com",
    },
    {
      imgUrl: Employee16.src,
      name: "Samiyeva Nozima",
      position: t("avstria-vengria"),
      tel: ["+99871 202 77 78", "1581"],
      email: "manager08@exportstate.com",
    },
    {
      imgUrl: Employee17.src,
      name: "Bekmirzayev Asadbek",
      position: t("ummon-isroil"),
      tel: ["+99871 202 77 78", "1596"],
      email: "manager23@exportstate.com",
    },
    {
      imgUrl: Employee18.src,
      name: "Gulyamova Go'zal",
      position: t("korea"),
      tel: ["+99871 202 77 78", "1583"],
      email: "manager20@exportstate.com",
    },
    {
      imgUrl: Employee19.src,
      name: "Baxtiyorov Muhammadali",
      position: t("malaysia"),
      tel: ["+99871 202 77 78", "1588"],
      email: "manager07@exportstate.com",
    },
    {
      imgUrl: Employee20.src,
      name: "Murodjonova Nargiza",
      position: t("japan"),
      tel: ["+99871 202 77 78", "1583"],
      email: "manager09@exportstate.com",
    },
    {
      imgUrl: Employee21.src,
      name: "Ilhomova Farangiz",
      position: t("india-pakistan"),
      tel: ["+99871 202 77 78", "1590"],
      email: "manager17@exportstate.com",
    },
    {
      imgUrl: Employee22.src,
      name: "Orziqulova Sevinch",
      position: t("italy-sweden"),
      tel: ["+99871 202 77 78", "1585"],
      email: "manager16@exportstate.com",
    },
  ];

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
            <h1 className="text-3xl mb-5">{t("export-employees")}</h1>
          </div>
        </div>

        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 15000,
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

export default Employees;
