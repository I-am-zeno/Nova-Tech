"use client";

import HorizontalProductCard from "@/components/ui/HorizontalProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products } from "@/lib/data/products";
import { useRef, useState, useEffect } from "react";

const smartphones = products.filter((p) => p.category === "Phone");
const smartwatches = products.filter((p) => p.category === "Watch");

function ScrollRow({ items, viewAllHref, icon }: { items: typeof products; viewAllHref: string; icon: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 240;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-[1440px] relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none hidden lg:block" />

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#080808] backdrop-blur-sm text-white/50 hover:text-white hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${canScrollLeft ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="hidden lg:flex overflow-x-auto gap-5 px-16 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`div::-webkit-scrollbar { display: none }`}</style>
        <div className="shrink-0 w-4" />
        {items.map((product, index) => (
          <ScrollReveal key={product.id} delay={0.05 + index * 0.04}>
            <div className="snap-start shrink-0 w-[220px]">
              <HorizontalProductCard product={product} />
            </div>
          </ScrollReveal>
        ))}
        <div className="shrink-0 w-4" />
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#080808] backdrop-blur-sm text-white/50 hover:text-white hover:border-white/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${canScrollRight ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="lg:hidden mx-auto max-w-[200px]">
        <a
          href={viewAllHref}
          className="group block p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:from-white/[0.12] hover:to-white/[0.06] active:scale-[0.98]"
        >
          <div className="relative rounded-[calc(1.5rem-1px)] bg-[#080808] p-6 flex flex-col items-center justify-center gap-3 overflow-hidden min-h-[140px]">
            <div className="absolute -inset-40 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:from-accent/[0.04] group-hover:via-accent/[0.01] group-hover:to-transparent pointer-events-none" />
            <div className="relative z-10 text-white/40 group-hover:text-white/60 transition-colors duration-500">
              {icon}
            </div>
            <span className="relative z-10 text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors duration-500">
              Browse All
            </span>
          </div>
        </a>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none hidden lg:block" />
    </div>
  );
}

function RowSection({
  icon,
  title,
  count,
  items,
  viewAllHref,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  items: typeof products;
  viewAllHref: string;
}) {
  return (
    <div>
      <ScrollReveal>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 mb-5 sm:mb-6 lg:mb-10">
          <div className="flex items-center gap-2 sm:gap-3">
            {icon}
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-white tracking-tight">
              {title}
            </h2>
            <span className="text-[10px] sm:text-[11px] font-medium text-white/20 tracking-wide">
              {count} Products
            </span>
            <a
              href={viewAllHref}
              className="ml-auto hidden sm:flex items-center gap-2 text-white/20 text-[11px] font-medium tracking-wider uppercase hover:text-white/40 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
            <span className="hidden lg:inline">View All</span>
            <span className="lg:hidden">View all</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 18l6-6-6-6" />
            </svg>
          </a>
        </div>
        </div>
      </ScrollReveal>
      <ScrollRow items={items} viewAllHref={viewAllHref} icon={icon} />

    </div>
  );
}

export default function Lineup() {
  return (
    <section className="relative bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/[0.03] via-accent-glow/[0.02] to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 py-16 sm:py-20 lg:py-32 space-y-14 sm:space-y-16 lg:space-y-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal>
              <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
                The Lineup
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
                What We Carry
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/30 max-w-lg">
                <span className="text-white/30">Android phones, iPhones, and smartwatches — top brands, all in one place.</span>
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Smartphones */}
        <RowSection
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500 shrink-0"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          }
          title="Smartphones"
          count={smartphones.length}
          items={smartphones}
          viewAllHref="/products/smartphones"
        />

        {/* Smartwatches */}
        <RowSection
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-500 shrink-0"
            >
              <circle cx="12" cy="12" r="7" />
              <polyline points="12 9 12 12 13.5 13.5" />
              <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83" />
              <path d="M7.49 6.65l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83" />
            </svg>
          }
          title="Smartwatches"
          count={smartwatches.length}
          items={smartwatches}
          viewAllHref="/products/smartwatches"
        />
      </div>
    </section>
  );
}
