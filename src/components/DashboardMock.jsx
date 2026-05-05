import { useState } from 'react'
import Icon from './Icon.jsx'

const Chart = () => {
  const data = [42, 58, 49, 71, 65, 88]
  const data2 = [34, 46, 41, 58, 56, 72]
  const w = 460, h = 170, pad = 24
  const max = 100
  const xs = i => pad + (i * (w - pad * 2)) / (data.length - 1)
  const ys = v => h - pad - (v * (h - pad * 2)) / max
  const path = arr => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ')
  const area = arr => `${path(arr)} L ${xs(arr.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`
  return (
    <svg className="chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--teal)" stopOpacity="0.18" />
          <stop offset="1" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1={pad} x2={w - pad} y1={pad + i * (h - pad * 2) / 3} y2={pad + i * (h - pad * 2) / 3} stroke="var(--line)" strokeDasharray="2 4" />
      ))}
      <path d={area(data)} fill="url(#g1)" />
      <path d={path(data2)} fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d={path(data)} fill="none" stroke="var(--teal)" strokeWidth="2" />
      {data.map((v, i) => (
        <circle key={i} cx={xs(i)} cy={ys(v)} r="3" fill="white" stroke="var(--teal)" strokeWidth="1.5" />
      ))}
      {['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'].map((m, i) => (
        <text key={m} x={xs(i)} y={h - 6} textAnchor="middle" fontSize="9" fill="var(--ink-3)" fontFamily="Manrope">{m}</text>
      ))}
    </svg>
  )
}

const DashboardMock = () => {
  const [tab, setTab] = useState('operacion')
  return (
    <div className="dash">
      <div className="dash__chrome">
        <div className="dash__dots"><span /><span /><span /></div>
        <div className="dash__url">erp.ciadeconsulting.ec / panel</div>
        <div className="dash__chrome-r"><Icon name="search" size={14} /></div>
      </div>
      <div className="dash__app">
        <aside className="dash__side">
          <div className="dash__brand">
            <div className="dash__brandmark"></div>
            <div>
              <div className="dash__brandname">FENIX ERP</div>
              <div className="dash__brandtag">Distribuidora El Pacífico</div>
            </div>
          </div>
          <div className="dash__nav">
            {[
              ['chart', 'Resumen', true],
              ['invoice', 'Facturación', false],
              ['box', 'Inventarios', false],
              ['book', 'Contabilidad', false],
              ['users', 'Nómina', false],
              ['cart', 'Punto de venta', false],
              ['activity', 'Reportes BI', false],
              ['settings', 'Configuración', false],
            ].map(([ic, lb, a], i) => (
              <div key={i} className={`dash__navi ${a ? 'is-active' : ''}`}>
                <Icon name={ic} size={15} />{lb}
              </div>
            ))}
          </div>
        </aside>

        <main className="dash__main">
          <div className="dash__top">
            <div>
              <div className="dash__crumb">Operaciones · Hoy</div>
              <div className="dash__title">Resumen ejecutivo</div>
            </div>
            <div className="dash__tabs">
              {[['operacion', 'Operación'], ['finanzas', 'Finanzas'], ['bodega', 'Bodega']].map(([id, l]) => (
                <button key={id} className={`dash__tab ${tab === id ? 'is-active' : ''}`} onClick={() => setTab(id)}>{l}</button>
              ))}
            </div>
          </div>

          <div className="dash__kpis">
            {[
              ['Facturación', '$ 184,520', '+12.4%', true],
              ['Órdenes', '1,284', '+3.1%', true],
              ['Cuentas x cobrar', '$ 42,180', '−6.2%', true],
              ['Margen op.', '28.6 %', '+0.9 pp', true],
            ].map(([l, v, d, p], i) => (
              <div key={i} className="kpi">
                <div className="kpi__l">{l}</div>
                <div className="kpi__v">{v}</div>
                <div className={`kpi__d ${p ? 'is-up' : 'is-dn'}`}>{d}</div>
              </div>
            ))}
          </div>

          <div className="dash__row">
            <div className="dash__card dash__card--chart">
              <div className="dash__card-h">
                <div>
                  <div className="dash__card-t">Ventas mensuales</div>
                  <div className="dash__card-s">USD · últimos 6 meses</div>
                </div>
                <div className="dash__chips">
                  <span className="chip chip--on">Ventas</span>
                  <span className="chip">Cobros</span>
                </div>
              </div>
              <Chart />
            </div>
            <div className="dash__card dash__card--list">
              <div className="dash__card-h">
                <div className="dash__card-t">Comprobantes electrónicos</div>
                <span className="pill">SRI · 100% autorizados</span>
              </div>
              <ul className="dash__list">
                {[
                  ['FAC-001-2841', 'Comercial Andina', '$ 4,820.00', 'Aut.'],
                  ['FAC-001-2840', 'Importadora MZ', '$ 1,205.50', 'Aut.'],
                  ['RET-001-0312', 'Comercial Andina', '$ 240.00', 'Aut.'],
                  ['FAC-001-2839', 'Servicios Industriales del Norte', '$ 12,400.00', 'Aut.'],
                  ['FAC-001-2838', 'Tecnimax Cía. Ltda.', '$ 980.00', 'Aut.'],
                ].map((r, i) => (
                  <li key={i} className="dash__listi">
                    <span className="mono">{r[0]}</span>
                    <span className="trunc">{r[1]}</span>
                    <span className="amt">{r[2]}</span>
                    <span className="tag tag--ok">{r[3]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardMock
