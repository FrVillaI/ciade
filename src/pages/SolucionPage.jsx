import { useParams, Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

const data = {
  local: {
    eyebrow: 'FENIX ERP Local',
    title: 'Control total dentro de su infraestructura.',
    sub: 'Implementación on-premise con acceso completo, rendimiento máximo y sin dependencia de Internet para operaciones críticas.',
    features: ['Instalación en servidores propios', 'Sin cuotas mensuales de nube', 'Rendimiento máximo en red local', 'Control total de datos y respaldos', 'Actualizaciones programadas con su equipo'],
    interest: 'Cotización – Plan Starter',
  },
  web: {
    eyebrow: 'FENIX Web',
    title: 'Acceso desde cualquier lugar, sin instalar nada.',
    sub: 'Desplegado en sus servidores pero accesible vía navegador. Configuración mínima en los equipos del usuario.',
    features: ['Acceso multi-dispositivo desde navegador', 'Sin instalación en equipos de usuario', 'Ideal para equipos distribuidos', 'Misma potencia que la versión local', 'Gestión centralizada de usuarios'],
    interest: 'Cotización – Plan Business',
  },
  cloud: {
    eyebrow: 'FENIX Cloud',
    title: 'Infraestructura elástica, sin preocupaciones operativas.',
    sub: 'CIADÉ gestiona la infraestructura completa. Escalado automático, actualizaciones continuas y disponibilidad garantizada.',
    features: ['Infraestructura gestionada por CIADÉ', 'Escalado automático según demanda', 'Actualizaciones continuas incluidas', 'Alta disponibilidad 99.9%+ garantizada', 'Respaldos automáticos diarios'],
    interest: 'Propuesta Enterprise',
  },
}

const SolucionPage = ({ openModal }) => {
  const { tipo } = useParams()
  const sol = data[tipo]

  if (!sol) return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <h2>Solución no encontrada</h2>
        <Link to="/" className="btn btn--primary" style={{ marginTop: '24px', display: 'inline-flex' }}>Volver al inicio</Link>
      </div>
    </section>
  )

  return (
    <>
      <section className="page-hero section">
        <div className="container">
          <div className="eyebrow"><span className="eyebrow__dot" />{sol.eyebrow}</div>
          <h1 className="page-hero__h">{sol.title}</h1>
          <p className="page-hero__sub">{sol.sub}</p>
          <ul className="page-hero__features">
            {sol.features.map((f, i) => (
              <li key={i}><Icon name="check" size={15} /> {f}</li>
            ))}
          </ul>
          <button className="btn btn--primary btn--lg" style={{ marginTop: '32px' }} onClick={() => openModal(sol.interest)}>
            Solicitar información <Icon name="arrow" size={16} />
          </button>
        </div>
      </section>
      <FinalCTA openModal={openModal} />
    </>
  )
}

export default SolucionPage
