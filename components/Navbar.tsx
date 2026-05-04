"use client";
import { useState, useEffect } from "react";
import { ToothIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Возможности" },
    { href: "#demo", label: "Демо" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-[#68a5e8] group-hover:text-[#8bbcf0] transition-colors">
              <ToothIcon className="w-7 h-7" />
            </div>
            <span className="text-[#e4e4e7] font-semibold text-lg tracking-tight">
              DentaCRM
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#a1a1aa] hover:text-[#e4e4e7] text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-[#68a5e8] hover:bg-[#8bbcf0] text-[#09090b] font-medium text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Попробовать бесплатно
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[#a1a1aa] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a] px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-[#a1a1aa] hover:text-[#e4e4e7] text-sm border-b border-[#27272a] last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block w-full text-center bg-[#68a5e8] text-[#09090b] font-medium text-sm px-4 py-2.5 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Попробовать бесплатно
          </a>
        </div>
      )}
    </header>
  );
}
