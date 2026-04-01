import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Printer } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Enquiry', path: '/enquiry' },
  { name: 'Contact', path: '/contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-purple-900/20 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-900/60 group-hover:shadow-purple-600/60 group-hover:scale-105 transition-all duration-300">
              <Printer size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black bg-gradient-to-r from-purple-300 via-violet-300 to-white bg-clip-text text-transparent tracking-tight">
                Friend's Xerox Corner
              </span>
              <span className="text-[9px] text-purple-500 font-medium tracking-widest uppercase hidden sm:block">
                Print &amp; Document Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-white bg-purple-600/20 border border-purple-600/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/enquiry"
              className="ml-3 px-5 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50 hover:-translate-y-px"
            >
              Enquire Now
            </Link>
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1 border-t border-white/[0.06]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-purple-600/20 border border-purple-600/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/enquiry"
              className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold rounded-xl mt-2 hover:from-purple-500 hover:to-violet-500 transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
