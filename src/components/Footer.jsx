import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const cols = [
  ['Soluciones', [
    ['FENIX ERP Local', '/soluciones/local'],
    ['FENIX Web', '/soluciones/web'],
    ['FENIX Cloud', '/soluciones/cloud'],
    ['Integraciones', null],
    ['Comparativa', null],
  ]],
  ['Servicios', [
    ['Consultoría', null],
    ['Implementación', null],
    ['Personalización', null],
    ['Capacitación', null],
    ['Soporte técnico', '/soporte'],
  ]],
  ['Industrias', [
    ['Empresas medianas', null],
    ['Contadores', null],
    ['Clínicas', null],
    ['Retail', null],
    ['Importadoras', null],
  ]],
  ['Compañía', [
    ['Nosotros', '/nosotros'],
    ['Clientes', null],
    ['Casos de éxito', null],
    ['Contacto', '/contacto'],
    ['Trabaje con nosotros', null],
  ]],
]

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
        {cols.map(([h, items], i) => (
          <div key={i} className="ft__col">
            <div className="ft__h">{h}</div>
            <ul>
              {items.map(([label, to], j) => (
                <li key={j}>
                  {to ? <Link to={to}>{label}</Link> : <span style={{ color: '#93A1B5', fontSize: '13.5px' }}>{label}</span>}
                </li>
              ))}
            </ul>
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
