import Plans from '../components/Plans.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

const PlanesPage = ({ openModal }) => (
  <>
    <Plans openModal={openModal} />
    <FinalCTA openModal={openModal} />
  </>
)

export default PlanesPage
