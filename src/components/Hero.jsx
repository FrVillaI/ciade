import Icon from './Icon.jsx'
import DashboardMock from './DashboardMock.jsx'

const WA_URL = 'https://wa.me/593988015407?text=Hola%2C%20estoy%20interesado%20en%20las%20soluciones%20FENIX%20ERP%20de%20CIADE%20Consulting.%20%C2%BFMe%20pueden%20asesorar%3F'

const Hero = ({ openModal }) => (
  <section id="inicio" className="hero">
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
          <button className="btn btn--primary btn--lg" onClick={() => openModal()}>Agendar demo <Icon name="arrow" size={16} /></button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">Hablar con un asesor</a>
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
