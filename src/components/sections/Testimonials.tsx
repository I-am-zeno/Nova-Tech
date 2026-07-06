"use client";

import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ahmed Raza",
    location: "Nawabshah, Sindh",
    text: "Bought the NovaPhone Pro from them last month. The staff was incredibly helpful and the price was fair. Will definitely come back.",
    rating: 5,
    initials: "AR",
  },
  {
    name: "Sana Tariq",
    location: "Hyderabad, Sindh",
    text: "I was unsure which phone to buy, but the advisor took time to understand my needs and suggested the perfect device. Great service.",
    rating: 5,
    initials: "ST",
  },
  {
    name: "Bilal Ahmed",
    location: "Nawabshah, Sindh",
    text: "Got my NovaWatch from here. The delivery was on time, product was factory-sealed, and they even helped me set it up. Highly recommended.",
    rating: 5,
    initials: "BA",
  },
  {
    name: "Fatima Khan",
    location: "Sukkur, Sindh",
    text: "I contacted them on WhatsApp about a smartphone and got a response within minutes. The whole experience was smooth and professional.",
    rating: 4,
    initials: "FK",
  },
  {
    name: "Zubair Hussain",
    location: "Nawabshah, Sindh",
    text: "Been buying from NovaTech for over a year now. Their after-sales support is exceptional — they genuinely care about their customers.",
    rating: 5,
    initials: "ZH",
  },
  {
    name: "Ayesha Malik",
    location: "Larkana, Sindh",
    text: "The store has a great collection of smartwatches. I was able to compare multiple models and the staff didn't rush me at all. Wonderful experience.",
    rating: 5,
    initials: "AM",
  },
];

const allCards = [...testimonials, ...testimonials];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < count ? "#0066ff" : "none"}
          stroke={i < count ? "#0066ff" : "rgba(255,255,255,0.1)"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  location,
  text,
  rating,
  initials,
}: {
  name: string;
  location: string;
  text: string;
  rating: number;
  initials: string;
}) {
  return (
    <div className="group w-[300px] sm:w-[320px] lg:w-[340px] shrink-0 p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:from-white/[0.12] hover:to-white/[0.06] active:scale-[0.98] snap-start">
      <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0a0a0a] p-5 sm:p-6 h-full overflow-hidden">
        <div className="absolute -inset-40 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:from-accent/[0.04] group-hover:via-accent/[0.01] group-hover:to-transparent pointer-events-none" />

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/[0.04] mb-3 sm:mb-4"
        >
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
            fill="currentColor"
          />
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
            fill="currentColor"
          />
        </svg>

        <div className="relative z-10 mb-3">
          <StarRating count={rating} />
        </div>

        <p className="relative z-10 text-sm text-white/60 leading-relaxed mb-4 sm:mb-5 line-clamp-3">
          &ldquo;{text}&rdquo;
        </p>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-semibold text-white/50 uppercase shrink-0">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white tracking-tight">
              {name}
            </p>
            <p className="text-[11px] text-white/30">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scroll = () => {
      if (isPaused) return;
      el.scrollLeft += 1;
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft = 0;
      }
    };

    intervalRef.current = setInterval(scroll, 20);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/[0.03] via-accent-glow/[0.02] to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/30 max-w-lg">
              Real feedback from real people across Sindh.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex overflow-x-hidden gap-3 sm:gap-4 lg:gap-5 px-5 sm:px-6 lg:px-12 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none }`}</style>
            {allCards.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} {...t} />
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
