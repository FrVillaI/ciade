import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const inds = [
  { i: 'activity', t: 'Gasolineras', d: 'Control integral de despacho de combustible, turnos de piso, inventario de lubricantes y cierre de caja integrado con facturación electrónica SRI.',
    points: ['Control de surtidores por turno', 'Cuadre de caja por isleño', 'Inventario de lubricantes y tienda', 'Facturación electrónica SRI'] },
  { i: 'layers', t: 'Florícolas', d: 'Gestión de producción por variedad y lote, control de costos de corte, exportación y nómina agrícola con cumplimiento IESS rural.',
    points: ['Producción y control de lotes', 'Costeo de exportación completo', 'Nómina agrícola e IESS rural', 'Trazabilidad por variedad y finca'] },
  { i: 'truck', t: 'Guías de Transporte', d: 'Emisión de guías de remisión autorizadas SRI, control de flota y liquidación de viajes con integración directa al módulo contable.',
    points: ['Emisión de guías SRI en línea', 'Control de rutas y flota', 'Liquidación automática de viajes', 'Integración con facturación y cobros'] },
  { i: 'box', t: 'Logística', d: 'Operaciones de bodega, recepción, despacho y distribución con trazabilidad completa por lote o serie en tiempo real.',
    points: ['Multi-bodega y multi-sucursal', 'Recepción y despacho asistidos', 'Trazabilidad por lote o serie', 'Reportería operativa en tiempo real'] },
  { i: 'globe', t: 'Importaciones', d: 'Costeo de importación completo, manejo de pólizas, operaciones en multi-moneda y seguimiento de pedidos al exterior.',
    points: ['Costeo de importación por ítem', 'Multi-moneda y tipo de cambio', 'Control de pólizas y aranceles', 'Integración con proveedores externos'] },
]

const Industries = () => {
  const [active, setActive] = useState(0)
  const a = inds[active]
  return (
    <section id="industrias" className="ind section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Verticales"
          title="FENIX adaptado a los sectores más exigentes del Ecuador."
          sub="Gasolineras, florícolas, transporte, logística e importaciones tienen flujos y cumplimientos propios. CIADÉ lleva implementaciones especializadas en cada uno."
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
