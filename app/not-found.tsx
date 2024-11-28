"use client";

import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
      <div className="w-60 h-60 relative">
        <Image src={"/not-found.png"} alt="Not Found" layout="fill" />
      </div>
      <h2>{t("not-found")}</h2>
      <Link href="/">
        <Button>{t("return-home")}</Button>
      </Link>
    </div>
  );
}
