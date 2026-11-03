# AXIS — Site institucional

Site da AXIS: sistemas, aplicativos, inteligência artificial e marketing digital.

Feito com Next.js (App Router), Tailwind CSS e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Onde editar o conteúdo

- `src/data/site.ts` — WhatsApp, e-mail e redes sociais
- `src/data/projects.ts` — cases do portfólio
- `src/data/testimonials.ts` — depoimentos
- `src/components/Stats.tsx` — números de resultados
- `src/data/seo.ts` — título, descrição e palavras-chave (defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial)
- `public/llms.txt` — resumo da empresa para buscadores de IA

## Build de produção

```bash
npm run build
npm start
```
