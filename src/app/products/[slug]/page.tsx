import { notFound } from "next/navigation";
import Link from "next/link";
import { products, type Product } from "@/lib/data/products";
import HorizontalProductCard from "@/components/ui/HorizontalProductCard";

const slugToSubcategory: Record<string, string> = {
  android: "Android",
  iphone: "iPhone",
  "pro-series": "Pro Series",
  "essential-series": "Essential Series",
};

const subcategoryMeta: Record<
  string,
  { title: string; description: string }
> = {
  Android: {
    title: "Android Phones",
    description: "Discover our range of Android smartphones.",
  },
  iPhone: {
    title: "iPhones",
    description: "Explore the latest iPhone models.",
  },
  "Pro Series": {
    title: "Pro Series Watches",
    description: "Built for the extremes. Rugged, precision-engineered.",
  },
  "Essential Series": {
    title: "Essential Series Watches",
    description: "Timeless elegance for everyday life.",
  },
};

export function generateStaticParams() {
  return Object.keys(slugToSubcategory).map((slug) => ({ slug }));
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subcategory = slugToSubcategory[slug];
  if (!subcategory) notFound();

  const filtered = products.filter((p) => p.subcategory === subcategory);
  const meta = subcategoryMeta[subcategory];

  return (
    <main className="min-h-[100dvh] bg-[#080808]">
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            {meta?.title}
          </h1>
          <p className="text-sm sm:text-base text-white/30 max-w-lg">
            {meta?.description}
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 pb-20 sm:pb-32">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {filtered.map((product) => (
            <HorizontalProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-white/30 text-center py-20">
            No products found in this category.
          </p>
        )}
      </div>
    </main>
  );
}
