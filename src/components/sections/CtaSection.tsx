export default function CtaSection() {
  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-accent/[0.04]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-br from-accent/10 via-accent-glow/5 to-transparent blur-[100px] max-sm:w-[300px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] px-5 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/30 border border-white/10 mb-5 sm:mb-6">
            Visit Our Store
          </span>

          <h2 className="text-[clamp(1.75rem,6vw,4rem)] font-bold text-white tracking-tight leading-[1.08] mb-3 sm:mb-4">
            Your Next Device
            <br />
            <span className="bg-gradient-to-r from-accent-glow to-accent bg-clip-text text-transparent">
              Is Waiting
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/30 max-w-md leading-relaxed mb-8 sm:mb-10">
            Visit our Nawabshah store to experience every device firsthand, or
            reach out — we&apos;re just a call away.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="tel:+923130128660"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 min-h-[48px] text-sm font-semibold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.97] w-full sm:w-auto"
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
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-7 min-h-[48px] text-sm font-medium text-white/70 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/20 hover:text-white/90 active:scale-[0.97] w-full sm:w-auto"
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
              <span>WhatsApp Us</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.06] text-white/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/10 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4.5M11 1V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
