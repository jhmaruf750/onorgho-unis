"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Members" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0b1626]/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="ONORGHO UNIS"
                fill
                className="object-contain"
                priority
              />
            </div>

            <span className="hidden md:block font-heading text-lg tracking-[0.25em] font-semibold text-amber-700 dark:text-amber-300 transition-all duration-300">
              ONORGHO UNIS
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname?.startsWith(l.href));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-sm tracking-widest font-medium group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "text-amber-600 dark:text-amber-300"
                        : "text-gray-700 dark:text-gray-200 group-hover:text-amber-500"
                    }`}
                  >
                    {l.label}
                  </span>

                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full ${
                      active ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white dark:bg-[#0b1626]`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 dark:text-white text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
