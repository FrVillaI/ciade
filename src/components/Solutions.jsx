import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const sols = [
  {
    tag: 'ON-PREMISE',
    title: 'FENIX ERP Local',
    sub: 'Para empresas que necesitan control total e infraestructura propia.',
    desc: 'Sistema instalado en servidores del cliente. Máxima estabilidad operativa y autonomía. Ideal para operaciones críticas donde la disponibilidad y la soberanía del dato son prioridad.',
    icon: 'server',
    points: ['Instalación en servidor propio', 'Datos bajo control interno', 'Despliegue offline disponible', 'Multi-usuario concurrente'],
  },
  {
    tag: 'WEB',
    title: 'FENIX Web',
    sub: 'Para empresas que necesitan flexibilidad sin atarse a infraestructura local.',
    desc: 'Acceso desde cualquier lugar mediante navegador. Centraliza la operación entre sucursales, contadores externos y gerencia móvil con la misma estabilidad de la versión local.',
    icon: 'globe',
    points: ['Acceso multi-sucursal', 'Sin instalaciones por equipo', 'Backups gestionados', 'Acceso por roles'],
  },
  {
    tag: 'CLOUD',
    title: 'FENIX Cloud',
    sub: 'Infraestructura ERP en la nube para operaciones distribuidas y escalables.',
    desc: 'Para empresas con múltiples usuarios, alta concurrencia y crecimiento proyectado. Escala sin reinversión en infraestructura, con cobertura de seguridad y monitoreo continuo.',
    icon: 'cloud',
    points: ['Escalable bajo demanda', 'Alta disponibilidad', 'Monitoreo 24/7', 'Pago por uso predecible'],
  },
]

const Solutions = () => {
  const [active, setActive] = useState(1)
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
            <div key={i} className={`sol__card ${active === i ? 'is-active' : ''}`} onMouseEnter={() => setActive(i)}>
              <div className="sol__h">
                <div className="sol__icon"><Icon name={s.icon} size={22} /></div>
                <span className="sol__tag">{s.tag}</span>
              </div>
              <h3 className="sol__title">{s.title}</h3>
              <p className="sol__sub">{s.sub}</p>
              <p className="sol__desc">{s.desc}</p>
              <ul className="sol__points">
                {s.points.map((p, j) => (
                  <li key={j}><Icon name="check" size={14} />{p}</li>
                ))}
              </ul>
              <a href="#" className="sol__link">Ver detalle de modalidad <Icon name="arrow" size={14} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
