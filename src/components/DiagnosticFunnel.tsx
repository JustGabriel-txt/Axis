"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Layers,
  Megaphone,
  Rocket,
  Smartphone,
  Sprout,
  Store,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { Container, Eyebrow } from "./ui";

const needs = [
  { id: "Sistema ou aplicativo", icon: Smartphone, sub: "App, plataforma web, SaaS" },
  { id: "Inteligência artificial", icon: BrainCircuit, sub: "Agentes, chatbots, automação" },
  { id: "Marketing digital", icon: Megaphone, sub: "Tráfego, funis, SEO" },
  { id: "Solução completa", icon: Layers, sub: "Tecnologia + I.A. + marketing" },
];

const stages = [
  { id: "Estou começando um negócio", icon: Sprout },
  { id: "Pequena empresa", icon: Store },
  { id: "Empresa em crescimento", icon: Rocket },
  { id: "Média ou grande empresa", icon: Building2 },
];

const steps = ["Necessidade", "Momento", "Contato"];

const MAX_FIELD = 80;
const MAX_GOAL = 400;

// Remove caracteres de controle e limita o tamanho antes de montar a mensagem
const clean = (v: string, max: number) =>
  v.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);

export function DiagnosticFunnel() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<string[]>([]);
  const [stage, setStage] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [goal, setGoal] = useState("");

  const toggleNeed = (id: string) =>
    setNeed((n) => (n.includes(id) ? n.filter((x) => x !== id) : [...n, id]));

  const canNext = step === 0 ? need.length > 0 : step === 1 ? !!stage : name.trim().length > 1;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!canNext) return;
    const n = clean(name, MAX_FIELD);
    const c = clean(company, MAX_FIELD);
    const g = clean(goal, MAX_GOAL);
    const msg = [
      `Olá, AXIS! Sou ${n}${c ? `, da ${c}` : ""}.`,
      `Fiz o diagnóstico no site e tenho interesse em: ${need.join(", ")}.`,
      `Momento da empresa: ${stage}.`,
      g ? `Objetivo: ${g}` : "",
      "Gostaria de agendar uma conversa com um especialista.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const slide = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.35 },
      };

  const optionClass = (active: boolean) =>
    `flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
      active
        ? "border-green bg-green/[0.08] shadow-[0_0_30px_-12px_#1ef25e]"
        : "border-line bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
    }`;

  return (
    <section id="diagnostico" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[500px] max-w-4xl -translate-y-1/2 rounded-full bg-green/[0.08] blur-[140px]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Diagnóstico gratuito</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Descubra em <span className="text-gradient">30 segundos</span> o caminho ideal para
            sua empresa.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Responda 3 perguntas rápidas e fale direto com um especialista pelo WhatsApp, já com
            seu cenário em mãos. Sem compromisso, sem enrolação.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Resposta em até 1 hora útil",
              "Conversa com especialista, não com robô de vendas",
              "Proposta clara com escopo, prazo e investimento",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/85">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green/15 text-green">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="rounded-3xl border border-line bg-surface/90 p-6 shadow-[0_40px_100px_-40px_rgba(30,242,94,0.25)] backdrop-blur-xl sm:p-9"
          >
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-muted">
              <span>
                Passo {step + 1} de {steps.length} · {steps[step]}
              </span>
              <span className="text-green">{Math.round(((step + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-brand"
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="mt-8 min-h-[340px]">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.fieldset key="s0" {...slide}>
                    <legend className="font-display text-xl font-semibold">
                      O que sua empresa precisa?
                    </legend>
                    <p className="mt-1 text-sm text-muted">Pode escolher mais de uma opção.</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {needs.map((n) => {
                        const active = need.includes(n.id);
                        return (
                          <button
                            type="button"
                            key={n.id}
                            onClick={() => toggleNeed(n.id)}
                            aria-pressed={active}
                            className={optionClass(active)}
                          >
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                active ? "bg-gradient-brand text-black" : "bg-white/5 text-green"
                              }`}
                            >
                              <n.icon className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">{n.id}</span>
                              <span className="block text-xs text-muted">{n.sub}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.fieldset>
                )}

                {step === 1 && (
                  <motion.fieldset key="s1" {...slide}>
                    <legend className="font-display text-xl font-semibold">
                      Qual o momento da sua empresa?
                    </legend>
                    <p className="mt-1 text-sm text-muted">Assim indicamos a solução certa para o seu porte.</p>
                    <div className="mt-6 grid gap-3">
                      {stages.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => {
                            setStage(s.id);
                            setStep(2);
                          }}
                          aria-pressed={stage === s.id}
                          className={optionClass(stage === s.id)}
                        >
                          <s.icon className="h-5 w-5 text-green" />
                          <span className="text-sm font-semibold">{s.id}</span>
                          {stage === s.id && <Check className="ml-auto h-4 w-4 text-green" />}
                        </button>
                      ))}
                    </div>
                  </motion.fieldset>
                )}

                {step === 2 && (
                  <motion.fieldset key="s2" {...slide}>
                    <legend className="font-display text-xl font-semibold">
                      Para quem preparamos o diagnóstico?
                    </legend>
                    <p className="mt-1 text-sm text-muted">
                      Você será direcionado ao WhatsApp com a mensagem pronta.
                    </p>
                    <div className="mt-6 space-y-4">
                      {[
                        { label: "Seu nome *", value: name, set: setName, ph: "Como podemos te chamar?", auto: "name" },
                        { label: "Empresa", value: company, set: setCompany, ph: "Nome da empresa", auto: "organization" },
                      ].map((f) => (
                        <label key={f.label} className="block">
                          <span className="text-sm font-medium text-white/80">{f.label}</span>
                          <input
                            maxLength={MAX_FIELD}
                            value={f.value}
                            onChange={(e) => f.set(e.target.value)}
                            placeholder={f.ph}
                            autoComplete={f.auto}
                            className="mt-2 w-full rounded-xl border border-line bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-green focus:shadow-[0_0_0_3px_rgba(30,242,94,0.15)]"
                          />
                        </label>
                      ))}
                      <label className="block">
                        <span className="text-sm font-medium text-white/80">
                          Qual seu principal objetivo? <span className="text-muted">(opcional)</span>
                        </span>
                        <textarea
                          maxLength={MAX_GOAL}
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                          rows={3}
                          placeholder="Ex.: automatizar o atendimento e vender mais pelo app"
                          className="mt-2 w-full resize-none rounded-xl border border-line bg-black/40 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-green focus:shadow-[0_0_0_3px_rgba(30,242,94,0.15)]"
                        />
                      </label>
                    </div>
                  </motion.fieldset>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`inline-flex items-center gap-2 text-sm text-muted transition hover:text-white ${
                  step === 0 ? "invisible" : ""
                }`}
              >
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>
              {step < 2 ? (
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continuar <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_-8px_#1ef25e] transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Falar no WhatsApp <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
