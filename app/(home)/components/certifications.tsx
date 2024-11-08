"use client";

import { CertificateCard } from "@/components/shared/certificate-card";
import Marquee from "react-fast-marquee";

export const Certifications = () => {
  return (
    <div className="p-4 py-10" id="certifications">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-secondary-foreground uppercase">
              <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
              Certifications
            </h1>
          </div>
          <div className="xl:w-1/3 lg:w-2/3 w-full">
            <h1 className="sm:text-4xl text-3xl mb-5">Dedicated to excellence</h1>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover={true} speed={150} className="mt-5">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </Marquee>
    </div>
  );
};
