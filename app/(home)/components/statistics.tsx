import { StatisticsTab } from "@/components/shared/statistics-tab";

export const Statistics = () => {
  return (
    <div className="container mx-auto p-4 md:py-20">
      <div className="flex">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3 w-full">
          <p className="md:text-3xl text-2xl font-[500] py-5">
            Our mandate is to diversify food sources and stimulate manufacturing and distribution in
            the agri-food sector in the UAE and beyond. As a part of ADQ, one of the region&apos;s
            largest holding companies, Silal is emerging as one of the sector’s leading and most
            ambitious players.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-10 mt-5 uppercase">
        <StatisticsTab title="Products" number={26} extra="K+" />
        <StatisticsTab title="Pallet capacity" number={69} extra="K+" />
        <StatisticsTab title="Brands" number={200} extra="+" />
        <StatisticsTab title="Daily deliveries" number={3000} extra="+" />
        <StatisticsTab title="Export markets" number={70} extra="+" />
        <StatisticsTab title="Silos" number={200} extra="K" />
        <StatisticsTab title="Customers" number={8} extra="K" />
        <StatisticsTab title="Packhouse" number={200} extra="K" />
      </div>
    </div>
  );
};
