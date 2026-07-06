"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactMethods = [
  {
    label: "Phone",
    value: "+92 313 0128660",
    href: "tel:+923130128660",
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
    label: "Email",
    value: "hello@novatech.pk",
    href: "mailto:hello@novatech.pk",
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.05 29.05 0 001 11.75a29.05 29.05 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.05 29.05 0 00.46-5.33 29.05 29.05 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/[0.04] via-accent-glow/[0.02] to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div className="flex flex-col">
            <div>
              <ScrollReveal>
                <span className="inline-block rounded-full px-3.5 py-1 text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 border border-white/10 mb-3 sm:mb-4">
                  Contact
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                  Get in Touch
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-sm sm:text-base text-white/30 max-w-md leading-relaxed mb-8 sm:mb-10">
                  Have a question about a product, availability, or pricing? We&apos;re
                  just a message or a call away.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="space-y-5 mb-8 sm:mb-10">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 group cursor-pointer min-h-[48px]"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] text-accent-glow shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/[0.08] group-hover:border-white/10 group-hover:scale-105">
                      {method.icon}
                    </span>
                    <div>
                      <p className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-white/30 mb-0.5">
                        {method.label}
                      </p>
                      <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
              <a
                href="https://wa.me/923130128660"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 min-h-[48px] text-sm font-medium text-white/60 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/20 hover:text-white/90 active:scale-[0.97] mb-8 sm:mb-10"
              >
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
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                <span>WhatsApp</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/[0.06] text-white/40 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-white/10 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4.5M11 1V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/20">
                  Follow us
                </span>
                <div className="h-px flex-1 bg-white/[0.04]" />
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:border-white/10 hover:text-white/60 active:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.15}>
          <div className="p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
            <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0a0a0a] p-5 sm:p-8 lg:p-10 overflow-hidden">
              <div className="absolute -inset-40 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 sm:py-12">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-glow">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                    Message Sent
                  </h3>
                  <p className="text-sm text-white/40 max-w-xs">
                    Thank you. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-5">
                  <h3 className="text-base font-semibold text-white tracking-tight mb-1">
                    Send us a Message
                  </h3>
                  <p className="text-sm text-white/30 mb-4 sm:mb-6">
                    We typically respond within 2–4 hours.
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-[11px] font-medium tracking-wider uppercase text-white/30 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 min-h-[48px] text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_1px_rgba(245,158,11,0.2)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-medium tracking-wider uppercase text-white/30 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 min-h-[48px] text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_1px_rgba(245,158,11,0.2)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-medium tracking-wider uppercase text-white/30 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="I'm interested in..."
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white/80 placeholder-white/20 outline-none resize-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-accent/40 focus:bg-white/[0.05] focus:shadow-[0_0_0_1px_rgba(245,158,11,0.2)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 min-h-[48px] text-sm font-semibold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.97] cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#050505] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4.5M11 1V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
