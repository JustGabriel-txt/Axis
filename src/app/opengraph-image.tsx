import { ImageResponse } from "next/og";

export const alt = "AXIS: sistemas, aplicativos, inteligência artificial e marketing digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const facets = [
  { points: "627,272 678,363 580,540 441,603", fill: "#ffffff" },
  { points: "563,569 490,700 363,737 423,633", fill: "#14f08c" },
  { points: "700,404 813,603 677,540 651,491", fill: "#6cf53a" },
  { points: "692,569 832,633 890,737 765,698", fill: "#6cf53a" },
  { points: "613,540 627,513 641,540 641,704 613,704", fill: "#ffffff" },
];

const TEXT = "SISTEMAS · APPS · I.A. · MARKETING Tecnologia que move empresas para o próximo nível. AXIS";

// Baixa só os glifos usados (Inter 800, TTF) no build; se falhar, usa a fonte padrão
async function loadFont() {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@800&text=${encodeURIComponent(TEXT)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await loadFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          background:
            "radial-gradient(ellipse 60% 70% at 78% 50%, rgba(30,242,94,0.28), transparent 70%), #050505",
          color: "#fff",
          fontFamily: font ? "Inter" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              whiteSpace: "nowrap",
              color: "#a1a1aa",
            }}
          >
            SISTEMAS · APPS · I.A. · MARKETING
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, whiteSpace: "nowrap" }}>
            <span>Tecnologia que move</span>
            <span>empresas para o</span>
            <span
              style={{
                backgroundImage: "linear-gradient(100deg, #12f0b0, #1ef25e 45%, #6cf53a)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              próximo nível.
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 30, fontWeight: 800, letterSpacing: 10 }}>
            AXIS
          </div>
        </div>
        <svg width="360" height="317" viewBox="355 265 545 480">
          {facets.map((f, i) => (
            <polygon key={i} points={f.points} fill={f.fill} />
          ))}
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Inter", data: font, weight: 800, style: "normal" }] : undefined,
    },
  );
}
