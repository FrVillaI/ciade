import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const inds = [
  { i: 'factory', t: 'Empresas medianas', d: 'Operaciones multi-área que necesitan integrar facturación, inventario, contabilidad y gestión bajo un mismo sistema.',
    points: ['Centralización multi-departamental', 'Trazabilidad de orden a cobro', 'Reportería ejecutiva consolidada', 'Control de costos operativos'] },
  { i: 'calculator', t: 'Contadores y firmas contables', d: 'Profesionales que administran múltiples empresas y necesitan centralizar clientes, automatizar procesos y escalar la operación.',
    points: ['Multi-empresa desde un único panel', 'Procesos contables automatizados', 'Cierres mensuales asistidos', 'Cumplimiento tributario al día'] },
  { i: 'stethoscope', t: 'Clínicas y salud', d: 'Centros que requieren control administrativo, financiero y de inventario de insumos médicos con cumplimiento sectorial.',
    points: ['Control de insumos críticos', 'Facturación de servicios', 'Convenios y aseguradoras', 'Reportes regulatorios'] },
  { i: 'cart', t: 'Retail y comercio', d: 'Cadenas y comercios con punto de venta, múltiples sucursales y necesidad de sincronización en tiempo real.',
    points: ['POS multi-sucursal', 'Inventario en línea', 'Promociones y precios', 'Cierre de caja diario'] },
  { i: 'truck', t: 'Importadoras y distribución', d: 'Empresas con costeo de importación, logística distribuida y control multi-bodega en operación crítica.',
    points: ['Costeo de importación', 'Multi-moneda y tipo de cambio', 'Bodegas distribuidas', 'Control de despachos'] },
]

const Industries = () => {
  const [active, setActive] = useState(0)
  const a = inds[active]
  return (
    <section id="industrias" className="ind section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Industrias"
          title="Implementaciones especializadas por sector."
          sub="Cada sector tiene su propio flujo, su propio cumplimiento y sus propios cuellos de botella. CIADÉ adapta FENIX a la realidad de cada uno."
        />
        <div className="ind__layout">
          <div className="ind__list">
            {inds.map((s, i) => (
              <button key={i} className={`ind__btn ${active === i ? 'is-active' : ''}`} onClick={() => setActive(i)}>
                <Icon name={s.i} size={18} />
                <span>{s.t}</span>
                <Icon name="chevronRight" size={14} className="ind__btn-arr" />
              </button>
            ))}
          </div>
          <div className="ind__panel">
            <div className="ind__panel-h">
              <div className="ind__panel-icon"><Icon name={a.i} size={26} /></div>
              <div>
                <div className="ind__panel-eye">Implementación CIADÉ</div>
                <div className="ind__panel-t">{a.t}</div>
              </div>
            </div>
            <p className="ind__panel-d">{a.d}</p>
            <div className="ind__panel-grid">
              {a.points.map((p, i) => (
                <div key={i} className="ind__pt"><Icon name="check" size={14} />{p}</div>
              ))}
            </div>
            <div className="ind__panel-foot">
              <div className="ind__panel-meta">
                <div><span className="mono">CASOS</span> <b>+24</b></div>
                <div><span className="mono">SECTOR</span> <b>{a.t.split(' ')[0]}</b></div>
              </div>
              <button className="btn btn--primary">Ver casos del sector <Icon name="arrow" size={14} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
