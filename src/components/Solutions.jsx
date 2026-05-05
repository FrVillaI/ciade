import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const sols = [
  {
    tag: 'COMERCIAL CONTABLE',
    title: 'FENIX Comercial Contable',
    sub: 'ERP completo para empresas que necesitan control total de su operación administrativa.',
    desc: 'Solución instalada en servidores del cliente que integra facturación electrónica, inventarios, contabilidad, nómina y punto de venta. Máxima estabilidad y soberanía del dato para operaciones críticas.',
    icon: 'server',
    points: ['Facturación electrónica SRI integrada', 'Control multi-bodega y kardex', 'Contabilidad y cierres asistidos', 'Nómina y beneficios sociales'],
  },
  {
    tag: 'CONTADOR',
    title: 'FENIX Contador',
    sub: 'Para firmas contables y profesionales que gestionan múltiples empresas.',
    desc: 'Panel centralizado para administrar varios clientes desde un solo acceso. Automatiza procesos contables, declaraciones tributarias y cierres mensuales con cumplimiento normativo permanente.',
    icon: 'calculator',
    points: ['Multi-empresa desde un solo panel', 'Procesos contables automatizados', 'Cierres mensuales asistidos', 'Cumplimiento tributario SRI al día'],
  },
  {
    tag: 'MOVILIDAD & POS',
    title: 'FENIX Zeus Mobile · Maki POS',
    sub: 'Movilidad y punto de venta para operaciones en campo y mostrador.',
    desc: 'FENIX Zeus Mobile lleva el ERP al dispositivo del vendedor en campo. Maki POS integra punto de venta físico con inventario y facturación en tiempo real, con modo offline opcional.',
    icon: 'cart',
    points: ['Venta y facturación desde móvil', 'POS sincronizado con inventario', 'Modo offline disponible', 'MAKI Delivery y Catálogo Virtual'],
  },
]

const Solutions = () => {
  const [active, setActive] = useState(1)
  return (
    <section id="soluciones" className="sol section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Soluciones"
          title="El ecosistema FENIX completo, implementado por CIADÉ."
          sub="Desde el ERP de escritorio hasta movilidad y punto de venta. Cada producto FENIX integrado, configurado y soportado por nuestro equipo técnico-funcional."
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
