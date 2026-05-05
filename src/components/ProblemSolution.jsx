import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

const ProblemSolution = () => (
  <section className="ps section">
    <div className="container">
      <SectionHead
        eyebrow="Diagnóstico"
        title="La operación crece. Las hojas de cálculo no."
        sub="Cuando los procesos se vuelven críticos, las soluciones genéricas dejan de sostener la operación. CIADÉ implementa el ERP que se adapta al flujo real del negocio."
      />
      <div className="ps__grid">
        <div className="ps__col ps__col--prob">
          <div className="ps__col-h">Sin sistema unificado</div>
          {[
            'Datos dispersos en hojas de cálculo, correos y módulos aislados.',
            'Reprocesos contables al cierre y diferencias entre áreas.',
            'Reportería tardía y sin visibilidad ejecutiva en tiempo real.',
            'Dependencia de personas clave para tareas operativas críticas.',
            'Inventarios desincronizados con facturación y bodega.',
          ].map((t, i) => (
            <div key={i} className="ps__row"><span className="ps__x">×</span>{t}</div>
          ))}
        </div>
        <div className="ps__col ps__col--sol">
          <div className="ps__col-h">Con CIADÉ + FENIX</div>
          {[
            'Operación, contabilidad e inventario integrados en un único ecosistema.',
            'Facturación electrónica autorizada por el SRI sin pasos manuales.',
            'Tableros operativos y financieros disponibles 24/7 para gerencia.',
            'Procesos documentados, replicables y auditables por diseño.',
            'Control de stock multi-bodega sincronizado con punto de venta.',
          ].map((t, i) => (
            <div key={i} className="ps__row"><Icon name="check" size={16} className="ps__c" />{t}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default ProblemSolution
