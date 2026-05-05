import Trust from '../components/Trust.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Icon from '../components/Icon.jsx'

const NosotrosPage = ({ openModal }) => (
  <>
    <section className="page-hero section">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow__dot" />Sobre CIADE</div>
        <h1 className="page-hero__h">Canal oficial de distribución FENIX en Ecuador desde 1995.</h1>
        <p className="page-hero__sub">
          Consultora tecnológica especializada en implementación, personalización y soporte de soluciones ERP FENIX para empresas medianas y firmas contables en todo el país.
        </p>
        <div className="page-hero__contact">
          <span><Icon name="phone" size={14} /> +593 (2) 256 0000</span>
          <span><Icon name="mail" size={14} /> contacto@ciadeconsulting.ec</span>
          <span><Icon name="pin" size={14} /> Quito · Guayaquil · Cuenca · Manta · Ambato · Loja</span>
        </div>
      </div>
    </section>
    <Trust />
    <FinalCTA openModal={openModal} />
  </>
)

export default NosotrosPage
