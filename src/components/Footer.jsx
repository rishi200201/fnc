import React from 'react'
import { Link } from 'react-router-dom'
import { Printer, MapPin, Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-purple-900/20">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center shadow-lg shadow-purple-900/50">
                <Printer size={18} className="text-white" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent tracking-tight">
                Friend's Xerox Corner
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Your trusted partner for all printing and document services in Chennai.
              Quality, speed, and affordability — all under one roof.
            </p>
            <p className="text-purple-800 text-xs italic">
              Serving Chennai since 2010
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918148259753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium rounded-xl hover:bg-green-500/20 transition-all duration-200"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'Send Enquiry', path: '/enquiry' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    <ChevronRight size={13} className="text-purple-700 group-hover:text-purple-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-purple-500 mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  41, Anna Street, Kanagam,<br />Taramani, Chennai – 600113
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-purple-500 shrink-0" />
                <a
                  href="tel:+918148259753"
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                >
                  +91 81482 59753
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-purple-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:friendsxeroxcorner@gmail.com"
                  className="text-gray-500 hover:text-purple-400 text-sm transition-colors break-all"
                >
                  friendsxeroxcorner@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs">
            © {year} Friend's Xerox Corner. All rights reserved.
          </p>
          <p className="text-gray-800 text-xs">
            41, Anna Street, Kanagam, Taramani, Chennai – 600113
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
