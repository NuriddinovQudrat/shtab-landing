"use client";

import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const { t } = useTranslation();

  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  return (
    <div className="p-4 py-10" id="location">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col-reverse md:space-x-5">
          <div className="md:w-1/2 w-full h-auto flex flex-col justify-between">
            <div>
              <h1 className="flex items-center text-secondary-foreground uppercase md:mb-10 mb-5">
                <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
                {t("address")}
              </h1>
              <h2 className="sm:text-4xl text-3xl">{t("our-address")}</h2>
            </div>
            <div className="flex flex-col gap-5 max-md:mt-5">
              <div>
                <h6 className="font-semibold">{t("address")}:</h6>
                <p>{t("full-address")}</p>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">{t("email")}:</h6>
                <a href="mailto:head3@exportstate.com">head3@exportstate.com</a>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">{t("phone")}:</h6>
                <a href="tel:+998712027778">+998 (71) 202 77 78</a>
              </div>
              <hr />
              <div>
                <h6 className="font-semibold">{t("working-days")}:</h6>
                <p>{t("m-f")} 9:00-18:00</p>
              </div>
            </div>
          </div>

          <div
            className="md:w-1/2 md:h-auto w-full h-[30vh] flex flex-col justify-between max-md:mt-5 relative rounded-xl overflow-hidden md:mb-0 mb-5"
            onMouseEnter={() => setInView(true)}
            onMouseLeave={() => setInView(false)}
          >
            <Link href={"https://agrokomakchi.uz/"} target="_blank">
              <div
                className={`w-full h-full bg-black/60 z-[1] absolute items-center justify-center transition-all duration-300 ${
                  inView ? "flex" : "hidden"
                }`}
              >
                <Button variant={"outline"}>{t("visit")}</Button>
              </div>
            </Link>
            <Image
              src={"/agrokumakchi.jpg"}
              alt="Agrokumakchi"
              loading="lazy"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,[YOUR_BASE64_BLUR_DATA]"
              className={`transition-all duration-300 z-0 ${isLoaded ? "blur-0" : "blur-lg"}`}
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.458665921555!2d69.24446243069049!3d41.296123153123034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdbaf4fd22f%3A0xd7287387b5aa0573!2sO&#39;ZBEKISTON%20RESPUBLIKASI%20O&#39;SIMLIKLAR%20KARANTINI%20VA%20HIMOYASI%20AGENTLIGI!5e0!3m2!1sen!2s!4v1731043560446!5m2!1sen!2s"
            loading="lazy"
            className="w-full md:h-[500px] h-[400px] rounded-t-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
