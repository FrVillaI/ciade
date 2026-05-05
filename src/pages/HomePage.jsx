import Hero from '../components/Hero.jsx'
import Trust from '../components/Trust.jsx'
import ProblemSolution from '../components/ProblemSolution.jsx'
import Solutions from '../components/Solutions.jsx'
import Modules from '../components/Modules.jsx'
import Differentiators from '../components/Differentiators.jsx'
import Industries from '../components/Industries.jsx'
import Plans from '../components/Plans.jsx'
import Clients from '../components/Clients.jsx'
import Support from '../components/Support.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

const HomePage = ({ openModal }) => (
  <>
    <Hero openModal={openModal} />
    <Trust />
    <ProblemSolution />
    <Solutions />
    <Modules />
    <Differentiators />
    <Industries />
    <Plans openModal={openModal} />
    <Clients />
    <Support />
    <FinalCTA openModal={openModal} />
  </>
)

export default HomePage
