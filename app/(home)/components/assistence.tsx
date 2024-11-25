import Image from "next/legacy/image";
import React from "react";

export const Assistence = () => {
  return (
    <div className="bg-primary p-4 py-10" id="assistence">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              Eksportda ko&apos;mak
            </h1>
          </div>
          <div className="md:w-2/3 w-full mb-5">
            <h1 className="sm:text-4xl text-3xl mb-5 text-white">
              Eksport bo&apos;yicha markaziy shtabning yordami
            </h1>
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
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 1</h1>
            <p className="text-sm">
              Meva va sabzavotlar O‘simliklar karantini va himoyasi agentligi nazorati ostida
              o&apos;stiriladi
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/warehouse.png"} alt="Warehouse" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 2</h1>
            <p className="text-sm">
              Mahsulotlar tekshiriladi, saralanadi va maxsus omborxonalarda saqlanadi
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/vegetables.png"} alt="Vegetables" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 3</h1>
            <p className="text-sm">
              Mahsulotlar sublimilatsiyalangan, muzlatilgan, qadoqlangan va naviga qarab qayta
              ishlangan bo&apos;lishi mumkin
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/delivery.png"} alt="Deliverys" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 4</h1>
            <p className="text-sm">
              Mahsulotlar yuk mashinalariga yuklanadi va maxsus joylarga yoki sotuvchiga yetkaziladi
            </p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/inspector.png"} alt="Inspector" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 5</h1>
            <p className="text-sm">Mahsulotlar xorijiy bojxona xodimi tomonidan tekshiriladi</p>
          </div>
          <div className="flex flex-col text-white">
            <div className="mb-2">
              <Image src={"/assistence/location.png"} alt="Location" width={72} height={72} />
            </div>
            <h1 className="uppercase font-bold tracking-wider text-sm">Bosqich 6</h1>
            <p className="text-sm">
              Mahsulotlar butun dunyo bo&apos;ylab bozorlarda va chakana savdo tarmoqlarida sotiladi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
