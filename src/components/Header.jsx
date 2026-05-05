import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'

const nav = [
  { id: 'soluciones', label: 'Soluciones', items: [
    { t: 'FENIX ERP Local', d: 'Instalación on-premise' },
    { t: 'FENIX Web', d: 'Acceso desde cualquier lugar' },
    { t: 'FENIX Cloud', d: 'Infraestructura escalable' },
  ]},
  { id: 'industrias', label: 'Industrias', items: [
    { t: 'Empresas medianas', d: 'Operación multi-área' },
    { t: 'Contadores', d: 'Multi-empresa' },
    { t: 'Clínicas y salud', d: 'Cumplimiento sectorial' },
    { t: 'Retail y comercio', d: 'Punto de venta integrado' },
    { t: 'Importadoras', d: 'Costeo de importación' },
  ]},
  { id: 'servicios', label: 'Servicios', items: [
    { t: 'Consultoría', d: 'Diagnóstico operativo' },
    { t: 'Implementación', d: 'Despliegue y migración' },
    { t: 'Personalización', d: 'Adaptación al flujo' },
    { t: 'Capacitación', d: 'Equipos productivos' },
    { t: 'Soporte', d: 'Atención especializada' },
  ]},
  { id: 'planes', label: 'Planes' },
  { id: 'soporte', label: 'Soporte' },
  { id: 'nosotros', label: 'Nosotros' },
]

const megaDescs = {
  soluciones: 'Tres modalidades de despliegue para adaptarse a la realidad operativa y de infraestructura de cada empresa.',
  industrias: 'Implementaciones especializadas según el flujo operativo y cumplimiento de cada sector.',
  servicios: 'Acompañamiento consultivo de extremo a extremo, desde el diagnóstico hasta la operación estable.',
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeNav = nav.find(n => n.id === megaOpen)

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`} onMouseLeave={() => setMegaOpen(null)}>
      <div className="hdr__bar">
        <a href="#" className="hdr__brand">
          <img src="/ciade-logo.png" alt="CIADE" className="hdr__logo" />
          <div className="hdr__brandtxt">
            <span className="hdr__name">CIADE</span>
            <span className="hdr__sub">Consulting S.A.</span>
          </div>
        </a>

        <nav className="hdr__nav">
          {nav.map(n => (
            <div key={n.id} className="hdr__navitem" onMouseEnter={() => n.items && setMegaOpen(n.id)}>
              <button className={`hdr__navbtn ${megaOpen === n.id ? 'is-open' : ''}`}>
                {n.label}
                {n.items && <Icon name="chevron" size={14} />}
              </button>
            </div>
          ))}
        </nav>

        <div className="hdr__cta">
          <button className="btn btn--ghost"><Icon name="phone" size={14} /> Hablar con un asesor</button>
          <button className="btn btn--primary">Agendar demo <Icon name="arrow" size={14} /></button>
        </div>
      </div>

      {megaOpen && activeNav?.items && (
        <div className="mega" onMouseLeave={() => setMegaOpen(null)}>
          <div className="mega__inner">
            <div className="mega__col mega__col--label">
              <div className="mega__eyebrow">{activeNav.label}</div>
              <p className="mega__desc">{megaDescs[megaOpen]}</p>
            </div>
            <div className="mega__grid">
              {activeNav.items.map((it, i) => (
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
  )
}

export default Header
