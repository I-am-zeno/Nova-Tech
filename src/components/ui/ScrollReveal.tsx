"use client";

import { useEffect, useRef, useState } from "react";

const ANIMATION_CLASS = "animate-[fade-up_0.8s_cubic-bezier(0.32,0.72,0,1)_both]";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? ANIMATION_CLASS : "opacity-0"}`}
      style={visible ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
