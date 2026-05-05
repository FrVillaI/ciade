const DashboardMock = () => (
  <div className="fenix-frame">
    <div className="fenix-frame__bar">
      <div className="fenix-frame__dots">
        <span className="fenix-frame__dot fenix-frame__dot--r" />
        <span className="fenix-frame__dot fenix-frame__dot--y" />
        <span className="fenix-frame__dot fenix-frame__dot--g" />
      </div>
      <span className="fenix-frame__title">FENIX &rsaquo;&rsaquo; Sistema Contable &rsaquo;&rsaquo;</span>
      <div className="fenix-frame__winctrls">
        <span>─</span><span>□</span><span>✕</span>
      </div>
    </div>
    <div className="fenix-frame__body">
      <img
        src="/fenix-dashboard.png"
        alt="FENIX ERP · Panel ejecutivo Business Intelligence"
        className="fenix-frame__img"
        loading="lazy"
      />
    </div>
  </div>
)

export default DashboardMock
