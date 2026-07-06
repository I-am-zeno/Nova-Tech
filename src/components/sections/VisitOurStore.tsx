const info = [
  {
    label: "Address",
    value: "12-A, Shahra-e-Benazir, Near City Hospital, Nawabshah, 24160",
    href: "https://maps.google.com/?q=12-A+Shahra-e-Benazir+Near+City+Hospital+Nawabshah+24160",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92 244 937 1234",
    href: "tel:+922449371234",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Mon–Sat: 10:00 – 19:00 / Sun: 11:00 – 17:00",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function InfoItem({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex items-start gap-4 group min-h-[48px] ${href ? "cursor-pointer" : ""}`}
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-accent-glow shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/[0.08] group-hover:border-white/10 group-hover:scale-105">
        {icon}
      </span>
      <div>
        <p className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-white/30 mb-0.5">
          {label}
        </p>
        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {value}
        </p>
      </div>
    </Tag>
  );
}

function MapMockup() {
  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 blur-2xl animate-[pulse-glow_3s_cubic-bezier(0.32,0.72,0,1)_infinite]" />
          <div className="absolute w-4 h-4 rounded-full bg-accent border-2 border-[#0a0a0a] shadow-[0_0_0_2px_rgba(0,102,255,0.3)]" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 sm:translate-y-10">
        <span className="text-[10px] sm:text-[11px] font-medium text-white/60 bg-[#0a0a0a]/90 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-white/[0.06] whitespace-nowrap">
          NovaTech Nawabshah
        </span>
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150 Q 100 50, 200 150 T 400 150"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
        />
        <path
          d="M0 100 Q 150 200, 300 100 T 400 200"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

export default function VisitOurStore() {
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/[0.03] via-accent-glow/[0.02] to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
              Visit Our Store
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
              We&aposre Here to Help
            </h2>
            <p className="text-sm sm:text-base text-white/30 max-w-md mb-8 sm:mb-10 leading-relaxed">
              Step into our Nawabshah flagship. Experience every device firsthand
              and talk to our product experts.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {info.map((item) => (
                <InfoItem key={item.label} {...item} />
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=12-A+Shahra-e-Benazir+Near+City+Hospital+Nawabshah+24160"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 min-h-[48px] text-sm font-medium text-white/60 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/20 hover:text-white/90 active:scale-[0.97] mt-8 sm:mt-10"
            >
              <span>Get Directions</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.06] text-white/40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/10 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M1 11L11 1M11 1H4.5M11 1V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]">
            <MapMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
