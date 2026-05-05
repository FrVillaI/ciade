import Icon from './Icon.jsx'

const Footer = () => (
  <footer className="ft">
    <div className="container ft__inner">
      <div className="ft__brand">
        <div className="ft__brand-r">
          <img src="/ciade-logo.png" alt="CIADE" className="ft__logo" />
          <div>
            <div className="ft__name">CIADE Consulting S.A.</div>
            <div className="ft__sub">Canal oficial de distribución FENIX · Ecuador</div>
          </div>
        </div>
        <p className="ft__desc">Consultora tecnológica especializada en consultoría, implementación y soporte de soluciones ERP FENIX para empresas medianas y firmas contables.</p>
        <div className="ft__contact">
          <div><Icon name="phone" size={14} /> +593 (2) 256 0000</div>
          <div><Icon name="mail" size={14} /> contacto@ciadeconsulting.ec</div>
          <div><Icon name="pin" size={14} /> Quito · Guayaquil · Cuenca · Manta · Ambato · Loja</div>
        </div>
      </div>

      <div className="ft__cols">
        {[
          ['Soluciones', ['FENIX ERP Local', 'FENIX Web', 'FENIX Cloud', 'Integraciones', 'Comparativa']],
          ['Servicios', ['Consultoría', 'Implementación', 'Personalización', 'Capacitación', 'Soporte técnico']],
          ['Industrias', ['Empresas medianas', 'Contadores', 'Clínicas', 'Retail', 'Importadoras']],
          ['Compañía', ['Nosotros', 'Clientes', 'Casos de éxito', 'Contacto', 'Trabaje con nosotros']],
        ].map(([h, items], i) => (
          <div key={i} className="ft__col">
            <div className="ft__h">{h}</div>
            <ul>{items.map((it, j) => (<li key={j}><a href="#">{it}</a></li>))}</ul>
          </div>
        ))}
      </div>
    </div>
    <div className="ft__bar">
      <div className="container ft__bar-i">
        <div>© {new Date().getFullYear()} CIADE Consulting S.A. · Todos los derechos reservados.</div>
        <div className="ft__legal">
          <a href="#">Términos</a><span /><a href="#">Privacidad</a><span /><a href="#">Política de soporte</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
