"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "./ui";
import { Reveal } from "./Reveal";

const stats = [
  { value: 120, prefix: "+", suffix: "", label: "projetos entregues" },
  { value: 35, prefix: "", suffix: "", label: "apps publicados nas lojas" },
  { value: 3, prefix: "", suffix: "x", label: "aumento médio de conversão" },
  { value: 98, prefix: "", suffix: "%", label: "clientes que renovam" },
];

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-bg p-6 sm:p-10">
              <div className="font-display text-4xl font-semibold sm:text-5xl">
                <span className="text-gradient">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </span>
              </div>
              <p className="mt-3 text-sm text-muted sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
