# FEATURES.md — CIADE Consulting Website

Estado de todas las features del sitio web. Actualizar con cada sprint.

---

## Layout y estructura

| Feature | Estado |
|---|---|
| Proyecto Vite + React 18 modular | ✅ |
| Estructura de componentes por sección | ✅ |
| Sistema de tokens CSS (variables) | ✅ |
| Tipografía Manrope + JetBrains Mono | ✅ |
| Responsive breakpoint 1100px | ✅ |
| Build de producción (`npm run build`) | ✅ |

---

## Secciones del sitio

| Sección | Visual | Interactividad | Navegación / Acciones |
|---|---|---|---|
| **Header** | ✅ sticky + blur | ✅ mega-menú hover | ❌ links sin destino |
| **Hero** | ✅ | — | ❌ botones CTA sin acción |
| **DashboardMock** | ✅ | ✅ tabs Operación/Finanzas/Bodega | — |
| **Chart SVG** | ✅ | — | — |
| **Trust** | ✅ | — | — |
| **Problem / Solution** | ✅ | — | — |
| **Solutions** | ✅ | ✅ hover activa card | ❌ "Ver detalle" sin destino |
| **Modules** | ✅ | ✅ hover | ❌ "Detalle" sin destino |
| **Differentiators** | ✅ | ✅ hover dark | — |
| **Industries** | ✅ | ✅ selector de industria | ❌ "Ver casos" sin acción |
| **Plans** | ✅ | ✅ toggle mensual/anual | ❌ botones "Cotizar" sin acción |
| **Clients** | ✅ | ✅ hover logos | — |
| **Support / FAQ** | ✅ | ✅ acordeón FAQ | — |
| **FinalCTA** | ✅ | — | ❌ botones sin acción |
| **Footer** | ✅ | — | ❌ todos los links son `href="#"` |

---

## Navegación — PENDIENTE ❌

> Verificado en código el 2026-05-04. Todos los items de esta sección están confirmados como no funcionales.

### Prerequisitos de navegación interna

| Qué falta | Dónde | Estado |
|---|---|---|
| `html { scroll-behavior: smooth }` | `src/styles.css` | ❌ |
| `id="inicio"` en Hero | `src/components/Hero.jsx` | ❌ |
| `id="soluciones"` en Solutions | `src/components/Solutions.jsx` | ❌ |
| `id="industrias"` en Industries | `src/components/Industries.jsx` | ❌ |
| `id="planes"` en Plans | `src/components/Plans.jsx` | ❌ |
| `id="soporte"` en Support | `src/components/Support.jsx` | ❌ |

### Navegación interna (scroll-to-section)

| Elemento | Destino esperado | Archivo | Prioridad | Estado |
|---|---|---|---|---|
| Logo CIADE | `#inicio` | Header.jsx L50 | CRÍTICO | ❌ |
| Header → "Planes" | `#planes` | Header.jsx L61 | CRÍTICO | ❌ |
| Header → "Soporte" | `#soporte` | Header.jsx L61 | CRÍTICO | ❌ |
| Header → "Soluciones" | `#soluciones` | Header.jsx L60 | ALTO | ❌ |
| Header → "Industrias" | `#industrias` | Header.jsx L60 | ALTO | ❌ |
| Header → "Nosotros" | página o sección | Header.jsx L61 | MEDIO | ❌ |
| Mega-menú → Soluciones items | `/soluciones/:tipo` | Header.jsx L84 | MEDIO | ❌ |
| Mega-menú → Industrias items | `/industrias/:sector` | Header.jsx L84 | BAJO | ❌ |
| Mega-menú → Servicios items | sección o página | Header.jsx L84 | BAJO | ❌ |

### CTAs principales

| Botón | Acción esperada | Archivo | Prioridad | Estado |
|---|---|---|---|---|
| "Hablar con un asesor" (Header) | WhatsApp / `tel:` | Header.jsx L70 | CRÍTICO | ❌ |
| "Hablar con un asesor" (Hero) | WhatsApp / `tel:` | Hero.jsx L20 | CRÍTICO | ❌ |
| "Agendar demo" (Header) | Calendly / modal | Header.jsx L71 | CRÍTICO | ❌ |
| "Agendar demo" (Hero) | Calendly / modal | Hero.jsx L19 | CRÍTICO | ❌ |
| "Agendar demo" (FinalCTA) | Calendly / modal | FinalCTA.jsx L12 | CRÍTICO | ❌ |
| "Cotizar Starter" | Formulario / `#contacto` | Plans.jsx L59 | ALTO | ❌ |
| "Cotizar Business" | Formulario / `#contacto` | Plans.jsx L59 | ALTO | ❌ |
| "Solicitar propuesta" (Enterprise) | Formulario / `#contacto` | Plans.jsx L59 | ALTO | ❌ |
| "Solicitar cotización" (FinalCTA) | Formulario / `#contacto` | FinalCTA.jsx L13 | ALTO | ❌ |
| "Ver detalle de modalidad" (Solutions ×3) | `/soluciones/:tipo` | Solutions.jsx | MEDIO | ❌ |
| "Detalle" (Modules ×6) | Página o modal | Modules.jsx | MEDIO | ❌ |
| "Ver casos del sector" (Industries) | `/industrias/:sector` | Industries.jsx | BAJO | ❌ |

### Links del footer

| Sección | Solución disponible | Estado |
|---|---|---|
| Soluciones (5 links) | Scroll o rutas React Router | ❌ `href="#"` |
| Servicios (5 links) | Scroll o rutas React Router | ❌ `href="#"` |
| Industrias (5 links) | Rutas React Router | ❌ `href="#"` |
| Compañía (5 links) | Rutas React Router | ❌ `href="#"` |
| Términos / Privacidad / Política | Páginas legales simples | ❌ `href="#"` |

### Mobile

| Feature | Archivo | Estado |
|---|---|---|
| `scroll-behavior: smooth` en CSS | styles.css | ❌ |
| Botón hamburguesa visible en mobile | Header.jsx | ❌ no implementado |
| Estado `menuOpen` en Header | Header.jsx | ❌ no implementado |
| Drawer / sheet de navegación móvil | Header.jsx + CSS | ❌ no implementado |

---

## Páginas / rutas — PENDIENTE ❌

Actualmente el sitio es una sola página (`/`). Estas rutas están por definir.

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Homepage (actual) | ✅ |
| `/soluciones/local` | FENIX ERP Local | ❌ |
| `/soluciones/web` | FENIX Web | ❌ |
| `/soluciones/cloud` | FENIX Cloud | ❌ |
| `/industrias/:sector` | Detalle por sector | ❌ |
| `/planes` | Planes y precios ampliado | ❌ |
| `/soporte` | Centro de soporte | ❌ |
| `/nosotros` | Sobre CIADE | ❌ |
| `/contacto` | Formulario de contacto | ❌ |

---

## Formulario / conversión — PENDIENTE ❌

| Feature | Estado |
|---|---|
| Modal de "Agendar demo" | ❌ |
| Formulario de contacto | ❌ |
| Integración Calendly / HubSpot / Typeform | ❌ |
| WhatsApp click-to-chat | ❌ |
| Validación de formularios | ❌ |

---

## SEO y metadatos — PENDIENTE ❌

| Feature | Estado |
|---|---|
| Meta tags por página | ❌ |
| Open Graph / Twitter card | ❌ |
| Favicon CIADE | ❌ |
| Sitemap | ❌ |
| robots.txt | ❌ |
