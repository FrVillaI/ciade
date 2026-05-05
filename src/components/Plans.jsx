import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const plans = [
  { name: 'Starter', tag: 'Empresas pequeñas iniciando con ERP',
    m: 240, a: 199, interest: 'Cotización – Plan Starter',
    pts: ['Hasta 5 usuarios concurrentes', 'Facturación electrónica', 'Inventarios y contabilidad básica', 'Soporte estándar (8x5)', 'Implementación remota guiada'],
    cta: 'Cotizar Starter', featured: false },
  { name: 'Business', tag: 'Empresas medianas en consolidación',
    m: 580, a: 489, interest: 'Cotización – Plan Business',
    pts: ['Hasta 20 usuarios concurrentes', 'Todos los módulos núcleo', 'Reportes BI y dashboards', 'Soporte prioritario (12x6)', 'Implementación consultiva on-site', 'Personalizaciones incluidas'],
    cta: 'Cotizar Business', featured: true },
  { name: 'Enterprise', tag: 'Operaciones críticas y multi-sucursal',
    m: null, a: null, interest: 'Propuesta Enterprise',
    pts: ['Usuarios concurrentes ilimitados', 'Todos los módulos + integraciones', 'Multi-empresa y multi-bodega', 'Soporte 24/7 dedicado', 'Consultor de cuenta asignado', 'SLA enterprise'],
    cta: 'Solicitar propuesta', featured: false },
]

const Plans = ({ openModal }) => {
  const [annual, setAnnual] = useState(true)
  return (
    <section id="planes" className="plans section">
      <div className="container">
        <SectionHead
          eyebrow="Planes y modalidades"
          title="Precios orientativos. Implementación a medida."
          sub="Cada empresa es distinta. Estos rangos son una referencia inicial; el alcance final se define tras una sesión de diagnóstico sin costo."
        />
        <div className="plans__toggle">
          <button className={`plans__tg ${!annual ? 'is-on' : ''}`} onClick={() => setAnnual(false)}>Mensual</button>
          <button className={`plans__tg ${annual ? 'is-on' : ''}`} onClick={() => setAnnual(true)}>Anual <span className="plans__save">−15%</span></button>
        </div>
        <div className="plans__grid">
          {plans.map((p, i) => (
            <div key={i} className={`plan ${p.featured ? 'is-feat' : ''}`}>
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
                  {p.m === null ? 'Cotización personalizada según alcance' : annual ? 'Facturado anualmente · IVA no incluido' : 'Facturación mensual · IVA no incluido'}
                </div>
              </div>
              <ul className="plan__pts">
                {p.pts.map((t, j) => (<li key={j}><Icon name="check" size={14} />{t}</li>))}
              </ul>
              <button className={`btn ${p.featured ? 'btn--primary' : 'btn--outline'} btn--block`} onClick={() => openModal(p.interest)}>{p.cta}</button>
            </div>
          ))}
        </div>
        <div className="plans__foot">
          <Icon name="shield" size={16} />
          Todos los planes incluyen consultoría inicial, capacitación y soporte. Sin permanencia oculta. Migración asistida desde su sistema actual.
        </div>
      </div>
    </section>
  )
}

export default Plans
