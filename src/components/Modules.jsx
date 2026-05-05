import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const mods = [
  { i: 'users', t: 'CRM', d: 'Gestión de clientes, prospectos y oportunidades comerciales integrada con facturación y cobranzas.' },
  { i: 'book', t: 'Financiero', d: 'Contabilidad, conciliación bancaria, cierres y reportes financieros bajo normativa ecuatoriana.' },
  { i: 'workflow', t: 'Proyectos', d: 'Planificación, control de avance y costeo de proyectos vinculados al módulo contable y de RRHH.' },
  { i: 'truck', t: 'Logística', d: 'Control de bodegas, despachos, guías de remisión y trazabilidad de carga en tiempo real.' },
  { i: 'cart', t: 'E-Commerce', d: 'Tienda virtual, catálogo digital y pedidos online integrados con inventario y facturación electrónica.' },
  { i: 'activity', t: 'Recursos Humanos', d: 'Nómina, roles de pago, beneficios sociales, IESS y gestión de contratos en cumplimiento legal.' },
]

const Modules = () => (
  <section className="mods section">
    <div className="container">
      <SectionHead
        eyebrow="Módulos"
        title="Un ecosistema modular conectado de extremo a extremo."
        sub="Cada módulo opera de forma independiente, pero conversa en tiempo real con el resto del sistema. Integre solo lo que su operación necesita hoy y escale después."
      />
      <div className="mods__grid">
        {mods.map((m, i) => (
          <div key={i} className="mod">
            <div className="mod__no">M.{String(i + 1).padStart(2, '0')}</div>
            <div className="mod__icon"><Icon name={m.i} size={22} /></div>
            <div className="mod__t">{m.t}</div>
            <p className="mod__d">{m.d}</p>
            <a className="mod__link" href="#">Detalle <Icon name="arrow" size={12} /></a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Modules
