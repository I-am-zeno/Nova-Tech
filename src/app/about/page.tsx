import Link from "next/link";

export default function AboutPage() {
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
            About NovaTech
          </h1>
          <p className="text-sm sm:text-base text-white/30 max-w-lg">
            Your trusted smartphone and smartwatch retailer in Nawabshah.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 pb-20 sm:pb-32 space-y-20">
        {/* Story */}
        <section className="max-w-3xl">
          <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-4">
            Who We Are
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-white/30 leading-relaxed">
            <p>
              NovaTech is a local tech retailer based in Nawabshah. We offer a
              wide selection of smartphones and smartwatches — from the latest
              flagship models to reliable previous-generation devices.
            </p>
            <p>
              We stock both Android and iOS devices from leading brands, so you
              can compare options side by side and find what works best for you.
              Every product we sell is genuine, factory-sealed, and backed by
              manufacturer warranty.
            </p>
            <p>
              Our store is designed to make your decision easier. Come in,
              browse our collection, ask questions, and take your time. We&apos;re
              here to help, not to pressure.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-3xl">
          <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-6">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Authentic Products",
                description: "Every device is genuine, sourced from authorized distributors with full warranty.",
              },
              {
                title: "Knowledgeable Staff",
                description: "We help you find the right device for your needs and budget — not the most expensive one.",
              },
              {
                title: "Reliable Support",
                description: "Our service doesn&apos;t end at the counter. We&apos;re here to help after your purchase.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <h3 className="text-sm font-semibold text-white tracking-tight mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-white/30 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="max-w-3xl">
          <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-4">
            Visit Our Store
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
            <p className="text-sm text-white/70 mb-1">Nawabshah</p>
            <p className="text-sm text-white/30">
              We are located in the heart of Nawabshah. Call us at{" "}
              <a href="tel:+923130128660" className="text-white/50 hover:text-white/80 transition-colors">
                +92 313 0128660
              </a>{" "}
              for directions or inquiries.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
