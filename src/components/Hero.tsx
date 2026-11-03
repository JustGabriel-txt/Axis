"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Code2, TrendingUp } from "lucide-react";
import { AxisMark } from "./AxisMark";
import { Container, Eyebrow, GhostButton, PrimaryButton } from "./ui";

const chips = [
  {
    icon: Bot,
    title: "Agente de I.A. ativo",
    sub: "1.284 atendimentos hoje",
    className: "left-0 top-[12%] sm:-left-6",
  },
  {
    icon: TrendingUp,
    title: "+187% faturamento",
    sub: "Campanha Lumi Store",
    className: "right-0 top-[44%] sm:-right-4",
  },
  {
    icon: Code2,
    title: "Deploy concluído",
    sub: "v2.4.0 · app iOS e Android",
    className: "bottom-[6%] left-[6%]",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-green/10 blur-[140px]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div {...fade(0)}>
            <Eyebrow>Sistemas · Apps · I.A. · Marketing</Eyebrow>
          </motion.div>
          <motion.h1
            {...fade(0.1)}
            className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            Tecnologia que move empresas para o{" "}
            <span className="text-gradient">próximo nível.</span>
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Desenvolvemos sistemas e aplicativos sob medida, colocamos inteligência
            artificial para trabalhar no seu negócio e geramos demanda com marketing
            orientado a dados. Um só parceiro, do diagnóstico à escala.
          </motion.p>
          <motion.div {...fade(0.3)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#diagnostico">Diagnóstico gratuito</PrimaryButton>
            <GhostButton href="#projetos">Ver projetos entregues</GhostButton>
          </motion.div>
          <motion.div
            {...fade(0.4)}
            className="mt-12 flex items-center gap-4 text-sm text-muted"
          >
            <div className="flex -space-x-2">
              {["MC", "RM", "JP", "AL"].map((i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-surface-2 text-[11px] font-semibold text-white"
                >
                  {i}
                </span>
              ))}
            </div>
            <p>
              <span className="font-semibold text-white">+80 empresas</span> já
              cresceram com a AXIS
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[520px]">
          <div className="absolute inset-[12%] rounded-full bg-gradient-brand opacity-20 blur-[90px]" />
          <div className="absolute inset-[6%] rounded-full border border-white/[0.06]" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-white/[0.08]" />
          <div className="animate-float absolute inset-[22%]">
            <AxisMark animated className="h-full w-full drop-shadow-[0_0_40px_rgba(30,242,94,0.35)]" />
          </div>
          {chips.map((c, i) => (
            <motion.div
              key={c.title}
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
              className={`absolute hidden items-center sm:flex gap-3 rounded-2xl border border-line bg-black/60 px-4 py-3 shadow-2xl backdrop-blur-xl ${c.className}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green/10 text-green">
                <c.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold">{c.title}</span>
                <span className="block text-xs text-muted">{c.sub}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
