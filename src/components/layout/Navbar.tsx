"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { products, type Product } from "@/lib/data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categoryColors: Record<string, string> = {
  Phone: "bg-blue-500/20 text-blue-300",
  Watch: "bg-amber-500/20 text-amber-300",
};

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Debounce
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timerRef.current);
  }, [query]);

  // Filter
  useEffect(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) {
      setResults([]);
      setOpen(false);
      return;
    }
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
    setResults(filtered);
    setOpen(true);
  }, [debouncedQuery]);

  // Close dropdown on click outside
  const handleBlur = useCallback((e: FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener("blur", handleBlur);
      return () => input.removeEventListener("blur", handleBlur);
    }
  }, [handleBlur]);

  const handleSelect = (id: string) => {
    setQuery("");
    setOpen(false);
    setMobileSearchOpen(false);
    router.push(`/product/${id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
    if (e.key === "Enter" && results.length > 0) {
      handleSelect(results[0].id);
    }
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 sm:pt-5 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[1320px] mx-3 sm:mx-4 flex items-center justify-between rounded-full border border-white/[0.06] bg-[#050505]/70 backdrop-blur-2xl px-4 sm:px-6 min-h-[48px] sm:h-14">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group min-h-[44px] shrink-0">
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: search + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop search */}
            <div className="hidden sm:relative sm:block">
              <div
                className={`flex items-center gap-2 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open
                    ? "border-white/20 bg-white/[0.06] w-48 lg:w-56"
                    : "border-white/[0.06] bg-white/[0.03] w-36 lg:w-40"
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
                  className="ml-3 shrink-0 text-white/30"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => debouncedQuery.trim() && setOpen(true)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search smartphones, watches..."
                  className="w-full bg-transparent py-2.5 pr-3 text-[13px] text-white/80 placeholder-white/30 outline-none"
                />
                {query && (
                  <button
                    onClick={() => { setQuery(""); setOpen(false); inputRef.current?.focus(); }}
                    className="mr-2 text-white/20 hover:text-white/50 transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Dropdown */}
              {open && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full mt-2 left-0 right-0 rounded-xl border border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] animate-[fade-up_0.2s_cubic-bezier(0.32,0.72,0,1)_both]"
                >
                  {results.length === 0 ? (
                    <div className="px-4 py-6 text-center">
                      <p className="text-sm text-white/30">No products found</p>
                    </div>
                  ) : (
                    <div className="max-h-[360px] overflow-y-auto py-2">
                      {results.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleSelect(p.id)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.04] cursor-pointer"
                        >
                          {/* Thumbnail */}
                          <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.04] flex items-center justify-center overflow-hidden">
                            {p.category === "Watch" ? (
                              <div className="relative w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[2px] rounded-full bg-white/20" />
                                <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[6px] rounded-full bg-white/20" />
                              </div>
                            ) : (
                              <div className="relative w-4 h-[26px] rounded-[2px] border border-white/15 bg-gradient-to-b from-white/10 to-white/5">
                                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[6px] h-[3px] rounded-[1px] bg-white/20" />
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px] font-medium text-white/80 truncate">
                              {p.name}
                            </p>
                            <p className="text-[11px] text-white/30 truncate">
                              {p.tagline}
                            </p>
                          </div>

                          {/* Category badge */}
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${categoryColors[p.category] || "bg-white/[0.04] text-white/30"}`}>
                            {p.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile search icon */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="flex sm:hidden items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.92] cursor-pointer"
              aria-label={mobileSearchOpen ? "Close search" : "Open search"}
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
                className="text-white/50"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

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

      {/* Mobile search bar (below navbar) */}
      {mobileSearchOpen && (
        <div className="fixed top-[60px] inset-x-0 z-40 px-3 animate-[fade-up_0.2s_cubic-bezier(0.32,0.72,0,1)_both] sm:hidden">
          <div className="relative rounded-xl border border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="flex items-center gap-2 px-3 min-h-[48px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-white/30"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => debouncedQuery.trim() && setOpen(true)}
                placeholder="Search smartphones, watches..."
                className="w-full bg-transparent py-3 text-[14px] text-white/80 placeholder-white/30 outline-none"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); setOpen(false); }}
                  className="text-white/20 hover:text-white/50 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Mobile results */}
            {open && (
              <div className="border-t border-white/[0.04]">
                {results.length === 0 ? (
                  <div className="px-4 py-6 text-center">
                    <p className="text-sm text-white/30">No products found</p>
                  </div>
                ) : (
                  <div className="max-h-[50vh] overflow-y-auto py-1">
                    {results.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect(p.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.04] cursor-pointer"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.04] flex items-center justify-center">
                          {p.category === "Watch" ? (
                            <div className="relative w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                              <div className="w-2 h-2 rounded-full bg-white/30" />
                              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[7px] h-[2px] rounded-full bg-white/20" />
                              <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[7px] rounded-full bg-white/20" />
                            </div>
                          ) : (
                            <div className="relative w-[18px] h-[30px] rounded-[2px] border border-white/15 bg-gradient-to-b from-white/10 to-white/5">
                              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[8px] h-[3px] rounded-[1px] bg-white/20" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-medium text-white/80 truncate">{p.name}</p>
                          <p className="text-[12px] text-white/30 truncate">{p.tagline}</p>
                        </div>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium ${categoryColors[p.category] || "bg-white/[0.04] text-white/30"}`}>
                          {p.category}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

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
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="text-3xl sm:text-4xl font-medium text-white/60 hover:text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[52px] flex items-center"
                style={{
                  animation: `menu-item-enter 0.6s cubic-bezier(0.32,0.72,0,1) ${0.1 + i * 0.08}s both`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
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
