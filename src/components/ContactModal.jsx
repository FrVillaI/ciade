import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'

const INTERES = [
  'Demo gratuita',
  'Cotización – Plan Starter',
  'Cotización – Plan Business',
  'Propuesta Enterprise',
  'Consulta general',
]

const EMPTY = { nombre: '', empresa: '', email: '', telefono: '', interes: 'Demo gratuita', mensaje: '' }

const ContactModal = ({ isOpen, onClose, initialInterest = 'Demo gratuita' }) => {
  const [fields, setFields] = useState({ ...EMPTY, interes: initialInterest })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (isOpen) setFields(f => ({ ...f, interes: initialInterest }))
  }, [isOpen, initialInterest])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const body = [
      `Nombre: ${fields.nombre}`,
      `Empresa: ${fields.empresa}`,
      `Email: ${fields.email}`,
      fields.telefono && `Teléfono: ${fields.telefono}`,
      `Interés: ${fields.interes}`,
      fields.mensaje && `\nMensaje:\n${fields.mensaje}`,
    ].filter(Boolean).join('\n')

    const a = document.createElement('a')
    a.href = `mailto:contacto@ciadeconsulting.ec?subject=${encodeURIComponent(`Contacto web – ${fields.interes}`)}&body=${encodeURIComponent(body)}`
    a.click()
    setStatus('success')
  }

  const handleClose = () => {
    setStatus('idle')
    setFields({ ...EMPTY, interes: initialInterest })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>

        <div className="modal__head">
          <div>
            <div className="modal__eyebrow">Contacto</div>
            <h2 className="modal__title">Hablemos de su operación</h2>
          </div>
          <button className="modal__close" onClick={handleClose} aria-label="Cerrar">
            <Icon name="close" size={18} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="modal__success">
            <div className="modal__success-icon"><Icon name="check" size={28} /></div>
            <h3>Mensaje preparado</h3>
            <p>Su cliente de correo se abrió con los datos completos. Nuestro equipo le responderá en menos de 24 horas hábiles.</p>
            <button className="btn btn--primary" onClick={handleClose}>Cerrar</button>
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleSubmit} noValidate>
            <div className="modal__row">
              <div className="modal__field">
                <label htmlFor="m-nombre">Nombre completo *</label>
                <input id="m-nombre" type="text" required value={fields.nombre} onChange={set('nombre')} placeholder="Juan Pérez" />
              </div>
              <div className="modal__field">
                <label htmlFor="m-empresa">Empresa *</label>
                <input id="m-empresa" type="text" required value={fields.empresa} onChange={set('empresa')} placeholder="Mi Empresa S.A." />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <label htmlFor="m-email">Correo electrónico *</label>
                <input id="m-email" type="email" required value={fields.email} onChange={set('email')} placeholder="juan@empresa.com" />
              </div>
              <div className="modal__field">
                <label htmlFor="m-tel">Teléfono</label>
                <input id="m-tel" type="tel" value={fields.telefono} onChange={set('telefono')} placeholder="+593 99 000 0000" />
              </div>
            </div>
            <div className="modal__field">
              <label htmlFor="m-interes">¿En qué podemos ayudarle? *</label>
              <select id="m-interes" required value={fields.interes} onChange={set('interes')}>
                {INTERES.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div className="modal__field">
              <label htmlFor="m-msg">Mensaje (opcional)</label>
              <textarea id="m-msg" rows={3} value={fields.mensaje} onChange={set('mensaje')} placeholder="Cuéntenos brevemente sobre su operación o sus dudas…" />
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Enviar mensaje <Icon name="arrow" size={16} />
            </button>
            <p className="modal__note"><Icon name="shield" size={12} /> Sus datos no serán compartidos con terceros.</p>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal
