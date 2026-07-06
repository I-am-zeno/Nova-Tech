import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data/products";
import { productDetails } from "@/lib/data/product-details";

function PhoneMockup({
  bezel,
  screen,
  large = false,
}: {
  bezel: string;
  screen: string;
  large?: boolean;
}) {
  const w = large ? 240 : 200;
  const h = large ? 496 : 413;
  const r = large ? "2.5rem" : "2.2rem";
  return (
    <div
      className={`w-[${w}px] h-[${h}px] rounded-[${r}] bg-gradient-to-b ${bezel} p-[2px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)_inset]`}
      style={{ width: `${w}px`, height: `${h}px`, borderRadius: r }}
    >
      <div
        className="w-full h-full bg-[#0a0a0a] overflow-hidden relative"
        style={{ borderRadius: `calc(${r} - 2px)` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${screen}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.03]" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[7px] rounded-full bg-black/80" />
        <div className="absolute top-3 right-5 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[2.5rem] font-light text-white/80 tracking-wider">
            9:41
          </span>
          <div className="absolute bottom-6 w-[130px] h-[5px] rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function WatchMockup({
  bezel,
  screen,
  large = false,
}: {
  bezel: string;
  screen: string;
  large?: boolean;
}) {
  const size = large ? 110 : 80;
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-[7px] h-12 rounded-[2px] bg-gradient-to-b from-zinc-700 to-zinc-800"
        style={{ width: "7px", height: large ? "48px" : "40px" }}
      />
      <div
        className={`rounded-full bg-gradient-to-b ${bezel} p-[2.5px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)]`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div
          className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden relative"
          style={{ borderRadius: "50%" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${screen}`} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div
              className="absolute top-1/2 left-1/2 w-[1.5px] bg-white/60 rounded-full origin-bottom -translate-x-1/2 -translate-y-full"
              style={{
                height: `${size * 0.28}px`,
                transform: "translateX(-50%) translateY(-100%) rotate(35deg)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-[1.5px] bg-white/40 rounded-full origin-bottom -translate-x-1/2 -translate-y-full"
              style={{
                height: `${size * 0.18}px`,
                transform: "translateX(-50%) translateY(-100%) rotate(80deg)",
              }}
            />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white/80 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/[0.04]" />
        </div>
      </div>
      <div
        className="w-[7px] rounded-[2px] bg-gradient-to-t from-zinc-700 to-zinc-800"
        style={{ width: "7px", height: large ? "48px" : "40px" }}
      />
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  const details = productDetails[slug];
  const isPhone = product.category === "Phone";

  return (
    <main className="min-h-[100dvh] bg-[#050505]">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 via-accent-glow/5 to-transparent blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-white/30 hover:text-white/60 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] mb-8 sm:mb-10 group"
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
            Back
          </Link>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Device Mockup */}
            <div className="flex items-center justify-center w-full py-6 sm:py-10">
              {isPhone ? (
                <PhoneMockup
                  bezel={product.bezel}
                  screen={product.screen}
                  large
                />
              ) : (
                <WatchMockup
                  bezel={product.bezel}
                  screen={product.screen}
                  large
                />
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-5 sm:gap-6 w-full">
              <div>
                <span className="inline-block rounded-full px-3 py-1 text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
                  {product.subcategory} &middot; {product.category}
                </span>
                <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-white tracking-tight leading-[1.08] mt-2">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-white/50 mt-2 leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-wider bg-white/[0.05] text-white/40 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
                <span className="inline-block rounded-full px-3 py-1 text-[10px] font-medium tracking-wider bg-accent/10 text-accent-glow border border-accent/20">
                  In Store
                </span>
              </div>

              {/* Specs line */}
              <p className="text-sm text-white/30">{product.specs}</p>

              {/* Price */}
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.price}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="tel:+923130128660"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 min-h-[52px] text-sm font-semibold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.97] w-full sm:w-auto"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/923130128660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 min-h-[52px] text-sm font-medium text-white/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/20 hover:text-white/90 active:scale-[0.97] w-full sm:w-auto"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Details Section ── */}
      {details && (
        <section className="bg-[#080808] border-t border-white/[0.04]">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
              {/* Description */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4 sm:mb-6">
                  Overview
                </h2>
                <p className="text-sm sm:text-base text-white/40 leading-relaxed max-w-3xl">
                  {details.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4 sm:mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {details.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-glow shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm sm:text-base text-white/60 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4 sm:mb-6">
                  Technical Specifications
                </h2>
                <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                  {details.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <span className="text-sm text-white/40 font-medium w-2/5">
                        {spec.label}
                      </span>
                      <span className="text-sm text-white/70 text-right w-3/5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="bg-[#080808] border-t border-white/[0.04]">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Interested in the {product.name}?
          </h2>
          <p className="text-sm sm:text-base text-white/30 max-w-md mx-auto mb-8 leading-relaxed">
            Visit our Nawabshah store or contact us for availability and pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+923130128660"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 min-h-[52px] text-sm font-semibold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.97] w-full sm:w-auto"
            >
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/923130128660"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 min-h-[52px] text-sm font-medium text-white/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/20 hover:text-white/90 active:scale-[0.97] w-full sm:w-auto"
            >
              <span>Visit Store</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
