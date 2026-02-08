"use client";

import { useState, useEffect } from "react";
import { useAnimateOnView } from "@/hooks/useAnimateOnView";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const AnimatedCounter = ({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let currentValue = 0;
    const increment = value / 30;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div className="text-5xl font-bold text-red-900">
      {displayValue}
      {suffix}
    </div>
  );
};

export default function StatisticsSection() {
  const { ref, isVisible } = useAnimateOnView();

  const stats: StatItem[] = [
    {
      label: "Years of",
      value: 9,
      suffix: "+",
      description: "Professional Development Experience",
    },
    {
      label: "Projects",
      value: 20,
      suffix: "+",
      description: "Successfully Completed",
    },
    {
      label: "Technologies",
      value: 30,
      suffix: "+",
      description: "Mastered & Proficient",
    },
    {
      label: "Happy",
      value: 90,
      suffix: "%",
      description: "Client Satisfaction Rate",
    },
  ];

  return (
    <section
      id="statistics"
      ref={ref}
      className={`py-20 bg-gradient-to-r from-gray-900 to-black text-white ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          By The Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-800 rounded-lg border border-red-900 hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/50"
            >
              <div className="mb-4">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-gray-300 text-sm mb-2">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            With a strong foundation in both frontend and backend development, I
            bring comprehensive technical expertise and proven track record of
            delivering high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
