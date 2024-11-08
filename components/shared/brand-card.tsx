import Image from "next/legacy/image";
import { title } from "process";

interface BrandCardProps {
  image: string;
  title: string;
}

export const BrandCard = ({ image }: BrandCardProps) => {
  return (
    <div className="w-56 h-56 border rounded-full p-10 flex items-center justify-center mx-2 ">
      <div className="relative w-full h-full">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
