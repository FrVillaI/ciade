import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const items = [
  ['workflow', 'Procesos personalizables', 'El ERP se adapta a su flujo operativo, no al revés. Cada implementación parte de un mapeo del proceso real.'],
  ['users', 'Multi-usuario concurrente', 'Decenas de usuarios trabajando simultáneamente sin pérdida de rendimiento ni bloqueos por escritura.'],
  ['target', 'Implementación consultiva', 'Diagnóstico, mapeo y migración guiados por un equipo técnico-funcional con experiencia sectorial.'],
  ['layers', 'Local, web o nube', 'Tres modalidades sobre la misma base lógica. Migre entre modalidades sin reaprender el sistema.'],
  ['shield', 'Estabilidad operativa', 'Arquitectura probada en operaciones medianas con altas exigencias de continuidad y volumen transaccional.'],
  ['headset', 'Soporte especializado', 'Mesa de ayuda, soporte técnico y consultoría funcional disponibles en el canal que su operación requiera.'],
]

const Differentiators = () => (
  <section className="diff section section--dark">
    <div className="container">
      <SectionHead
        dark
        eyebrow="Diferenciales"
        title="Lo que distingue a un ERP implementado por CIADÉ."
        sub="No vendemos software. Implementamos soluciones tecnológicas adaptadas a la realidad operativa de cada empresa."
      />
      <div className="diff__grid">
        {items.map(([ic, t, d], i) => (
          <div key={i} className="diff__item">
            <div className="diff__icon"><Icon name={ic} size={20} /></div>
            <div className="diff__t">{t}</div>
            <p className="diff__d">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Differentiators
