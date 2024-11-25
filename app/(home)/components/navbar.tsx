"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export const Navbar = () => {
  const { i18n, t } = useTranslation();
  const initialLang = Cookies.get("i18next");

  const isScrolled = useScrolled();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(initialLang || "uz");

  const changeLanguage = (lang: string) => {
    localStorage.setItem("i18nextLng", lang);
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const links = [
    {
      label: t("home"),
      href: "#home",
    },
    {
      label: t("statistics"),
      href: "#statistics",
    },
    {
      label: t("about"),
      href: "#about",
    },
    {
      label: t("brands"),
      href: "#brands",
    },
  ];

  return (
    <header
      className={cn(
        "w-full bg-transparent z-50 backdrop-blur-2xl fixed",
        isOpen && "bg-white",
        isScrolled && !isOpen && "bg-primary",
      )}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        <div className="text-2xl font-bold">
          <a href="#">
            <Image src="/logo.png" alt="Logo" width={60} height={40} />
          </a>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((item, index) => (
            <a href={item.href} key={index}>
              <span className="text-white uppercase text-sm">{item.label}</span>
            </a>
          ))}
          <a href={"https://t.me/exportstate_bot"} target="_blank">
            <span className="text-white text-sm">TELEGRAM BOT</span>
          </a>
          <a href="#contact">
            <Button variant={"outline"} className="text-sm uppercase">
              {t("contact")} <ArrowRight />
            </Button>
          </a>
          <div>
            <Select value={selectedLang} onValueChange={e => changeLanguage(e)}>
              <SelectTrigger className="w-20 px-2 text-white font-bold">
                <SelectValue placeholder={selectedLang.toLocaleUpperCase()} />
              </SelectTrigger>
              <SelectContent className="w-20">
                <SelectGroup>
                  <SelectItem value="uz" className="w-24">
                    🇺🇿 UZ
                  </SelectItem>
                  <SelectItem value="en" className="w-24">
                    🇬🇧 EN
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "focus:outline-none p-2 rounded-sm",
              isOpen ? "text-black" : "text-white",
            )}
          >
            {isOpen ? (
              <div role="button">
                <X size={24} />
              </div>
            ) : (
              <div role="button">
                <Menu size={24} />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={cn(
          "pb-2 invisible opacity-0 h-0 bg-white shadow-md transition-all absolute w-full z-10",
          isOpen && "visible h-screen opacity-100",
        )}
      >
        <ul className="flex flex-col space-y-4 px-4 py-2">
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                <span className="text-gray-800 uppercase hover:text-green-600 transition-all ease-in text-sm">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={"https://t.me/exportstate_bot"}
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-gray-800 hover:text-green-600 transition-all ease-in text-sm">
                TELEGRAM BOT
              </span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button variant={"default"} className="w-full uppercase">
                {t("contact")}
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
