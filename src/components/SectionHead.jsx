const SectionHead = ({ eyebrow, title, sub, dark }) => (
  <div className={`secthead ${dark ? 'is-dark' : ''}`}>
    <div className={`eyebrow ${dark ? '' : 'eyebrow--dark'}`}>
      <span className={`eyebrow__dot ${dark ? 'eyebrow__dot--light' : ''}`} />{eyebrow}
    </div>
    <h2 className="secthead__h">{title}</h2>
    {sub && <p className="secthead__s">{sub}</p>}
  </div>
)

export default SectionHead
