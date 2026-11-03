import type { Project } from "@/data/projects";

type Screen = Project["screen"];

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <div className={`h-2 rounded-full bg-white/10 ${className}`} style={{ width: w }} />;
}

function PhoneScreen({ screen, accent }: { screen: Screen; accent: string }) {
  if (screen === "finance") {
    return (
      <>
        <p className="text-[9px] text-white/50">Saldo consolidado</p>
        <p className="whitespace-nowrap font-display text-[15px] font-semibold">R$ 248.930</p>
        <p className="text-[9px]" style={{ color: accent }}>
          ▲ 12,4% este mês
        </p>
        <svg viewBox="0 0 120 50" className="mt-3 w-full">
          <path
            d="M0 40 L15 34 L30 37 L45 25 L60 28 L75 16 L90 20 L105 8 L120 10 L120 50 L0 50Z"
            fill={accent}
            opacity="0.15"
          />
          <path
            d="M0 40 L15 34 L30 37 L45 25 L60 28 L75 16 L90 20 L105 8 L120 10"
            stroke={accent}
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="mt-3 space-y-2">
          {["Recebimentos", "Fornecedores", "Folha"].map((t, i) => (
            <div key={t} className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1.5">
              <span className="text-[9px] text-white/70">{t}</span>
              <span className="text-[9px] font-semibold" style={{ color: i ? "#fff" : accent }}>
                {i ? "-R$ 8,2k" : "+R$ 32k"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg p-2 text-[8px] text-black" style={{ background: accent }}>
          🤖 Previsão I.A.: caixa positivo até março
        </div>
      </>
    );
  }
  if (screen === "health") {
    return (
      <>
        <p className="text-[9px] text-white/50">Olá, Dr. André</p>
        <p className="whitespace-nowrap font-display text-xs font-semibold">Agenda de hoje</p>
        <div className="mt-2 flex gap-1">
          {["S", "T", "Q", "Q", "S"].map((d, i) => (
            <span
              key={i}
              className="flex h-7 flex-1 flex-col items-center justify-center rounded-md text-[8px]"
              style={i === 2 ? { background: accent, color: "#000" } : { background: "rgba(255,255,255,.05)" }}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {["08:00 · Ana Souza", "09:30 · Pedro Alves", "11:00 · Carla Dias", "14:00 · Lucas Rocha"].map((t, i) => (
            <div key={t} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
              <span className="h-5 w-1 rounded-full" style={{ background: i < 3 ? accent : "#555" }} />
              <span className="text-[9px] text-white/80">{t}</span>
              <span className="ml-auto text-[8px] text-white/40">{i < 3 ? "✓" : "…"}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-white/10 p-2 text-[8px] text-white/70">
          💬 3 confirmações via WhatsApp
        </div>
      </>
    );
  }
  // fitness
  return (
    <>
      <p className="text-[9px] text-white/50">Treino do dia</p>
      <p className="whitespace-nowrap font-display text-xs font-semibold">Força · Superior</p>
      <div className="relative mx-auto mt-3 h-24 w-24">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="15" stroke="rgba(255,255,255,.08)" strokeWidth="3.5" fill="none" />
          <circle
            cx="18"
            cy="18"
            r="15"
            stroke={accent}
            strokeWidth="3.5"
            fill="none"
            strokeDasharray="94"
            strokeDashoffset="26"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-base font-semibold">72%</span>
          <span className="text-[7px] text-white/50">da meta</span>
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
        {[
          ["486", "kcal"],
          ["42", "min"],
          ["128", "bpm"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-white/5 py-1.5">
            <p className="text-[10px] font-semibold">{v}</p>
            <p className="text-[7px] text-white/50">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg p-2 text-center text-[9px] font-semibold text-black" style={{ background: accent }}>
        Iniciar treino
      </div>
    </>
  );
}

export function PhoneMockup({ screen, accent }: { screen: Screen; accent: string }) {
  return (
    <div className="relative mx-auto w-[170px] rounded-[30px] border border-white/15 bg-black p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)]">
      <div className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-[330px] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#0d140f] to-[#070907] px-3 pb-3 pt-9">
        <PhoneScreen screen={screen} accent={accent} />
      </div>
    </div>
  );
}

function DashboardScreen({ screen, accent }: { screen: Screen; accent: string }) {
  const bars =
    screen === "shop" ? [30, 45, 38, 60, 52, 75, 90] : screen === "crm" ? [50, 62, 48, 70, 66, 82, 78] : [70, 55, 60, 42, 48, 36, 30];
  const kpis =
    screen === "crm"
      ? [["Leads", "1.284"], ["Qualificados", "412"], ["Fechados", "R$ 96k"]]
      : screen === "shop"
        ? [["Pedidos", "3.902"], ["Ticket", "R$ 218"], ["ROAS", "6,4x"]]
        : [["Entregas", "8.420"], ["No prazo", "97%"], ["Custo/km", "-28%"]];

  return (
    <div className="grid h-full grid-cols-[38px_1fr] gap-2">
      <div className="space-y-2 rounded-lg bg-white/[0.03] p-1.5">
        <div className="h-5 rounded-md" style={{ background: accent }} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-5 rounded-md bg-white/5" />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {kpis.map(([l, v]) => (
            <div key={l} className="rounded-lg bg-white/[0.04] p-2">
              <p className="text-[8px] text-white/50">{l}</p>
              <p className="text-xs font-semibold">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-white/[0.04] p-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, background: i === bars.length - 1 ? accent : "rgba(255,255,255,.12)" }}
              />
            ))}
          </div>
          <div className="w-[38%] space-y-1.5 rounded-lg bg-white/[0.04] p-2">
            {screen === "crm" ? (
              <>
                <p className="text-[8px] font-semibold" style={{ color: accent }}>
                  ✦ Assistente I.A.
                </p>
                <p className="text-[7px] leading-snug text-white/60">
                  Lead &quot;Grupo Alfa&quot; tem 87% de chance de fechar. Sugerir proposta hoje.
                </p>
              </>
            ) : (
              <>
                <Bar w="80%" />
                <Bar w="60%" />
                <Bar w="70%" />
                <Bar w="45%" />
                <Bar w="65%" className="!bg-white/5" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup({ screen, accent }: { screen: Screen; accent: string }) {
  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-white/15 bg-[#080b09] shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-3 h-3 flex-1 rounded bg-white/5" />
      </div>
      <div className="h-[210px] p-2.5">
        <DashboardScreen screen={screen} accent={accent} />
      </div>
    </div>
  );
}
