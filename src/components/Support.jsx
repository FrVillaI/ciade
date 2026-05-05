import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const faqs = [
  ['¿Cuánto dura una implementación típica?', 'Entre 6 y 14 semanas según tamaño de la empresa, módulos y nivel de personalización. La fase de diagnóstico es siempre el primer paso y no compromete la contratación.'],
  ['¿Puedo migrar mis datos desde otro sistema?', 'Sí. CIADÉ provee migración asistida desde sistemas contables, hojas de cálculo y ERPs anteriores. La migración se valida con la operación antes del go-live.'],
  ['¿Qué pasa si necesito personalizaciones?', 'FENIX está diseñado para ser adaptable. Las personalizaciones se cotizan por alcance y forman parte del plan Business y Enterprise sin costos adicionales.'],
  ['¿El soporte está incluido?', 'Todos los planes incluyen soporte. La cobertura, los canales y el SLA varían según el plan: estándar 8x5, prioritario 12x6 o dedicado 24/7.'],
  ['¿Puedo cambiar de modalidad después?', 'Sí. Los datos viajan entre las tres modalidades (Local, Web, Cloud). Es común iniciar Local y migrar a Cloud cuando la operación se distribuye.'],
]

const Support = () => {
  const [open, setOpen] = useState(0)
  return (
    <section id="soporte" className="sup section">
      <div className="container">
        <SectionHead
          eyebrow="Soporte"
          title="Acompañamiento técnico continuo, no atención post-venta."
          sub="Mesa de ayuda, monitoreo y consultoría funcional siempre disponibles para sostener la operación."
        />
        <div className="sup__grid">
          <div className="sup__chans">
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="headset" size={18} /> Mesa de ayuda</div>
              <div className="sup__chan-v">Lun – Vie · 08h00 – 18h00</div>
              <div className="sup__chan-d">Atención funcional y técnica de primer nivel para todos los planes activos.</div>
            </div>
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="activity" size={18} /> Monitoreo de plataforma</div>
              <div className="sup__chan-v">24 / 7 · Status disponible</div>
              <div className="sup__chan-d">Disponibilidad y desempeño verificable en tiempo real para clientes Cloud y Web.</div>
            </div>
            <div className="sup__chan">
              <div className="sup__chan-h"><Icon name="shield" size={18} /> Soporte enterprise</div>
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
              <div key={i} className={`faq__row ${open === i ? 'is-open' : ''}`}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f[0]}</span>
                  <Icon name={open === i ? 'minus' : 'plus'} size={16} />
                </button>
                <div className="faq__a"><p>{f[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
