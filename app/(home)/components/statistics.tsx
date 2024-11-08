import { StatisticsTab } from "@/components/shared/statistics-tab";

export const Statistics = () => {
  return (
    <div className="container mx-auto p-4 md:py-20" id="statistics">
      <div className="flex">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3 w-full">
          <p className="md:text-3xl text-2xl font-[500] py-5">
            O&apos;simliklar karantini va himoyasi agentligi binosida &quot;Markaziy eksport
            shtabi&quot; tashkil etilib, 21 nafar mutaxassis biriktirildi hamda 14 ta hududlarda ham
            &quot;Eksport shtab&quot;lari tashkil etildi. &quot;Markaziy eksport shtabi&quot;
            a&apos;zolari 39 ta xorijiy davlatlar elchixonalariga va hududiy shtablarga
            biriktirildi.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:mt-10 mt-5 uppercase">
        <StatisticsTab title="Qishloq xo'jaligi mahsulotlari" number={120} extra="+" />
        <StatisticsTab title="Logistik kompaniyalar" number={200} extra="+" />
        <StatisticsTab title="Brand korxonalar" number={35} extra="+" />
        <StatisticsTab title="Eksport korxonalar" number={1000} extra="+" />
        <StatisticsTab title="Importyorlar" number={300} extra="+" />
        <StatisticsTab title="Eksportbop Davlatlar" number={80} extra="+" />
        <StatisticsTab title="Qadoqlash korxonalar" number={200} extra="" />
        <StatisticsTab title="Murojaatlar" number={1000} extra="+" />
      </div>
    </div>
  );
};
