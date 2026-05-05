# PROGRESS.md — CIADE Consulting Website

Registro de avance por sesión de trabajo.

---

## 2026-05-04 — Sesión inicial: Conversión a Vite + React modular

### Qué se hizo

Se tomó el prototipo validado en `docs/` (React CDN + Babel standalone) y se convirtió completamente a un proyecto Vite + React 18 listo para desarrollo y producción.

**Archivos creados:**

| Archivo | Descripción |
|---|---|
| `package.json` | Dependencias: React 18.3.1, Vite 5.4, @vitejs/plugin-react |
| `vite.config.js` | Configuración de Vite con plugin React |
| `index.html` | Entry point limpio (sin CDN, sin Babel) |
| `src/main.jsx` | Punto de montaje React con StrictMode |
| `src/App.jsx` | Composición de todas las secciones |
| `src/styles.css` | Sistema de tokens + estilos completos (idéntico al prototipo) |
| `public/ciade-logo.png` | Logo copiado a public/ para referencia como `/ciade-logo.png` |
| `src/components/Icon.jsx` | Librería de 45+ iconos SVG inline |
| `src/components/SectionHead.jsx` | Eyebrow + título + subtítulo reutilizable |
| `src/components/Header.jsx` | Sticky header con mega-menú |
| `src/components/Hero.jsx` | Hero copy + imports DashboardMock |
| `src/components/DashboardMock.jsx` | Mockup ERP con Chart SVG interno |
| `src/components/Trust.jsx` | Sección de estadísticas de autoridad |
| `src/components/ProblemSolution.jsx` | Grid antes/después |
| `src/components/Solutions.jsx` | 3 cards de modalidad con hover |
| `src/components/Modules.jsx` | Grid 3×2 de módulos ERP |
| `src/components/Differentiators.jsx` | Grid oscuro de diferenciales |
| `src/components/Industries.jsx` | Selector de industria con panel |
| `src/components/Plans.jsx` | Planes con toggle mensual/anual |
| `src/components/Clients.jsx` | Pared de logos de clientes |
| `src/components/Support.jsx` | Canales de soporte + FAQ acordeón |
| `src/components/FinalCTA.jsx` | CTA final con proceso en 4 pasos |
| `src/components/Footer.jsx` | Footer con columnas + barra legal |

**Resultado del build:**
```
✓ 47 modules transformed
dist/assets/index.css   25.11 kB │ gzip: 5.29 kB
dist/assets/index.js   178.97 kB │ gzip: 56.59 kB
✓ built in 939ms
```

### Qué NO se hizo (scope fuera de esta sesión)

- Navegación funcional (todos los botones y links siguen sin acción)
- Routing entre páginas
- Mobile menu
- Formulario de contacto / modal de demo

---

## Siguiente paso — Navegación funcional

**Prioridad alta:** La mayoría de botones del sitio no hacen nada. Esto es lo que hay que resolver antes de cualquier lanzamiento.

### Plan de trabajo para la próxima sesión

#### 1. Agregar IDs de sección para scroll-to anchors

En cada componente de sección, agregar el `id` correspondiente:

```jsx
// Hero.jsx
<section id="inicio" className="hero">

// Solutions.jsx
<section id="soluciones" className="sol section section--alt">

// Industries.jsx
<section id="industrias" className="ind section section--alt">

// Plans.jsx
<section id="planes" className="plans section">

// Support.jsx
<section id="soporte" className="sup section">
```

#### 2. Conectar navegación del header con scroll suave

En `Header.jsx`, cambiar los botones de nav a links con scroll:

```jsx
// Añadir al CSS: html { scroll-behavior: smooth; }

// Para items sin mega-menú (Planes, Soporte, Nosotros):
<a href="#planes" className="hdr__navbtn">Planes</a>
```

#### 3. Instalar React Router (para sub-páginas futuras)

```bash
npm install react-router-dom
```

Configurar en `main.jsx` con `BrowserRouter` y rutas en `App.jsx`.

#### 4. Wiring de CTAs principales (en orden de impacto)

| Botón | Solución mínima |
|---|---|
| "Agendar demo" | `href` a Calendly, o modal simple |
| "Hablar con un asesor" | `href="tel:+5932560000"` o WhatsApp link |
| "Cotizar Starter/Business" | Scroll a formulario o link a `/contacto` |
| "Ver detalle de modalidad" | Link a `/soluciones/local` etc. |

#### 5. Mobile navigation (hamburger menu)

El `hdr__nav` se oculta en mobile (`display: none` a 1100px) pero no hay alternativa. Se necesita:
- Botón hamburguesa visible en mobile
- Drawer o sheet lateral con los mismos links de nav

---

## Backlog ordenado por prioridad

1. **[CRÍTICO]** Scroll-to navigation interna (header → secciones)
2. **[CRÍTICO]** CTAs principales conectados (demo, asesor)
3. **[CRÍTICO]** Mobile hamburger menu
4. **[ALTO]** Formulario de contacto funcional
5. **[ALTO]** React Router + rutas para sub-páginas
6. **[MEDIO]** Páginas de detalle por solución (Local/Web/Cloud)
7. **[MEDIO]** SEO básico: meta tags, favicon, Open Graph
8. **[BAJO]** Páginas de industria por sector
9. **[BAJO]** Integración CRM (HubSpot, etc.)

---

## 2026-05-04 — Sesión 2: Auditoría de código y diagnóstico

### Qué se hizo

Revisión exhaustiva del código fuente de todos los componentes para verificar el estado real de implementación. Se confirmó y documentó con precisión qué está roto y en qué archivo.

### Hallazgos verificados en código

**`src/components/Header.jsx`**
- Línea 50: Logo → `href="#"` (no hace nada)
- Línea 61: Botones de nav con mega-menú (`Soluciones`, `Industrias`, `Servicios`) → `<button>` sin onClick de scroll
- Línea 61: Botones sin mega-menú (`Planes`, `Soporte`, `Nosotros`) → `<button>` sin `href` ni acción
- Línea 84: Items del mega-menú → `<a href="#">` (destinos no definidos)
- Líneas 70–71: CTAs "Hablar con un asesor" y "Agendar demo" → `<button>` sin onClick

**`src/components/Hero.jsx`**
- Líneas 19–20: Ambos CTAs → `<button>` sin onClick

**`src/components/Plans.jsx`**
- Línea 59: "Cotizar Starter", "Cotizar Business", "Solicitar propuesta" → `<button>` sin onClick

**`src/components/FinalCTA.jsx`**
- Líneas 12–13: "Agendar demo" y "Solicitar cotización" → `<button>` sin onClick

**`src/components/Footer.jsx`**
- Línea 31: Los 20 links de columnas → `href="#"` literal
- Línea 40: Links legales → `href="#"` literal

**`src/styles.css`**
- No existe `html { scroll-behavior: smooth }` — falta para que los anchors funcionen suavemente

**Secciones sin `id`:**
- `Hero.jsx` → `<section className="hero">` (sin id)
- `Plans.jsx` → `<section className="plans section">` (sin id)
- `Support.jsx` → `<section className="sup section">` (sin id)
- `Solutions.jsx`, `Industries.jsx`, `Modules.jsx` → igual

### Qué funciona correctamente (verificado)

- Mega-menú: show/hide con hover + `useEffect` para cerrar al salir ✅
- Scroll listener en header para efecto blur ✅
- FAQ acordeón con `useState` ✅
- Tabs del dashboard (Operación / Finanzas / Bodega) ✅
- Toggle precio mensual/anual en planes ✅
- Selector de industria con panel dinámico ✅
- Hover de cards en Solutions ✅

### Plan de acción inmediato (por orden de ejecución)

| Paso | Acción | Esfuerzo |
|---|---|---|
| 1 | `html { scroll-behavior: smooth }` en styles.css | 1 línea |
| 2 | Agregar `id` a Hero, Solutions, Plans, Support, Industries | 5 líneas |
| 3 | Convertir nav buttons sin mega-menú a `<a href="#id">` en Header | ~10 líneas |
| 4 | Logo CIADE → `href="#inicio"` | 1 línea |
| 5 | "Hablar con un asesor" → `<a href="https://wa.me/593XXXXXXX">` | 2 archivos |
| 6 | "Agendar demo" → link Calendly o scroll a formulario | 3 archivos |
| 7 | Botones "Cotizar" en Plans → scroll a sección contacto | Plans.jsx |
| 8 | Mobile hamburger menu en Header | Header.jsx + CSS |
