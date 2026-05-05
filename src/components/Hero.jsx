import Icon from './Icon.jsx'
import DashboardMock from './DashboardMock.jsx'

const Hero = () => (
  <section className="hero">
    <div className="container hero__inner">
      <div className="hero__copy">
        <div className="eyebrow">
          <span className="eyebrow__dot"></span>
          Canal oficial de distribución FENIX · Ecuador
        </div>
        <h1 className="hero__h1">
          Implementamos soluciones <span className="hi">ERP FENIX</span> para empresas que necesitan más control, estabilidad y eficiencia operativa.
        </h1>
        <p className="hero__sub">
          Consultoría, implementación y soporte especializado para automatizar procesos contables, administrativos y comerciales en empresas medianas y firmas contables.
        </p>
        <div className="hero__ctas">
          <button className="btn btn--primary btn--lg">Agendar demo <Icon name="arrow" size={16} /></button>
          <button className="btn btn--ghost btn--lg">Hablar con un asesor</button>
        </div>
        <div className="hero__assure">
          <div className="hero__assure-item"><Icon name="check" size={14} /> Sin tarjeta requerida</div>
          <div className="hero__assure-item"><Icon name="check" size={14} /> Diagnóstico inicial gratuito</div>
          <div className="hero__assure-item"><Icon name="check" size={14} /> Respuesta en 24 h</div>
        </div>
      </div>
      <DashboardMock />
    </div>
    <div className="hero__bg" aria-hidden="true"></div>
  </section>
)

export default Hero
