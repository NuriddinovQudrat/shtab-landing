"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface StatisticsProps {
  title: string;
  number: number;
  extra: string;
}

export const StatisticsTab = (props: StatisticsProps) => {
  const { title, number, extra } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current; // Copy ref.current to a variable
    if (!element) return; // Exit if ref.current is null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Use the element variable
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is visible
    );

    observer.observe(element); // Use the element variable

    return () => {
      observer.unobserve(element); // Use the element variable in cleanup
    };
  }, []);

  return (
    <div className="border-t border-[#2727271a] py-5">
      <p className="opacity-50 mb-5">{title}</p>
      <h2 className="lg:text-6xl text-5xl font-[500]">
        <div ref={ref}>
          {isVisible ? (
            <CountUp start={0} end={number} duration={3} />
          ) : (
            0 // Optionally show 0 or placeholder before counting starts
          )}
          {extra}
        </div>
      </h2>
    </div>
  );
};
