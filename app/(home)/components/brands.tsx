"use client";

import { BrandCard } from "@/components/shared/brand-card";
import Marquee from "react-fast-marquee";

export const Brands = () => {
  return (
    <div className="p-4 py-10" id="brands">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-secondary-foreground uppercase">
              <div className="bg-secondary-foreground w-5 h-[1px] mr-2"></div>
              Brend korxonalar
            </h1>
          </div>
          <div className="lg:w-2/3 w-full">
            <h1 className="sm:text-4xl text-3xl mb-5">Bizning milliy brend korxonalarimiz</h1>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover={true} speed={150} className="mt-5">
        {brands?.map(brand => (
          <BrandCard image={brand.image} title={brand.title} key={brand.title} />
        ))}
      </Marquee>
    </div>
  );
};

const brands = [
  {
    image: "/brands/samgold.png",
    title: "Samarkand Golden Chickpeas",
  },
  {
    image: "/brands/jegmin.png",
    title: "Jahon Exim Group",
  },
  {
    image: "/brands/samrin.png",
    title: "SAMRIN TRADE",
  },
  {
    image: "/brands/eximprove2.png",
    title: "EXIM DRIED FRUITS IMPORVE GROUP",
  },
  {
    image: "/brands/logoromas.png",
    title: "ED PACK (Roma’S)",
  },
  {
    image: "/brands/milmax.png",
    title: "Milmaxtrade LLC",
  },
  {
    image: "/brands/rosti.jpg",
    title: `OOO "ROSTI RASTI BARAKA"`,
  },
  {
    image: "/brands/crafers.png",
    title: "Crafers",
  },
  {
    image: "/brands/nur.png",
    title: `OOO "Fargona Meva Export"`,
  },
];
