const { useState, useEffect, useRef } = React;

// ============ SHARED ICONS (1.5px stroke, monochrome) ============
const Icon = ({ name, size = 20, className = "", style = {} }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", className, style };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="M5 12.5 10 17l9-10"/>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    chevronUp: <path d="m6 15 6-6 6 6"/>,
    chevronRight: <path d="m9 6 6 6-6 6"/>,
    server: <><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></>,
    cloud: <><path d="M17.5 18a4.5 4.5 0 0 0 .5-8.95A6 6 0 0 0 6.18 10 4 4 0 0 0 7 18Z"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    invoice: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9 8h6M9 12h6M9 16h3"/></>,
    box: <><path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/></>,
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5a2.5 2.5 0 0 0-2.5 2.5z"/><path d="M4 4.5v16A2.5 2.5 0 0 1 6.5 18H20"/></>,
    users: <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></>,
    cart: <><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l3 12h12l2-8H6"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/></>,
    shield: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5Z"/>,
    layers: <><path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    pin: <><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M6 6 18 18M18 6 6 18"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h7a2 2 0 0 1 2 2v7"/></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    headset: <><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14v3a3 3 0 0 1-3 3h-1v-7h2a2 2 0 0 1 2 2zM3 14v3a3 3 0 0 0 3 3h1v-7H5a2 2 0 0 0-2 2z"/></>,
    factory: <><path d="M2 20V8l6 4V8l6 4V8l6 4v8z"/><path d="M9 20v-4M15 20v-4"/></>,
    stethoscope: <><path d="M4.8 2.3A.3.3 0 0 1 5 2h2a.3.3 0 0 1 .3.3V8a4.7 4.7 0 0 1-9.3 0V2.3A.3.3 0 0 1 1.3 2H3" transform="translate(4 1)"/><circle cx="20" cy="14" r="2"/><path d="M8 15a6 6 0 0 0 12 0v-2"/></>,
    truck: <><path d="M1 7h13v10H1zM14 10h4l3 3v4h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
    calculator: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h.01M8 15h2M12 15h2M16 15h.01M8 19h6"/></>,
    play: <path d="m8 5 12 7-12 7Z"/>,
    download: <><path d="M12 4v12M7 11l5 5 5-5M5 20h14"/></>,
    activity: <path d="M3 12h4l3-9 4 18 3-9h4"/>,
  };
  return <svg {...props}>{paths[name]}</svg>;
};

// ============ HEADER ============
const Header = ({ tweaks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "soluciones", label: "Soluciones", items: [
      { t: "FENIX ERP Local", d: "Instalación on-premise" },
      { t: "FENIX Web", d: "Acceso desde cualquier lugar" },
      { t: "FENIX Cloud", d: "Infraestructura escalable" },
    ]},
    { id: "industrias", label: "Industrias", items: [
      { t: "Empresas medianas", d: "Operación multi-área" },
      { t: "Contadores", d: "Multi-empresa" },
      { t: "Clínicas y salud", d: "Cumplimiento sectorial" },
      { t: "Retail y comercio", d: "Punto de venta integrado" },
      { t: "Importadoras", d: "Costeo de importación" },
    ]},
    { id: "servicios", label: "Servicios", items: [
      { t: "Consultoría", d: "Diagnóstico operativo" },
      { t: "Implementación", d: "Despliegue y migración" },
      { t: "Personalización", d: "Adaptación al flujo" },
      { t: "Capacitación", d: "Equipos productivos" },
      { t: "Soporte", d: "Atención especializada" },
    ]},
    { id: "planes", label: "Planes" },
    { id: "soporte", label: "Soporte" },
    { id: "nosotros", label: "Nosotros" },
  ];

  return (
    <header className={`hdr ${scrolled ? "hdr--scrolled" : ""}`} onMouseLeave={() => setMegaOpen(null)}>
      <div className="hdr__bar">
        <a href="#" className="hdr__brand">
          <img src="assets/ciade-logo.png" alt="CIADE" className="hdr__logo" />
          <div className="hdr__brandtxt">
            <span className="hdr__name">CIADE</span>
            <span className="hdr__sub">Consulting S.A.</span>
          </div>
        </a>

        <nav className="hdr__nav">
          {nav.map(n => (
            <div key={n.id} className="hdr__navitem"
                 onMouseEnter={() => n.items && setMegaOpen(n.id)}>
              <button className={`hdr__navbtn ${megaOpen === n.id ? "is-open" : ""}`}>
                {n.label}
                {n.items && <Icon name="chevron" size={14} />}
              </button>
            </div>
          ))}
        </nav>

        <div className="hdr__cta">
          <button className="btn btn--ghost"><Icon name="phone" size={14}/> Hablar con un asesor</button>
          <button className="btn btn--primary">Agendar demo <Icon name="arrow" size={14}/></button>
        </div>
      </div>

      {megaOpen && nav.find(n => n.id === megaOpen)?.items && (
        <div className="mega" onMouseLeave={() => setMegaOpen(null)}>
          <div className="mega__inner">
            <div className="mega__col mega__col--label">
              <div className="mega__eyebrow">{nav.find(n => n.id === megaOpen).label}</div>
              <p className="mega__desc">
                {megaOpen === "soluciones" && "Tres modalidades de despliegue para adaptarse a la realidad operativa y de infraestructura de cada empresa."}
                {megaOpen === "industrias" && "Implementaciones especializadas según el flujo operativo y cumplimiento de cada sector."}
                {megaOpen === "servicios" && "Acompañamiento consultivo de extremo a extremo, desde el diagnóstico hasta la operación estable."}
              </p>
            </div>
            <div className="mega__grid">
              {nav.find(n => n.id === megaOpen).items.map((it, i) => (
                <a key={i} className="mega__item" href="#">
                  <div className="mega__t">{it.t}</div>
                  <div className="mega__d">{it.d}</div>
                  <Icon name="arrow" size={14} className="mega__arr" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// ============ HERO ============
const Hero = () => (
  <section className="hero">
    <div className="container hero__inner">
      <div className="hero__copy">
        <div className="eyebrow">
          <span className="eyebrow__dot"></span>
          Canal oficial de distribución FENIX · Ecuador
        </div>
        <h1 className="hero__h1">
          Implementamos soluciones <span className="hi">ERP FENIX</span> para empresas que necesitan más control, estabilidad y eficiencia operativa.
        </h1>
        <p className="hero__sub">
          Consultoría, implementación y soporte especializado para automatizar procesos contables, administrativos y comerciales en empresas medianas y firmas contables.
        </p>
        <div className="hero__ctas">
          <button className="btn btn--primary btn--lg">Agendar demo <Icon name="arrow" size={16}/></button>
          <button className="btn btn--ghost btn--lg">Hablar con un asesor</button>
        </div>
        <div className="hero__assure">
          <div className="hero__assure-item"><Icon name="check" size={14}/> Sin tarjeta requerida</div>
          <div className="hero__assure-item"><Icon name="check" size={14}/> Diagnóstico inicial gratuito</div>
          <div className="hero__assure-item"><Icon name="check" size={14}/> Respuesta en 24 h</div>
        </div>
      </div>

      <DashboardMock />
    </div>
    <div className="hero__bg" aria-hidden></div>
  </section>
);

// ============ ERP DASHBOARD MOCKUP (original UI) ============
const DashboardMock = () => {
  const [tab, setTab] = useState("operacion");
  return (
    <div className="dash">
      <div className="dash__chrome">
        <div className="dash__dots"><span/><span/><span/></div>
        <div className="dash__url">erp.ciadeconsulting.ec / panel</div>
        <div className="dash__chrome-r"><Icon name="search" size={14}/></div>
      </div>
      <div className="dash__app">
        <aside className="dash__side">
          <div className="dash__brand">
            <div className="dash__brandmark"></div>
            <div>
              <div className="dash__brandname">FENIX ERP</div>
              <div className="dash__brandtag">Distribuidora El Pacífico</div>
            </div>
          </div>
          <div className="dash__nav">
            {[
              ["chart", "Resumen", true],
              ["invoice", "Facturación", false],
              ["box", "Inventarios", false],
              ["book", "Contabilidad", false],
              ["users", "Nómina", false],
              ["cart", "Punto de venta", false],
              ["activity", "Reportes BI", false],
              ["settings", "Configuración", false],
            ].map(([ic, lb, a], i) => (
              <div key={i} className={`dash__navi ${a ? "is-active" : ""}`}>
                <Icon name={ic} size={15}/>{lb}
              </div>
            ))}
          </div>
        </aside>

        <main className="dash__main">
          <div className="dash__top">
            <div>
              <div className="dash__crumb">Operaciones · Hoy</div>
              <div className="dash__title">Resumen ejecutivo</div>
            </div>
            <div className="dash__tabs">
              {[["operacion","Operación"],["finanzas","Finanzas"],["bodega","Bodega"]].map(([id,l]) => (
                <button key={id} className={`dash__tab ${tab===id?"is-active":""}`} onClick={()=>setTab(id)}>{l}</button>
              ))}
            </div>
          </div>

          <div className="dash__kpis">
            {[
              ["Facturación", "$ 184,520", "+12.4%", true],
              ["Órdenes", "1,284", "+3.1%", true],
              ["Cuentas x cobrar", "$ 42,180", "−6.2%", true],
              ["Margen op.", "28.6 %", "+0.9 pp", true],
            ].map(([l,v,d,p], i) => (
              <div key={i} className="kpi">
                <div className="kpi__l">{l}</div>
                <div className="kpi__v">{v}</div>
                <div className={`kpi__d ${p?"is-up":"is-dn"}`}>{d}</div>
              </div>
            ))}
          </div>

          <div className="dash__row">
            <div className="dash__card dash__card--chart">
              <div className="dash__card-h">
                <div>
                  <div className="dash__card-t">Ventas mensuales</div>
                  <div className="dash__card-s">USD · últimos 6 meses</div>
                </div>
                <div className="dash__chips">
                  <span className="chip chip--on">Ventas</span>
                  <span className="chip">Cobros</span>
                </div>
              </div>
              <Chart />
            </div>
            <div className="dash__card dash__card--list">
              <div className="dash__card-h">
                <div className="dash__card-t">Comprobantes electrónicos</div>
                <span className="pill">SRI · 100% autorizados</span>
              </div>
              <ul className="dash__list">
                {[
                  ["FAC-001-2841","Comercial Andina","$ 4,820.00","Aut."],
                  ["FAC-001-2840","Importadora MZ","$ 1,205.50","Aut."],
                  ["RET-001-0312","Comercial Andina","$ 240.00","Aut."],
                  ["FAC-001-2839","Servicios Industriales del Norte","$ 12,400.00","Aut."],
                  ["FAC-001-2838","Tecnimax Cía. Ltda.","$ 980.00","Aut."],
                ].map((r,i)=>(
                  <li key={i} className="dash__listi">
                    <span className="mono">{r[0]}</span>
                    <span className="trunc">{r[1]}</span>
                    <span className="amt">{r[2]}</span>
                    <span className="tag tag--ok">{r[3]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Chart = () => {
  const data = [42, 58, 49, 71, 65, 88];
  const data2 = [34, 46, 41, 58, 56, 72];
  const w = 460, h = 170, pad = 24;
  const max = 100;
  const xs = i => pad + (i * (w - pad*2)) / (data.length - 1);
  const ys = v => h - pad - (v * (h - pad*2)) / max;
  const path = (arr) => arr.map((v,i)=> `${i===0?"M":"L"} ${xs(i)} ${ys(v)}`).join(" ");
  const area = (arr) => `${path(arr)} L ${xs(arr.length-1)} ${h-pad} L ${xs(0)} ${h-pad} Z`;
  return (
    <svg className="chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--teal)" stopOpacity="0.18"/>
          <stop offset="1" stopColor="var(--teal)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0,1,2,3].map(i => (
        <line key={i} x1={pad} x2={w-pad} y1={pad + i*(h-pad*2)/3} y2={pad + i*(h-pad*2)/3} stroke="var(--line)" strokeDasharray="2 4"/>
      ))}
      <path d={area(data)} fill="url(#g1)"/>
      <path d={path(data2)} fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeDasharray="4 4"/>
      <path d={path(data)} fill="none" stroke="var(--teal)" strokeWidth="2"/>
      {data.map((v,i)=>(
        <circle key={i} cx={xs(i)} cy={ys(v)} r="3" fill="white" stroke="var(--teal)" strokeWidth="1.5"/>
      ))}
      {["May","Jun","Jul","Ago","Sep","Oct"].map((m,i)=>(
        <text key={m} x={xs(i)} y={h-6} textAnchor="middle" fontSize="9" fill="var(--ink-3)" fontFamily="Manrope">{m}</text>
      ))}
    </svg>
  );
};

// ============ TRUST ============
const Trust = () => (
  <section className="trust">
    <div className="container trust__inner">
      <div className="trust__intro">
        <div className="eyebrow eyebrow--dark"><span className="eyebrow__dot eyebrow__dot--light"/>Autoridad operativa</div>
        <h2 className="trust__h">Casi tres décadas implementando ERP en empresas reales del Ecuador.</h2>
      </div>
      <div className="trust__grid">
        {[
          ["29", "años", "de experiencia en consultoría e implementación ERP"],
          ["+100", "empresas", "operando hoy con FENIX en producción"],
          ["6", "ciudades", "con presencia, soporte y cobertura"],
          ["1", "canal oficial", "de distribución FENIX en Ecuador"],
        ].map(([n,u,d], i) => (
          <div key={i} className="trust__item">
            <div className="trust__num">{n}<span>{u}</span></div>
            <p className="trust__d">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ PROBLEM / SOLUTION ============
const ProblemSolution = () => (
  <section className="ps section">
    <div className="container">
      <SectionHead
        eyebrow="Diagnóstico"
        title="La operación crece. Las hojas de cálculo no."
        sub="Cuando los procesos se vuelven críticos, las soluciones genéricas dejan de sostener la operación. CIADÉ implementa el ERP que se adapta al flujo real del negocio."
      />
      <div className="ps__grid">
        <div className="ps__col ps__col--prob">
          <div className="ps__col-h">Sin sistema unificado</div>
          {[
            "Datos dispersos en hojas de cálculo, correos y módulos aislados.",
            "Reprocesos contables al cierre y diferencias entre áreas.",
            "Reportería tardía y sin visibilidad ejecutiva en tiempo real.",
            "Dependencia de personas clave para tareas operativas críticas.",
            "Inventarios desincronizados con facturación y bodega.",
          ].map((t,i)=>(
            <div key={i} className="ps__row"><span className="ps__x">×</span>{t}</div>
          ))}
        </div>
        <div className="ps__col ps__col--sol">
          <div className="ps__col-h">Con CIADÉ + FENIX</div>
          {[
            "Operación, contabilidad e inventario integrados en un único ecosistema.",
            "Facturación electrónica autorizada por el SRI sin pasos manuales.",
            "Tableros operativos y financieros disponibles 24/7 para gerencia.",
            "Procesos documentados, replicables y auditables por diseño.",
            "Control de stock multi-bodega sincronizado con punto de venta.",
          ].map((t,i)=>(
            <div key={i} className="ps__row"><Icon name="check" size={16} className="ps__c"/>{t}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ============ SOLUTIONS (3 cards) ============
const Solutions = () => {
  const [active, setActive] = useState(1);
  const sols = [
    {
      tag: "ON-PREMISE",
      title: "FENIX ERP Local",
      sub: "Para empresas que necesitan control total e infraestructura propia.",
      desc: "Sistema instalado en servidores del cliente. Máxima estabilidad operativa y autonomía. Ideal para operaciones críticas donde la disponibilidad y la soberanía del dato son prioridad.",
      icon: "server",
      points: ["Instalación en servidor propio","Datos bajo control interno","Despliegue offline disponible","Multi-usuario concurrente"],
    },
    {
      tag: "WEB",
      title: "FENIX Web",
      sub: "Para empresas que necesitan flexibilidad sin atarse a infraestructura local.",
      desc: "Acceso desde cualquier lugar mediante navegador. Centraliza la operación entre sucursales, contadores externos y gerencia móvil con la misma estabilidad de la versión local.",
      icon: "globe",
      points: ["Acceso multi-sucursal","Sin instalaciones por equipo","Backups gestionados","Acceso por roles"],
    },
    {
      tag: "CLOUD",
      title: "FENIX Cloud",
      sub: "Infraestructura ERP en la nube para operaciones distribuidas y escalables.",
      desc: "Para empresas con múltiples usuarios, alta concurrencia y crecimiento proyectado. Escala sin reinversión en infraestructura, con cobertura de seguridad y monitoreo continuo.",
      icon: "cloud",
      points: ["Escalable bajo demanda","Alta disponibilidad","Monitoreo 24/7","Pago por uso predecible"],
    },
  ];

  return (
    <section className="sol section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Soluciones"
          title="Tres modalidades. Una sola solución empresarial."
          sub="Elija el modelo de despliegue según su realidad operativa, infraestructura y proyección. CIADÉ acompaña la decisión técnica con criterio consultivo."
        />
        <div className="sol__grid">
          {sols.map((s, i) => (
            <div key={i}
                 className={`sol__card ${active===i?"is-active":""}`}
                 onMouseEnter={()=>setActive(i)}>
              <div className="sol__h">
                <div className="sol__icon"><Icon name={s.icon} size={22}/></div>
                <span className="sol__tag">{s.tag}</span>
              </div>
              <h3 className="sol__title">{s.title}</h3>
              <p className="sol__sub">{s.sub}</p>
              <p className="sol__desc">{s.desc}</p>
              <ul className="sol__points">
                {s.points.map((p,j)=>(
                  <li key={j}><Icon name="check" size={14}/>{p}</li>
                ))}
              </ul>
              <a href="#" className="sol__link">Ver detalle de modalidad <Icon name="arrow" size={14}/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ MODULES ============
const Modules = () => {
  const mods = [
    { i: "invoice", t: "Facturación electrónica", d: "Emisión y autorización SRI integradas, sin pasos manuales ni dobles digitaciones." },
    { i: "box", t: "Inventarios", d: "Control multi-bodega, kardex en tiempo real y trazabilidad por lote o serie." },
    { i: "book", t: "Contabilidad", d: "Plan de cuentas configurable, conciliación bancaria y cierres asistidos." },
    { i: "users", t: "Nómina", d: "Roles, beneficios sociales, IESS y cumplimiento normativo ecuatoriano." },
    { i: "cart", t: "Punto de venta", d: "POS sincronizado con inventario y facturación, modo offline opcional." },
    { i: "chart", t: "Reportes BI", d: "Tableros ejecutivos, KPIs operativos y reportes financieros configurables." },
  ];
  return (
    <section className="mods section">
      <div className="container">
        <SectionHead
          eyebrow="Módulos"
          title="Un ecosistema modular conectado de extremo a extremo."
          sub="Cada módulo opera de forma independiente, pero conversa en tiempo real con el resto del sistema. Integre solo lo que su operación necesita hoy y escale después."
        />
        <div className="mods__grid">
          {mods.map((m,i)=>(
            <div key={i} className="mod">
              <div className="mod__no">M.{String(i+1).padStart(2,"0")}</div>
              <div className="mod__icon"><Icon name={m.i} size={22}/></div>
              <div className="mod__t">{m.t}</div>
              <p className="mod__d">{m.d}</p>
              <a className="mod__link" href="#">Detalle <Icon name="arrow" size={12}/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ DIFFERENTIATORS ============
const Differentiators = () => {
  const items = [
    ["workflow", "Procesos personalizables", "El ERP se adapta a su flujo operativo, no al revés. Cada implementación parte de un mapeo del proceso real."],
    ["users", "Multi-usuario concurrente", "Decenas de usuarios trabajando simultáneamente sin pérdida de rendimiento ni bloqueos por escritura."],
    ["target", "Implementación consultiva", "Diagnóstico, mapeo y migración guiados por un equipo técnico-funcional con experiencia sectorial."],
    ["layers", "Local, web o nube", "Tres modalidades sobre la misma base lógica. Migre entre modalidades sin reaprender el sistema."],
    ["shield", "Estabilidad operativa", "Arquitectura probada en operaciones medianas con altas exigencias de continuidad y volumen transaccional."],
    ["headset", "Soporte especializado", "Mesa de ayuda, soporte técnico y consultoría funcional disponibles en el canal que su operación requiera."],
  ];
  return (
    <section className="diff section section--dark">
      <div className="container">
        <SectionHead
          dark
          eyebrow="Diferenciales"
          title="Lo que distingue a un ERP implementado por CIADÉ."
          sub="No vendemos software. Implementamos soluciones tecnológicas adaptadas a la realidad operativa de cada empresa."
        />
        <div className="diff__grid">
          {items.map(([ic,t,d], i) => (
            <div key={i} className="diff__item">
              <div className="diff__icon"><Icon name={ic} size={20}/></div>
              <div className="diff__t">{t}</div>
              <p className="diff__d">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ INDUSTRIES ============
const Industries = () => {
  const [active, setActive] = useState(0);
  const inds = [
    { i: "factory", t: "Empresas medianas", d: "Operaciones multi-área que necesitan integrar facturación, inventario, contabilidad y gestión bajo un mismo sistema.",
      points: ["Centralización multi-departamental","Trazabilidad de orden a cobro","Reportería ejecutiva consolidada","Control de costos operativos"]},
    { i: "calculator", t: "Contadores y firmas contables", d: "Profesionales que administran múltiples empresas y necesitan centralizar clientes, automatizar procesos y escalar la operación.",
      points: ["Multi-empresa desde un único panel","Procesos contables automatizados","Cierres mensuales asistidos","Cumplimiento tributario al día"]},
    { i: "stethoscope", t: "Clínicas y salud", d: "Centros que requieren control administrativo, financiero y de inventario de insumos médicos con cumplimiento sectorial.",
      points: ["Control de insumos críticos","Facturación de servicios","Convenios y aseguradoras","Reportes regulatorios"]},
    { i: "cart", t: "Retail y comercio", d: "Cadenas y comercios con punto de venta, múltiples sucursales y necesidad de sincronización en tiempo real.",
      points: ["POS multi-sucursal","Inventario en línea","Promociones y precios","Cierre de caja diario"]},
    { i: "truck", t: "Importadoras y distribución", d: "Empresas con costeo de importación, logística distribuida y control multi-bodega en operación crítica.",
      points: ["Costeo de importación","Multi-moneda y tipo de cambio","Bodegas distribuidas","Control de despachos"]},
  ];
  const a = inds[active];
  return (
    <section className="ind section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Industrias"
          title="Implementaciones especializadas por sector."
          sub="Cada sector tiene su propio flujo, su propio cumplimiento y sus propios cuellos de botella. CIADÉ adapta FENIX a la realidad de cada uno."
        />
        <div className="ind__layout">
          <div className="ind__list">
            {inds.map((s, i) => (
              <button key={i}
                      className={`ind__btn ${active===i?"is-active":""}`}
                      onClick={()=>setActive(i)}>
                <Icon name={s.i} size={18}/>
                <span>{s.t}</span>
                <Icon name="chevronRight" size={14} className="ind__btn-arr"/>
              </button>
            ))}
          </div>
          <div className="ind__panel">
            <div className="ind__panel-h">
              <div className="ind__panel-icon"><Icon name={a.i} size={26}/></div>
              <div>
                <div className="ind__panel-eye">Implementación CIADÉ</div>
                <div className="ind__panel-t">{a.t}</div>
              </div>
            </div>
            <p className="ind__panel-d">{a.d}</p>
            <div className="ind__panel-grid">
              {a.points.map((p,i)=>(
                <div key={i} className="ind__pt"><Icon name="check" size={14}/>{p}</div>
              ))}
            </div>
            <div className="ind__panel-foot">
              <div className="ind__panel-meta">
                <div><span className="mono">CASOS</span> <b>+24</b></div>
                <div><span className="mono">SECTOR</span> <b>{a.t.split(" ")[0]}</b></div>
              </div>
              <button className="btn btn--primary">Ver casos del sector <Icon name="arrow" size={14}/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ PLANS ============
const Plans = () => {
  const [annual, setAnnual] = useState(true);
  const plans = [
    { name: "Starter", tag: "Empresas pequeñas iniciando con ERP",
      m: 240, a: 199,
      pts: ["Hasta 5 usuarios concurrentes","Facturación electrónica","Inventarios y contabilidad básica","Soporte estándar (8x5)","Implementación remota guiada"],
      cta: "Cotizar Starter", featured: false },
    { name: "Business", tag: "Empresas medianas en consolidación",
      m: 580, a: 489,
      pts: ["Hasta 20 usuarios concurrentes","Todos los módulos núcleo","Reportes BI y dashboards","Soporte prioritario (12x6)","Implementación consultiva on-site","Personalizaciones incluidas"],
      cta: "Cotizar Business", featured: true },
    { name: "Enterprise", tag: "Operaciones críticas y multi-sucursal",
      m: null, a: null,
      pts: ["Usuarios concurrentes ilimitados","Todos los módulos + integraciones","Multi-empresa y multi-bodega","Soporte 24/7 dedicado","Consultor de cuenta asignado","SLA enterprise"],
      cta: "Solicitar propuesta", featured: false },
  ];
  return (
    <section className="plans section">
      <div className="container">
        <SectionHead
          eyebrow="Planes y modalidades"
          title="Precios orientativos. Implementación a medida."
          sub="Cada empresa es distinta. Estos rangos son una referencia inicial; el alcance final se define tras una sesión de diagnóstico sin costo."
        />
        <div className="plans__toggle">
          <button className={`plans__tg ${!annual?"is-on":""}`} onClick={()=>setAnnual(false)}>Mensual</button>
          <button className={`plans__tg ${annual?"is-on":""}`} onClick={()=>setAnnual(true)}>Anual <span className="plans__save">−15%</span></button>
        </div>
        <div className="plans__grid">
          {plans.map((p,i)=>(
            <div key={i} className={`plan ${p.featured?"is-feat":""}`}>
              {p.featured && <div className="plan__ribbon">Recomendado</div>}
              <div className="plan__h">
                <div className="plan__name">{p.name}</div>
                <div className="plan__tag">{p.tag}</div>
              </div>
              <div className="plan__price">
                {p.m === null ? (
                  <div className="plan__custom">A medida</div>
                ) : (
                  <>
                    <span className="plan__cur">USD</span>
                    <span className="plan__amt">{annual ? p.a : p.m}</span>
                    <span className="plan__per">/ mes</span>
                  </>
                )}
                <div className="plan__note">
                  {p.m===null ? "Cotización personalizada según alcance" : annual ? "Facturado anualmente · IVA no incluido" : "Facturación mensual · IVA no incluido"}
                </div>
              </div>
              <ul className="plan__pts">
                {p.pts.map((t,j)=>(<li key={j}><Icon name="check" size={14}/>{t}</li>))}
              </ul>
              <button className={`btn ${p.featured?"btn--primary":"btn--outline"} btn--block`}>{p.cta}</button>
            </div>
          ))}
        </div>
        <div className="plans__foot">
          <Icon name="shield" size={16}/>
          Todos los planes incluyen consultoría inicial, capacitación y soporte. Sin permanencia oculta. Migración asistida desde su sistema actual.
        </div>
      </div>
    </section>
  );
};

// ============ CLIENTS ============
const Clients = () => {
  const logos = [
    "GRUPO ANDINA","TECNIMAX","COMERCIAL EL PACÍFICO","NUTRISALUD","DISTRIBUIDORA MZ",
    "INDUSTRIAS DEL NORTE","CONSORCIO QUITO","HACIENDA SAN JOSÉ","FARMA-CENTRO","TECNICOM",
  ];
  return (
    <section className="cli section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Clientes"
          title="Empresas que operan hoy con FENIX, implementado por CIADÉ."
          sub="Más de 100 organizaciones en Ecuador confían en nuestra implementación para sostener su operación diaria."
        />
        <div className="cli__wall">
          {logos.map((l,i)=>(
            <div key={i} className="cli__logo"><span className="mono">{l}</span></div>
          ))}
        </div>
        <div className="cli__sectors">
          {["Industria","Comercio","Salud","Servicios","Agroindustria","Distribución"].map((s,i)=>(
            <span key={i} className="cli__sector">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ SUPPORT / FAQ ============
const Support = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    ["¿Cuánto dura una implementación típica?", "Entre 6 y 14 semanas según tamaño de la empresa, módulos y nivel de personalización. La fase de diagnóstico es siempre el primer paso y no compromete la contratación."],
    ["¿Puedo migrar mis datos desde otro sistema?", "Sí. CIADÉ provee migración asistida desde sistemas contables, hojas de cálculo y ERPs anteriores. La migración se valida con la operación antes del go-live."],
    ["¿Qué pasa si necesito personalizaciones?", "FENIX está diseñado para ser adaptable. Las personalizaciones se cotizan por alcance y forman parte del plan Business y Enterprise sin costos adicionales."],
    ["¿El soporte está incluido?", "Todos los planes incluyen soporte. La cobertura, los canales y el SLA varían según el plan: estándar 8x5, prioritario 12x6 o dedicado 24/7."],
    ["¿Puedo cambiar de modalidad después?", "Sí. Los datos viajan entre las tres modalidades (Local, Web, Cloud). Es común iniciar Local y migrar a Cloud cuando la operación se distribuye."],
  ];
  return (
    <section className="sup section">
      <div className="container">
        <SectionHead
          eyebrow="Soporte"
          title="Acompañamiento técnico continuo, no atención post-venta."
          sub="Mesa de ayuda, monitoreo y consultoría funcional siempre disponibles para sostener la operación."
        />
        <div className="sup__grid">
          <div className="sup__chans">
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="headset" size={18}/> Mesa de ayuda</div>
              <div className="sup__chan-v">Lun – Vie · 08h00 – 18h00</div>
              <div className="sup__chan-d">Atención funcional y técnica de primer nivel para todos los planes activos.</div>
            </div>
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="activity" size={18}/> Monitoreo de plataforma</div>
              <div className="sup__chan-v">24 / 7 · Status disponible</div>
              <div className="sup__chan-d">Disponibilidad y desempeño verificable en tiempo real para clientes Cloud y Web.</div>
            </div>
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="shield" size={18}/> Soporte enterprise</div>
              <div className="sup__chan-v">Dedicado · SLA enterprise</div>
              <div className="sup__chan-d">Consultor de cuenta, escalamiento prioritario y planes de continuidad operativa.</div>
            </div>
            <div className="sup__status">
              <div className="sup__status-dot"></div>
              <div>
                <div className="sup__status-t">Plataforma operativa</div>
                <div className="sup__status-s">Última verificación · hace 2 min</div>
              </div>
              <div className="sup__status-meta mono">99.98% · 90d</div>
            </div>
          </div>

          <div className="faq">
            {faqs.map((f, i) => (
              <div key={i} className={`faq__row ${open===i?"is-open":""}`}>
                <button className="faq__q" onClick={()=>setOpen(open===i?-1:i)}>
                  <span>{f[0]}</span>
                  <Icon name={open===i?"minus":"plus"} size={16}/>
                </button>
                <div className="faq__a"><p>{f[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ FINAL CTA ============
const FinalCTA = () => (
  <section className="cta section">
    <div className="container">
      <div className="cta__box">
        <div className="cta__copy">
          <div className="eyebrow eyebrow--dark"><span className="eyebrow__dot eyebrow__dot--light"/>Próximo paso</div>
          <h2 className="cta__h">Comencemos por entender su operación.</h2>
          <p className="cta__s">Una sesión de diagnóstico de 45 minutos sin costo, con un consultor especializado. Salga con un mapa claro del alcance, plazos y modalidad recomendada.</p>
          <div className="cta__ctas">
            <button className="btn btn--primary btn--lg">Agendar demo <Icon name="arrow" size={16}/></button>
            <button className="btn btn--outline-light btn--lg">Solicitar cotización</button>
          </div>
        </div>
        <div className="cta__side">
          <div className="cta__list">
            {[
              ["Diagnóstico operativo", "Mapeo del flujo real"],
              ["Demo guiada", "Recorrido aplicado a su sector"],
              ["Propuesta cerrada", "Alcance, plazos y costos claros"],
              ["Equipo asignado", "Consultor + técnico desde día uno"],
            ].map(([t,d],i)=>(
              <div key={i} className="cta__row">
                <div className="cta__num mono">0{i+1}</div>
                <div>
                  <div className="cta__t">{t}</div>
                  <div className="cta__d">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============ FOOTER ============
const Footer = () => (
  <footer className="ft">
    <div className="container ft__inner">
      <div className="ft__brand">
        <div className="ft__brand-r">
          <img src="assets/ciade-logo.png" alt="CIADE" className="ft__logo"/>
          <div>
            <div className="ft__name">CIADE Consulting S.A.</div>
            <div className="ft__sub">Canal oficial de distribución FENIX · Ecuador</div>
          </div>
        </div>
        <p className="ft__desc">Consultora tecnológica especializada en consultoría, implementación y soporte de soluciones ERP FENIX para empresas medianas y firmas contables.</p>
        <div className="ft__contact">
          <div><Icon name="phone" size={14}/> +593 (2) 256 0000</div>
          <div><Icon name="mail" size={14}/> contacto@ciadeconsulting.ec</div>
          <div><Icon name="pin" size={14}/> Quito · Guayaquil · Cuenca · Manta · Ambato · Loja</div>
        </div>
      </div>

      <div className="ft__cols">
        {[
          ["Soluciones", ["FENIX ERP Local","FENIX Web","FENIX Cloud","Integraciones","Comparativa"]],
          ["Servicios", ["Consultoría","Implementación","Personalización","Capacitación","Soporte técnico"]],
          ["Industrias", ["Empresas medianas","Contadores","Clínicas","Retail","Importadoras"]],
          ["Compañía", ["Nosotros","Clientes","Casos de éxito","Contacto","Trabaje con nosotros"]],
        ].map(([h, items], i) => (
          <div key={i} className="ft__col">
            <div className="ft__h">{h}</div>
            <ul>{items.map((it,j)=>(<li key={j}><a href="#">{it}</a></li>))}</ul>
          </div>
        ))}
      </div>
    </div>
    <div className="ft__bar">
      <div className="container ft__bar-i">
        <div>© {new Date().getFullYear()} CIADE Consulting S.A. · Todos los derechos reservados.</div>
        <div className="ft__legal">
          <a href="#">Términos</a><span/><a href="#">Privacidad</a><span/><a href="#">Política de soporte</a>
        </div>
      </div>
    </div>
  </footer>
);

// ============ HELPERS ============
const SectionHead = ({ eyebrow, title, sub, dark }) => (
  <div className={`secthead ${dark?"is-dark":""}`}>
    <div className={`eyebrow ${dark?"":"eyebrow--dark"}`}>
      <span className={`eyebrow__dot ${dark?"eyebrow__dot--light":""}`}/>{eyebrow}
    </div>
    <h2 className="secthead__h">{title}</h2>
    {sub && <p className="secthead__s">{sub}</p>}
  </div>
);

// ============ TWEAKS ============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "teal",
  "density": "comfortable",
  "heroVariant": "dashboard",
  "showRibbon": true
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, ()=>{}];

  useEffect(() => {
    const root = document.documentElement;
    const accents = {
      teal: { teal: "#1F8B7E", tealDark: "#0F6E62", tealLight: "#E8F4F2" },
      navy: { teal: "#3D6FB3", tealDark: "#234A85", tealLight: "#E9EFF8" },
      copper: { teal: "#B26A3D", tealDark: "#8A4F2B", tealLight: "#F6ECE3" },
    };
    const a = accents[tweaks.accent] || accents.teal;
    root.style.setProperty("--teal", a.teal);
    root.style.setProperty("--teal-d", a.tealDark);
    root.style.setProperty("--teal-l", a.tealLight);
    root.dataset.density = tweaks.density;
  }, [tweaks.accent, tweaks.density]);

  const TP = window.TweaksPanel;
  const Sec = window.TweakSection;
  const Rad = window.TweakRadio;
  const Tog = window.TweakToggle;

  return (
    <>
      <Header tweaks={tweaks}/>
      <main>
        <Hero/>
        <Trust/>
        <ProblemSolution/>
        <Solutions/>
        <Modules/>
        <Differentiators/>
        <Industries/>
        <Plans/>
        <Clients/>
        <Support/>
        <FinalCTA/>
      </main>
      <Footer/>

      {TP && (
        <TP title="Tweaks">
          <Sec title="Acento de marca">
            <Rad value={tweaks.accent} onChange={v=>setTweak("accent", v)}
                 options={[{value:"teal",label:"Teal"},{value:"navy",label:"Azul"},{value:"copper",label:"Cobre"}]}/>
          </Sec>
          <Sec title="Densidad">
            <Rad value={tweaks.density} onChange={v=>setTweak("density", v)}
                 options={[{value:"comfortable",label:"Cómodo"},{value:"compact",label:"Compacto"}]}/>
          </Sec>
        </TP>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
