import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Trust from './components/Trust.jsx'
import ProblemSolution from './components/ProblemSolution.jsx'
import Solutions from './components/Solutions.jsx'
import Modules from './components/Modules.jsx'
import Differentiators from './components/Differentiators.jsx'
import Industries from './components/Industries.jsx'
import Plans from './components/Plans.jsx'
import Clients from './components/Clients.jsx'
import Support from './components/Support.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import ContactModal from './components/ContactModal.jsx'

const App = () => {
  const [modal, setModal] = useState({ open: false, interest: 'Demo gratuita' })
  const openModal = (interest = 'Demo gratuita') => setModal({ open: true, interest })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  return (
    <>
      <Header openModal={openModal} />
      <main>
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
      </main>
      <Footer />
      <ContactModal isOpen={modal.open} onClose={closeModal} initialInterest={modal.interest} />
    </>
  )
}

export default App
