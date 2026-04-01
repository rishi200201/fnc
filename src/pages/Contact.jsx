import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation, ArrowRight } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    title: 'Address',
    content: '41, Anna Street,\nKanagam, Taramani,\nChennai – 600113',
    action: null,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 81482 59753',
    action: { href: 'tel:+918148259753', label: 'Call Now' },
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'friendsxeroxcorner\n@gmail.com',
    action: { href: 'mailto:friendsxeroxcorner@gmail.com', label: 'Send Email' },
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon – Sat: 8:30 AM – 9 PM\nSunday: Holiday',
    action: null,
  },
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* ───────────── HERO ───────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-800/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Find Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Contact{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Visit our shop or reach out through any of the channels below.
            We're always happy to help!
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* ── Contact cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactDetails.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-600/35 hover:bg-purple-950/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      className="inline-flex items-center gap-1 mt-3 text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors"
                    >
                      {item.action.label}
                      <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          {/* ── Map + WhatsApp ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Google Maps embed */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02]">
              <div className="px-5 py-3.5 border-b border-white/[0.05] flex items-center gap-2.5">
                <Navigation size={14} className="text-purple-400" />
                <span className="text-white text-sm font-semibold">Location — Kanagam, Chennai</span>
              </div>
              <iframe
                title="Friend's Xerox Corner Location – Kanagam, Chennai"
                src="https://maps.google.com/maps?q=Kanagam+Chennai+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp card */}
            <div className="rounded-2xl bg-gradient-to-b from-green-900/20 to-green-900/5 border border-green-800/25 p-7 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-5">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <h3 className="text-white font-black text-xl mb-2">WhatsApp Us</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                Get instant replies! Message us on WhatsApp for quick quotes and
                service information.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-all duration-200 text-sm shadow-xl shadow-green-900/40"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </a>
                <p className="text-center text-gray-600 text-xs">+91 81482 59753</p>
              </div>
            </div>
          </div>

          {/* ── Shop info strip ── */}
          <div className="rounded-xl bg-purple-900/10 border border-purple-900/20 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm mb-1">Friend's Xerox Corner</p>
              <p className="text-gray-500 text-xs">
                #13, Anna Street, Kanagam, Chennai — Serving the community since 2010
              </p>
            </div>
            <Link
              to="/enquiry"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-purple-600/25 border border-purple-600/40 text-purple-300 font-semibold rounded-xl hover:bg-purple-600/40 transition-all text-sm"
            >
              Send Enquiry
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
