import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AXIS | Sistemas, Apps, Inteligência Artificial e Marketing Digital",
  description:
    "A AXIS desenvolve sistemas, aplicativos, integra inteligência artificial e executa marketing digital para empresas que querem crescer com tecnologia.",
  openGraph: {
    title: "AXIS | Tecnologia que move empresas",
    description:
      "Sistemas, aplicativos, I.A. e marketing digital, do diagnóstico à escala.",
    images: ["/axis-logo.png"],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/axis-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
