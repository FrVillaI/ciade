import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const nav = [
  { id: 'soluciones', label: 'Soluciones', items: [
    { t: 'FENIX ERP Local', d: 'Instalación on-premise', to: '/soluciones/local' },
    { t: 'FENIX Web', d: 'Acceso desde cualquier lugar', to: '/soluciones/web' },
    { t: 'FENIX Cloud', d: 'Infraestructura escalable', to: '/soluciones/cloud' },
  ]},
  { id: 'industrias', label: 'Industrias', items: [
    { t: 'Empresas medianas', d: 'Operación multi-área', to: null },
    { t: 'Contadores', d: 'Multi-empresa', to: null },
    { t: 'Clínicas y salud', d: 'Cumplimiento sectorial', to: null },
    { t: 'Retail y comercio', d: 'Punto de venta integrado', to: null },
    { t: 'Importadoras', d: 'Costeo de importación', to: null },
  ]},
  { id: 'servicios', label: 'Servicios', items: [
    { t: 'Consultoría', d: 'Diagnóstico operativo', to: null },
    { t: 'Implementación', d: 'Despliegue y migración', to: null },
    { t: 'Personalización', d: 'Adaptación al flujo', to: null },
    { t: 'Capacitación', d: 'Equipos productivos', to: null },
    { t: 'Soporte', d: 'Atención especializada', to: '/soporte' },
  ]},
  { id: 'planes', label: 'Planes', to: '/planes' },
  { id: 'soporte', label: 'Soporte', to: '/soporte' },
  { id: 'nosotros', label: 'Nosotros', to: '/nosotros' },
]

const megaDescs = {
  soluciones: 'Tres modalidades de despliegue para adaptarse a la realidad operativa y de infraestructura de cada empresa.',
  industrias: 'Implementaciones especializadas según el flujo operativo y cumplimiento de cada sector.',
  servicios: 'Acompañamiento consultivo de extremo a extremo, desde el diagnóstico hasta la operación estable.',
}

const WA_URL = 'https://wa.me/593988015407?text=Hola%2C%20estoy%20interesado%20en%20las%20soluciones%20FENIX%20ERP%20de%20CIADE%20Consulting.%20%C2%BFMe%20pueden%20asesorar%3F'

const Header = ({ openModal }) => {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const closeMega = () => setMegaOpen(null)
  const activeNav = nav.find(n => n.id === megaOpen)

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`} onMouseLeave={closeMega}>
      <div className="hdr__bar">
        <Link to="/" className="hdr__brand" onClick={closeMenu}>
          <img src="/ciade-logo.png" alt="CIADE" className="hdr__logo" />
          <div className="hdr__brandtxt">
            <span className="hdr__name">CIADE</span>
            <span className="hdr__sub">Consulting S.A.</span>
          </div>
        </Link>

        <nav className="hdr__nav">
          {nav.map(n => (
            <div key={n.id} className="hdr__navitem" onMouseEnter={() => n.items && setMegaOpen(n.id)}>
              {n.items ? (
                <button className={`hdr__navbtn ${megaOpen === n.id ? 'is-open' : ''}`}>
                  {n.label} <Icon name="chevron" size={14} />
                </button>
              ) : (
                <Link to={n.to} className="hdr__navbtn" onClick={closeMega}>{n.label}</Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hdr__cta">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            <Icon name="phone" size={14} /> Hablar con un asesor
          </a>
          <button className="btn btn--primary" onClick={() => openModal()}>
            Agendar demo <Icon name="arrow" size={14} />
          </button>
        </div>

        <button
          className="hdr__ham"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {/* Mega-menú — solo desktop */}
      {megaOpen && activeNav?.items && (
        <div className="mega" onMouseLeave={closeMega}>
          <div className="mega__inner">
            <div className="mega__col mega__col--label">
              <div className="mega__eyebrow">{activeNav.label}</div>
              <p className="mega__desc">{megaDescs[megaOpen]}</p>
            </div>
            <div className="mega__grid">
              {activeNav.items.map((it, i) => it.to ? (
                <Link key={i} className="mega__item" to={it.to} onClick={closeMega}>
                  <div className="mega__t">{it.t}</div>
                  <div className="mega__d">{it.d}</div>
                  <Icon name="arrow" size={14} className="mega__arr" />
                </Link>
              ) : (
                <span key={i} className="mega__item mega__item--disabled">
                  <div className="mega__t">{it.t}</div>
                  <div className="mega__d">{it.d}</div>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div className="hdr__overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Drawer mobile */}
      <div className={`hdr__drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="hdr__drawer-head">
          <Link to="/" className="hdr__brand" onClick={closeMenu}>
            <img src="/ciade-logo.png" alt="CIADE" className="hdr__logo" />
            <div className="hdr__brandtxt">
              <span className="hdr__name">CIADE</span>
              <span className="hdr__sub">Consulting S.A.</span>
            </div>
          </Link>
          <button className="hdr__drawer-close" onClick={closeMenu} aria-label="Cerrar menú">
            <Icon name="close" size={18} />
          </button>
        </div>

        <nav className="hdr__drawer-nav">
          {nav.map(n => (
            <div key={n.id} className="hdr__drawer-item">
              {n.items ? (
                <>
                  <button
                    className={`hdr__drawer-btn ${mobileExpanded === n.id ? 'is-open' : ''}`}
                    onClick={() => setMobileExpanded(mobileExpanded === n.id ? null : n.id)}
                  >
                    {n.label} <Icon name="chevron" size={14} />
                  </button>
                  {mobileExpanded === n.id && (
                    <div className="hdr__drawer-sub">
                      {n.items.map((it, i) => it.to ? (
                        <Link key={i} to={it.to} className="hdr__drawer-sublink" onClick={closeMenu}>{it.t}</Link>
                      ) : (
                        <span key={i} className="hdr__drawer-sublink hdr__drawer-sublink--dim">{it.t}</span>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={n.to} className="hdr__drawer-btn" onClick={closeMenu}>{n.label}</Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hdr__drawer-cta">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
            <Icon name="phone" size={14} /> Hablar con un asesor
          </a>
          <button className="btn btn--primary btn--block" onClick={() => { openModal(); closeMenu(); }}>
            Agendar demo <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
