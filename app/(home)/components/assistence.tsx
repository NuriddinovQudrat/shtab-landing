"use client";

import Image from "next/legacy/image";
import React from "react";
import { useTranslation } from "react-i18next";

export const Assistence = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary p-4 py-10" id="assistence">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              {t("help-export")}
            </h1>
          </div>
          <div className="md:w-2/3 w-full mb-5">
            <h1 className="sm:text-4xl text-3xl mb-5 text-white">{t("help-export-text")}</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5">
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image
                src={"/assistence/vegetable.png"}
                alt="Vegetables and Fruits"
                width={72}
                height={72}
              />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 1</h1>
            <p className="text-sm">{t("stage1")}</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/warehouse.png"} alt="Warehouse" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 2</h1>
            <p className="text-sm">{t("stage2")}</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/vegetables.png"} alt="Vegetables" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 3</h1>
            <p className="text-sm">{t("stage3")}</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/delivery.png"} alt="Deliverys" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 4</h1>
            <p className="text-sm">{t("stage4")}</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/inspector.png"} alt="Inspector" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 5</h1>
            <p className="text-sm">{t("stage5")}</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/location.png"} alt="Location" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">{t("stage")} 6</h1>
            <p className="text-sm">{t("stage6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
