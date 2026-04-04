import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Enquiry from './pages/Enquiry'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{
          backgroundImage:
            "url('https://www.studentsxerox.com/images/01.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#08030f]/90 via-[#0d0530]/80 to-[#05030c]/95" />
      <div className="relative min-h-screen bg-black/30">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
