import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkCardProps {
  material: {
    title: string;
    link: string;
  };
}

const LinkCard = (props: LinkCardProps) => {
  const { material } = props;

  return (
    <Link href={material.link} target="_blank" rel="noopener noreferrer">
      <div className="w-full flex items-end justify-between text-primary px-1 py-2 rounded-sm hover:bg-secondary cursor-pointer transition-all duration-200 border-b-2">
        <div className="w-calc(100%-40px)">
          <h5>{material.title}</h5>
        </div>
        <div className="w-10 flex justify-end">
          <Download />
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
