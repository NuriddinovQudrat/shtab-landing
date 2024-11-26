"use client";

import { StatisticsTab } from "@/components/shared/statistics-tab";
import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:py-20" id="statistics">
      <div className="flex">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3 w-full">
          <p className="md:text-3xl text-2xl font-[500] py-5">{t("statistics-text")}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-10 mt-5 uppercase">
        <StatisticsTab title={t("qishloq-xujaligi")} number={120} extra="+" />
        <StatisticsTab title={t("logistik-kompaniyalar")} number={200} extra="+" />
        <StatisticsTab title={t("brands")} number={35} extra="+" />
        <StatisticsTab title={t("eksport-korxonalar")} number={1000} extra="+" />
        <StatisticsTab title={t("importyorlar")} number={300} extra="+" />
        <StatisticsTab title={t("eksportbop-davlatlar")} number={80} extra="+" />
        <StatisticsTab title={t("qadoqlash-korxonalar")} number={200} extra="" />
        <StatisticsTab title={t("murojaatlar")} number={1000} extra="+" />
      </div>
    </div>
  );
};
