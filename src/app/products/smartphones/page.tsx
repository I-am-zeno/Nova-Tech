import Link from "next/link";
import { products } from "@/lib/data/products";
import HorizontalProductCard from "@/components/ui/HorizontalProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const phones = products.filter((p) => p.category === "Phone");

const brandOrder = ["Samsung", "Google", "Apple", "OnePlus", "Nothing", "Xiaomi"];

const grouped = phones.reduce<Record<string, typeof products>>((acc, p) => {
  if (!acc[p.brand]) acc[p.brand] = [];
  acc[p.brand].push(p);
  return acc;
}, {});

const sortedBrands = brandOrder.filter((b) => grouped[b]);

export default function SmartphonesPage() {
  return (
    <main className="min-h-[100dvh] bg-[#080808]">
      <div className="pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] mb-6 group"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-0.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              Smartphones
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-sm sm:text-base text-white/30 max-w-lg">
              Android and iOS — the latest and previous models, all in one place.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 pb-20 sm:pb-32 space-y-20 sm:space-y-28">
        {sortedBrands.map((brand, si) => (
          <section key={brand}>
            <ScrollReveal delay={0.1 + si * 0.1}>
              <div className="flex items-end justify-between mb-6 sm:mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {brand}
                  </h2>
                  <p className="text-sm text-white/30 mt-1">{grouped[brand].length} model{grouped[brand].length > 1 ? "s" : ""}</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {grouped[brand].map((product, i) => (
                <ScrollReveal key={product.id} delay={0.2 + si * 0.1 + i * 0.05}>
                  <HorizontalProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
