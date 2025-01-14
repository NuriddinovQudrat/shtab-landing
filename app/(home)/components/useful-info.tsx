"use client";

import LinkCard from "@/components/shared/link-card";
import React from "react";
import { useTranslation } from "react-i18next";

const UsefulInfo = () => {
  const { t } = useTranslation();

  const materials = [
    {
      title: "O‘zbekiston Respublikasi O‘simliklar Karantini va Himoyasi agentligi haqida",
      link: "./useful-info/1.pdf",
    },
    {
      title: "Xalqaro standartlar to‘g‘risida ma’lumot",
      link: "./useful-info/2.pdf",
    },
  ];

  return (
    <div className="p-4 py-10" id="useful-info">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full">
            <h1 className="flex items-center text-secondary-foreground uppercase">
              <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
              {t("useful-info")}
            </h1>
          </div>
          <div className="lg:w-2/3 w-full">
            {/* <h1 className="sm:text-4xl text-3xl mb-5">{t("national-companies")}</h1> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:mt-10 mt-5 container mx-auto w-full">
        {materials?.map((material, index) => <LinkCard key={index} material={material} />)}
      </div>
    </div>
  );
};

export default UsefulInfo;
