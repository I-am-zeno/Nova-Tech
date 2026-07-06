import HorizontalProductCard from "@/components/ui/HorizontalProductCard";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { products } from "@/lib/data/products";

const androidPhones = products.filter(
  (p) => p.category === "Phone" && p.subcategory === "Android"
);
const iPhones = products.filter(
  (p) => p.category === "Phone" && p.subcategory === "iPhone"
);
const proWatches = products.filter(
  (p) => p.category === "Watch" && p.subcategory === "Pro Series"
);
const essentialWatches = products.filter(
  (p) => p.category === "Watch" && p.subcategory === "Essential Series"
);

function ScrollRow({ items }: { items: typeof products }) {
  return (
    <div className="mx-auto max-w-[1440px] relative">
      {/* Left fade — desktop only */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none hidden lg:block" />

      {/* Desktop: horizontal scroll */}
      <div
        className="hidden lg:flex overflow-x-auto gap-5 px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`div::-webkit-scrollbar { display: none }`}</style>
        <div className="shrink-0 w-4" />
        {items.map((product, index) => (
          <div
            key={product.id}
            className="snap-start shrink-0 w-[220px] animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
            style={{ animationDelay: `${0.05 + index * 0.04}s` }}
          >
            <HorizontalProductCard product={product} />
          </div>
        ))}
        <div className="shrink-0 w-4" />
      </div>

      {/* Mobile / Tablet: 2-column grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 px-5 sm:px-6">
        {items.map((product, index) => (
          <AnimatedCard key={product.id} delay={0.05 + index * 0.06}>
            <HorizontalProductCard product={product} />
          </AnimatedCard>
        ))}
      </div>

      {/* Right fade — desktop only */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none hidden lg:block" />
    </div>
  );
}

function RowSection({
  icon,
  title,
  count,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
  items: typeof products;
}) {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 mb-5 sm:mb-6 lg:mb-10">
        <div className="flex items-center gap-2 sm:gap-3">
          {icon}
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <span className="text-[10px] sm:text-[11px] font-medium text-white/20 tracking-wide">
            {count} Products
          </span>
          <div className="ml-auto hidden sm:flex items-center gap-2 text-white/20 text-[11px] font-medium tracking-wider uppercase">
            <span className="hidden lg:inline">Scroll</span>
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
          </div>
        </div>
      </div>
      <ScrollRow items={items} />
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
        {/* Section title */}
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
              The Lineup
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
              Explore Our Devices
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/30 max-w-lg">
              Four categories. Endless possibilities.
            </p>
          </div>
        </div>

        {/* Android Phones */}
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
              className="text-green-500 shrink-0"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          }
          title="Android Phones"
          count={androidPhones.length}
          items={androidPhones}
        />

        {/* iPhones */}
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
              className="text-zinc-400 shrink-0"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          }
          title="iPhones"
          count={iPhones.length}
          items={iPhones}
        />

        {/* Pro Series */}
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
          title="Pro Series"
          count={proWatches.length}
          items={proWatches}
        />

        {/* Essential Series */}
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
              className="text-amber-500 shrink-0"
            >
              <circle cx="12" cy="12" r="7" />
              <polyline points="12 9 12 12 13.5 13.5" />
              <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83" />
              <path d="M7.49 6.65l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83" />
            </svg>
          }
          title="Essential Series"
          count={essentialWatches.length}
          items={essentialWatches}
        />
      </div>
    </section>
  );
}
