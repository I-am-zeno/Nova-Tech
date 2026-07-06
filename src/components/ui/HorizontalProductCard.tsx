import Link from "next/link";
import type { Product } from "@/lib/data/products";

function PhoneIcon({ product }: { product: Product }) {
  return (
    <div
      className={`w-[64px] h-[130px] rounded-[18px] bg-gradient-to-b ${product.bezel} p-[1.5px] shrink-0 shadow-lg`}
    >
      <div className="w-full h-full rounded-[calc(18px-1.5px)] bg-[#0a0a0a] overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.screen}`} />
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[36px] h-[4px] rounded-full bg-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-light text-white/70 tracking-wider">9:41</span>
        </div>
      </div>
    </div>
  );
}

function WatchIcon() {
  return (
    <div className="flex items-center gap-1 shrink-0">
      <div className="w-[5px] h-5 rounded-[1px] bg-gradient-to-b from-zinc-700 to-zinc-800" />
      <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-zinc-400 to-zinc-600 p-[1.5px] shadow-lg">
        <div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[1px] h-[11px] bg-white/60 rounded-full origin-bottom rotate-[35deg]" />
            <div className="w-[1px] h-[7px] bg-white/40 rounded-full origin-bottom rotate-[80deg] ml-[1px]" />
          </div>
        </div>
      </div>
      <div className="w-[5px] h-5 rounded-[1px] bg-gradient-to-t from-zinc-700 to-zinc-800" />
    </div>
  );
}

export default function HorizontalProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:from-white/[0.12] hover:to-white/[0.06] h-full"
    >
      <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0a0a0a] p-4 sm:p-5 flex flex-col items-center text-center overflow-hidden h-full">
        <div className="absolute -inset-40 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:from-accent/[0.03] group-hover:via-accent/[0.01] group-hover:to-transparent pointer-events-none" />

        <div className="relative z-10 mb-3 sm:mb-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]">
          {product.category === "Phone" ? (
            <PhoneIcon product={product} />
          ) : (
            <WatchIcon />
          )}
        </div>

        <div className="relative z-10 flex items-center gap-1.5 mb-1.5 sm:mb-2">
          <span className="inline-block rounded-full px-2 py-[1px] text-[7px] font-medium tracking-wider uppercase border border-white/10 text-white/40">
            {product.subcategory}
          </span>
        </div>

        <h3 className="relative z-10 text-sm font-semibold text-white tracking-tight mb-1">
          {product.name}
        </h3>

        <p className="relative z-10 text-[10px] text-white/30 tracking-wide mb-2 leading-snug line-clamp-1">
          {product.specs}
        </p>

        <div className="relative z-10 flex items-center gap-1.5 mb-2 sm:mb-3">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full px-2 py-[1px] text-[7px] font-medium tracking-wider bg-white/[0.04] text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-2 mt-auto">
          <span className="text-xs font-medium text-white/60 tracking-tight">
            {product.price}
          </span>
          <span className="text-[10px] font-medium text-white/25 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-white/60">
            View
          </span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            className="text-white/25 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M1 11L11 1M11 1H4.5M11 1V7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
