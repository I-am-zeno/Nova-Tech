"use client";

import { useState } from "react";

const navLinks = ["Products", "Collections", "Support"];

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 sm:pt-5 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[1320px] mx-3 sm:mx-4 flex items-center justify-between rounded-full border border-white/[0.06] bg-[#050505]/70 backdrop-blur-2xl px-4 sm:px-6 min-h-[48px] sm:h-14">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group min-h-[44px]">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white/90 hidden sm:block">
              NovaTech
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right: search + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <div
              className={`flex items-center gap-2 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                searchFocused
                  ? "border-white/20 bg-white/[0.06] w-36 sm:w-48 lg:w-56"
                  : "border-white/[0.06] bg-white/[0.03] w-9 sm:w-36 lg:w-40"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2.5 sm:ml-3 shrink-0 text-white/30"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-transparent py-2.5 pr-3 text-[13px] text-white/80 placeholder-white/30 outline-none hidden sm:block"
              />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.92] cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-[18px] h-[14px]">
                <span
                  className={`absolute inset-x-0 top-0 h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 -translate-y-[0.75px] h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050505]/90 backdrop-blur-3xl animate-[fade-up_0.5s_cubic-bezier(0.32,0.72,0,1)_both]"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="flex flex-col items-center gap-6 sm:gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((label, i) => (
              <a
                key={label}
                href="#"
                className="text-3xl sm:text-4xl font-medium text-white/60 hover:text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[52px] flex items-center"
                style={{
                  animation: `menu-item-enter 0.6s cubic-bezier(0.32,0.72,0,1) ${0.1 + i * 0.08}s both`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div
              className="mt-4 flex gap-3"
              style={{
                animation: `menu-item-enter 0.6s cubic-bezier(0.32,0.72,0,1) 0.4s both`,
              }}
            >
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-white/[0.08] text-white/30 hover:text-white/60 hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
