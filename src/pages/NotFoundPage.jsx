import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="mono" style={{ fontSize: '72px', fontWeight: 700, color: 'var(--line-2)', lineHeight: 1 }}>404</div>
      <h2 style={{ fontSize: '24px', color: 'var(--navy)', margin: '16px 0 8px' }}>Página no encontrada</h2>
      <p style={{ color: 'var(--ink-3)', marginBottom: '32px' }}>La dirección que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn--primary btn--lg">Volver al inicio</Link>
    </div>
  </section>
)

export default NotFoundPage
