"use client";

import { useState } from "react";

const NavIcon = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    className="group relative flex items-center justify-center w-12 h-12 text-white hover:text-red-500 transition-all duration-300"
    title={label}
  >
    {icon}
    <span className="absolute left-16 bg-black bg-opacity-90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      {label}
    </span>
  </a>
);

const navItems = [
  {
    href: "#profile",
    label: "Profile",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.67 0-5.14-1.34-6.63-3.57C5.5 15.13 8.5 14 12 14s6.5 1.13 8.63 2.43C17.14 18.66 14.67 20 12 20z" />
      </svg>
    ),
  },
  {
    href: "#skills",
    label: "Skills",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4-7H8V4h8v9z" />
      </svg>
    ),
  },
  {
    href: "#experience",
    label: "Experience",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4 14h-8v-2h8v2zm4-7h-16v-2h16v2z" />
      </svg>
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 bg-black bg-opacity-20 backdrop-blur-sm rounded-full p-4 shadow-lg">
        <ul className="flex flex-col gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavIcon href={item.href} label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-white hover:text-red-500 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-black bg-opacity-30 backdrop-blur-sm border-t border-white border-opacity-10">
            <ul className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 w-full px-4 py-3 text-white hover:text-red-500 hover:bg-white hover:bg-opacity-5 rounded transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-6 h-6 flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
