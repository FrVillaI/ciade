const Trust = () => (
  <section className="trust">
    <div className="container trust__inner">
      <div className="trust__intro">
        <div className="eyebrow eyebrow--dark"><span className="eyebrow__dot eyebrow__dot--light" />Autoridad operativa</div>
        <h2 className="trust__h">Casi tres décadas implementando ERP en empresas reales del Ecuador.</h2>
      </div>
      <div className="trust__grid">
        {[
          ['29', 'años', 'de experiencia en consultoría e implementación ERP'],
          ['+100', 'empresas', 'operando hoy con FENIX en producción'],
          ['6', 'ciudades', 'con presencia, soporte y cobertura'],
          ['1', 'canal oficial', 'de distribución FENIX en Ecuador'],
        ].map(([n, u, d], i) => (
          <div key={i} className="trust__item">
            <div className="trust__num">{n}<span>{u}</span></div>
            <p className="trust__d">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Trust
