const features = [
  {
    title: "Genuine Products",
    description:
      "Every device is factory-sealed and sourced directly from the manufacturer.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Latest Devices",
    description:
      "We stock the newest releases — often before they hit retail shelves.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Expert Guidance",
    description:
      "Knowledgable advisors help you find the perfect device for your lifestyle.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "After-Sales Support",
    description:
      "Dedicated support team ready to assist you long after your purchase.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

function FeatureCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className="group p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:from-white/[0.12] hover:to-white/[0.06] active:scale-[0.98]"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="relative rounded-[calc(1.5rem-1px)] bg-[#080808] p-5 sm:p-8 h-full overflow-hidden">
        <div className="absolute -inset-40 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:from-accent/[0.04] group-hover:via-accent/[0.01] group-hover:to-transparent pointer-events-none" />

        <div className="relative z-10 mb-4 sm:mb-5 flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] text-accent-glow transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/[0.08] group-hover:border-white/10 group-hover:scale-105">
          {icon}
        </div>

        <h3 className="relative z-10 text-sm sm:text-lg font-semibold text-white tracking-tight mb-1.5 sm:mb-2">
          {title}
        </h3>
        <p className="relative z-10 text-sm text-white/35 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
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
        <div className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/[0.03] via-accent-glow/[0.02] to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 lg:mb-20">
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Built on Trust
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/30 max-w-lg">
            We don&apos;t just sell technology — we stand behind it.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
