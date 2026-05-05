import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ContactModal from './components/ContactModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import HomePage from './pages/HomePage.jsx'
import PlanesPage from './pages/PlanesPage.jsx'
import SoportePage from './pages/SoportePage.jsx'
import NosotrosPage from './pages/NosotrosPage.jsx'
import ContactoPage from './pages/ContactoPage.jsx'
import SolucionPage from './pages/SolucionPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const App = () => {
  const [modal, setModal] = useState({ open: false, interest: 'Demo gratuita' })
  const openModal = (interest = 'Demo gratuita') => setModal({ open: true, interest })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  return (
    <>
      <ScrollToTop />
      <Header openModal={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />
          <Route path="/planes" element={<PlanesPage openModal={openModal} />} />
          <Route path="/soporte" element={<SoportePage openModal={openModal} />} />
          <Route path="/nosotros" element={<NosotrosPage openModal={openModal} />} />
          <Route path="/contacto" element={<ContactoPage openModal={openModal} />} />
          <Route path="/soluciones/:tipo" element={<SolucionPage openModal={openModal} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal isOpen={modal.open} onClose={closeModal} initialInterest={modal.interest} />
    </>
  )
}

export default App
