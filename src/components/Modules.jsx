import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const mods = [
  { i: 'invoice', t: 'Facturación electrónica', d: 'Emisión y autorización SRI integradas, sin pasos manuales ni dobles digitaciones.' },
  { i: 'box', t: 'Inventarios', d: 'Control multi-bodega, kardex en tiempo real y trazabilidad por lote o serie.' },
  { i: 'book', t: 'Contabilidad', d: 'Plan de cuentas configurable, conciliación bancaria y cierres asistidos.' },
  { i: 'users', t: 'Nómina', d: 'Roles, beneficios sociales, IESS y cumplimiento normativo ecuatoriano.' },
  { i: 'cart', t: 'Punto de venta', d: 'POS sincronizado con inventario y facturación, modo offline opcional.' },
  { i: 'chart', t: 'Reportes BI', d: 'Tableros ejecutivos, KPIs operativos y reportes financieros configurables.' },
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
