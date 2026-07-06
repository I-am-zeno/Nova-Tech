export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#050505] overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Main glow — smaller on mobile */}
        <div className="absolute -top-1/3 -right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-br from-accent/10 via-accent-glow/5 to-transparent blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-[80px] sm:blur-[100px]" />
        {/* Light streaks — desktop only */}
        <div className="absolute top-[20%] -left-[10%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[25deg] hidden lg:block" />
        <div className="absolute top-[60%] right-[-5%] w-[250px] h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent -rotate-[15deg] hidden lg:block" />
        {/* Scan line overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
      </div>

      {/* Content — flex column on mobile, grid on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        {/* ===== Text Block ===== */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 w-full max-w-xl lg:max-w-none">
          {/* Eyebrow */}
          <div
            className="animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-block rounded-full px-3.5 py-1.5 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-white/50 border border-white/10 bg-white/[0.02]">
              New Collection
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="block text-[clamp(2.5rem,9vw,4.5rem)] font-light leading-[1.06] tracking-tight text-white">
              Technology
            </span>
            <span className="block text-[clamp(2.5rem,9vw,4.5rem)] font-bold leading-[1.06] tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              That Elevates
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base lg:text-lg text-white/40 leading-relaxed max-w-md animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
            style={{ animationDelay: "0.4s" }}
          >
            Discover precision-engineered smartphones and smartwatches curated
            for those who demand the extraordinary.
          </p>

          {/* CTA */}
          <div
            className="animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]"
            style={{ animationDelay: "0.55s" }}
          >
            <button className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 sm:px-7 min-h-[52px] text-sm font-semibold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.97] cursor-pointer w-full sm:w-auto">
              <span>Explore Products</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#050505] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                >
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ===== Device Composition ===== */}
        <div className="relative w-full flex-1 lg:flex-initial lg:min-h-[560px] flex items-center justify-center mt-6 sm:mt-8 lg:mt-0">
          {/* Glow ring */}
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-accent/15 via-accent-glow/10 to-transparent blur-[60px] sm:blur-[80px] animate-[pulse-glow_6s_cubic-bezier(0.32,0.72,0,1)_infinite]" />

          {/* ── Main Phone (all breakpoints) ── */}
          <div
            className="animate-[float-slow_6s_cubic-bezier(0.32,0.72,0,1)_infinite] will-change-transform"
            style={{ animationDelay: "0s" }}
          >
            <div className="relative w-[200px] h-[413px] sm:w-[210px] sm:h-[434px] lg:w-[270px] lg:h-[558px] rounded-[2.2rem] sm:rounded-[2.3rem] lg:rounded-[2.5rem] bg-gradient-to-b from-zinc-600 to-zinc-800 p-[1.5px] shadow-[0_20px_80px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
              <div className="w-full h-full rounded-[calc(2.2rem-1.5px)] sm:rounded-[calc(2.3rem-1.5px)] lg:rounded-[calc(2.5rem-1.5px)] bg-[#0a0a0a] overflow-hidden relative">
                {/* Screen gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.03]" />
                {/* Dynamic Island */}
                <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-[84px] sm:w-[90px] lg:w-[100px] h-[6px] sm:h-[7px] rounded-full bg-black/80" />
                {/* Status dots */}
                <div className="absolute top-2.5 sm:top-3 right-4 sm:right-5 flex gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/20" />
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/20" />
                </div>
                {/* Screen content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[2rem] sm:text-[2rem] lg:text-4xl font-light text-white/80 tracking-wider">
                    9:41
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/30 tracking-widest mt-1 uppercase">
                    Monday, 6 July
                  </span>
                  {/* App icons */}
                  <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 flex gap-3 sm:gap-4 lg:gap-5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-xl bg-white/10" />
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-xl bg-white/10" />
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-xl bg-white/10" />
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-xl bg-white/10" />
                  </div>
                  {/* Dock */}
                  <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 w-[100px] sm:w-[115px] lg:w-[130px] h-[4px] sm:h-[5px] rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Secondary Phone (tablet+) ── */}
          <div
            className="absolute -translate-x-24 -translate-y-10 lg:-translate-x-36 lg:-translate-y-16 animate-[float_7s_cubic-bezier(0.32,0.72,0,1)_infinite] will-change-transform scale-[0.7] sm:scale-[0.8] lg:scale-85 origin-bottom-right hidden sm:block"
            style={{ animationDelay: "-2s" }}
          >
            <div className="relative w-[200px] h-[413px] lg:w-[220px] lg:h-[454px] rounded-[2.1rem] lg:rounded-[2.2rem] bg-gradient-to-b from-zinc-500 to-zinc-700 p-[1.5px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)_inset] opacity-60 scale-[0.9] lg:scale-85 origin-bottom-right">
              <div className="w-full h-full rounded-[calc(2.1rem-1.5px)] lg:rounded-[calc(2.2rem-1.5px)] bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69] via-[#1a1a2e] to-[#16213e]" />
                <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-[70px] lg:w-[80px] h-[6px] sm:h-[7px] rounded-full bg-black/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl lg:text-3xl font-light text-white/60 tracking-wider">9:41</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Smartwatch (tablet+) ── */}
          <div
            className="absolute top-10 lg:top-16 right-3 lg:right-8 animate-[float-watch_5s_cubic-bezier(0.32,0.72,0,1)_infinite] will-change-transform scale-[0.75] sm:scale-[0.85] lg:scale-100 origin-top-right hidden sm:block"
            style={{ animationDelay: "-1s" }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-[3px] bg-gradient-to-b from-zinc-700 to-zinc-800" />
              <div className="relative w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[80px] lg:h-[80px] rounded-full bg-gradient-to-b from-zinc-400 to-zinc-600 p-[2px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 w-[1px] h-[14px] sm:h-[16px] lg:h-[18px] bg-white/60 rounded-full origin-bottom -translate-x-1/2 -translate-y-full rotate-[35deg]" />
                    <div className="absolute top-1/2 left-1/2 w-[1px] h-[10px] sm:h-[11px] lg:h-[12px] bg-white/40 rounded-full origin-bottom -translate-x-1/2 -translate-y-full rotate-[80deg]" />
                    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-white/80 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/[0.04]" />
                </div>
              </div>
              <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-[3px] bg-gradient-to-t from-zinc-700 to-zinc-800" />
            </div>
          </div>

          {/* Floating particles - tablet+ only */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white/8 top-[15%] right-[25%] animate-[float_4s_cubic-bezier(0.32,0.72,0,1)_infinite] hidden sm:block" />
          <div className="absolute w-1 h-1 rounded-full bg-white/5 bottom-[25%] right-[10%] animate-[float_5s_cubic-bezier(0.32,0.72,0,1)_infinite] hidden sm:block" />
          <div className="absolute w-[3px] h-[3px] rounded-full bg-accent/30 top-[40%] right-[5%] animate-[float_6s_cubic-bezier(0.32,0.72,0,1)_infinite] hidden sm:block" />
          <div className="absolute w-1 h-1 rounded-full bg-accent-glow/20 bottom-[35%] right-[35%] animate-[float_3.5s_cubic-bezier(0.32,0.72,0,1)_infinite] hidden sm:block" />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none z-10" />
    </section>
  );
}
