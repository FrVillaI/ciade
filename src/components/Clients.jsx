import SectionHead from './SectionHead.jsx'

const logos = [
  'CLÍNICA LATACUNGA', 'FUNDEL', 'LA PRADERA', 'ECUDENTAL',
]

const Clients = () => (
  <section className="cli section section--alt">
    <div className="container">
      <SectionHead
        eyebrow="Clientes"
        title="Empresas que operan hoy con FENIX, implementado por CIADÉ."
        sub="Más de 100 organizaciones en Ecuador confían en nuestra implementación para sostener su operación diaria."
      />
      <div className="cli__wall">
        {logos.map((l, i) => (
          <div key={i} className="cli__logo"><span className="mono">{l}</span></div>
        ))}
      </div>
      <div className="cli__sectors">
        {['Salud', 'Floricultura', 'Comercio', 'Logística', 'Gasolineras'].map((s, i) => (
          <span key={i} className="cli__sector">{s}</span>
        ))}
      </div>
    </div>
  </section>
)

export default Clients
