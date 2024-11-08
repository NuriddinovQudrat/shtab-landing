"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("w-full bg-transparent z-10 backdrop-blur-2xl", isOpen && "bg-white")}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        <div className="text-2xl font-bold">
          <a href="#">
            <Image src="/logo.png" alt="Logo" width={60} height={50} />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((item, index) => (
            <a href={item.href} key={index}>
              <span className="text-white text-sm">{item.label}</span>
            </a>
          ))}
          <a href="#contact">
            <Button variant={"outline"} className="text-sm">
              CONTACT US <ArrowRight />
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none p-2 rounded-sm bg-neutral-100"
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
              <a href={item.href}>
                <span className="text-gray-800 hover:text-green-600 transition-all ease-in text-sm">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a href="#contact">
              <Button variant={"default"} className="w-full">
                CONTACT US
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const links = [
  {
    label: "HOME",
    href: "#home",
  },
  {
    label: "STATISTICS",
    href: "#statistics",
  },
  {
    label: "ECOSYSTEM",
    href: "#ecosystem",
  },
  {
    label: "CERTIFICATIONS",
    href: "#certifications",
  },
  {
    label: "PRODUCTS",
    href: "#products",
  },
];
