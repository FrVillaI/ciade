import Icon from './Icon.jsx'

const FinalCTA = ({ openModal }) => (
  <section className="cta section">
    <div className="container">
      <div className="cta__box">
        <div className="cta__copy">
          <div className="eyebrow eyebrow--dark"><span className="eyebrow__dot eyebrow__dot--light" />Próximo paso</div>
          <h2 className="cta__h">Comencemos por entender su operación.</h2>
          <p className="cta__s">Una sesión de diagnóstico de 45 minutos sin costo, con un consultor especializado. Salga con un mapa claro del alcance, plazos y modalidad recomendada.</p>
          <div className="cta__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => openModal()}>Agendar demo <Icon name="arrow" size={16} /></button>
            <button className="btn btn--outline-light btn--lg" onClick={() => openModal('Consulta general')}>Solicitar cotización</button>
          </div>
        </div>
        <div className="cta__side">
          <div className="cta__list">
            {[
              ['Diagnóstico operativo', 'Mapeo del flujo real'],
              ['Demo guiada', 'Recorrido aplicado a su sector'],
              ['Propuesta cerrada', 'Alcance, plazos y costos claros'],
              ['Equipo asignado', 'Consultor + técnico desde día uno'],
            ].map(([t, d], i) => (
              <div key={i} className="cta__row">
                <div className="cta__num mono">0{i + 1}</div>
                <div>
                  <div className="cta__t">{t}</div>
                  <div className="cta__d">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FinalCTA
