import Icon from '../components/Icon.jsx'

const WA_URL = 'https://wa.me/593988015407?text=Hola%2C%20estoy%20interesado%20en%20las%20soluciones%20FENIX%20ERP%20de%20CIADE%20Consulting.%20%C2%BFMe%20pueden%20asesorar%3F'

const canales = [
  { icon: 'phone', label: 'Teléfono', val: '+593 (2) 256 0000', note: 'Lun – Vie · 08h00 – 18h00' },
  { icon: 'mail', label: 'Correo', val: 'contacto@ciadeconsulting.ec', note: 'Respuesta en menos de 24 h' },
  { icon: 'pin', label: 'Oficinas', val: 'Quito · Guayaquil · Cuenca', note: 'Manta · Ambato · Loja' },
]

const ContactoPage = ({ openModal }) => (
  <section className="section">
    <div className="container">
      <div className="eyebrow"><span className="eyebrow__dot" />Contacto</div>
      <h1 className="page-hero__h" style={{ marginBottom: '12px' }}>Hablemos de su operación.</h1>
      <p className="page-hero__sub" style={{ marginBottom: '48px' }}>
        Una sesión de diagnóstico de 45 minutos sin costo, con un consultor especializado.
      </p>

      <div className="contacto__grid">
        <div className="contacto__canales">
          {canales.map((c, i) => (
            <div key={i} className="contacto__canal">
              <div className="contacto__canal-icon"><Icon name={c.icon} size={20} /></div>
              <div>
                <div className="contacto__canal-label">{c.label}</div>
                <div className="contacto__canal-val">{c.val}</div>
                <div className="contacto__canal-note">{c.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="contacto__ctas">
          <button className="btn btn--primary btn--lg btn--block" onClick={() => openModal()}>
            <Icon name="mail" size={16} /> Enviar mensaje
          </button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg btn--block">
            <Icon name="phone" size={16} /> Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default ContactoPage
