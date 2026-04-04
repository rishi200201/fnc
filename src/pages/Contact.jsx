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
    <div className="min-h-screen bg-transparent pt-16">
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7c3aed]/10 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_30%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6 text-white">
              <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Find Us
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                Contact <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Friend's Xerox Corner</span>
              </h1>
              <p className="max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
                Visit our shop, call us, or message on WhatsApp. Our team is ready to help with printing, binding, scanning, and delivery support.
              </p>
              <blockquote className="max-w-2xl text-purple-300 text-sm italic border-l-2 border-purple-500 pl-4 py-2 bg-purple-900/10 rounded-r-lg">
                "Your success is our priority. We're here to make your documents perfect and your experience exceptional."
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/enquiry"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl shadow-2xl shadow-purple-900/50 hover:from-purple-500 hover:to-violet-500 hover:scale-105 hover:shadow-purple-600/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Enquiry <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-xl hover:bg-white/15 hover:scale-105 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <MessageCircle size={17} className="text-green-400 group-hover:animate-pulse" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-5">Contact info</p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="mt-2 text-white font-semibold">41, Anna Street, Kanagam, Taramani, Chennai</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="mt-2 text-white font-semibold">+91 81482 59753</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-gray-400 text-sm">Opening Hours</p>
                  <p className="mt-2 text-white font-semibold">Mon–Sat 8:30 AM – 9 PM</p>
                </div>
              </div>
            </div>
          </div>
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
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-600/35 hover:bg-purple-950/15 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mb-4 group-hover:bg-purple-600/30 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 group-hover:animate-pulse">
                    <Icon size={17} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      className="inline-flex items-center gap-1 mt-3 text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors group-hover:translate-x-1 transition-transform"
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
                title="Friend's Xerox Corner Location – 41 Anna Street, Kanagam, Taramani, Chennai"
                src="https://maps.google.com/maps?q=41+Anna+Street,+Kanagam,+Taramani,+Chennai+600113&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp card */}
            <div className="group rounded-2xl bg-gradient-to-b from-green-900/20 to-green-900/5 border border-green-800/25 p-7 flex flex-col hover:border-green-600/40 hover:from-green-900/30 hover:to-green-900/10 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center mb-5 group-hover:bg-green-500/30 group-hover:scale-110 group-hover:border-green-400/50 transition-all duration-300 group-hover:animate-pulse">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <h3 className="text-white font-black text-xl mb-2 group-hover:text-green-300 transition-colors">WhatsApp Us</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                Get instant replies! Message us on WhatsApp for quick quotes and
                service information.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 hover:scale-105 hover:shadow-lg hover:shadow-green-600/30 transition-all duration-200 text-sm shadow-xl shadow-green-900/40 hover:-translate-y-1"
                >
                  <MessageCircle size={16} className="group-hover/btn:animate-pulse" />
                  Open WhatsApp
                </a>
                <p className="text-center text-gray-600 text-xs">+91 81482 59753</p>
              </div>
            </div>
          </div>

          {/* ── Shop info strip ── */}
          <div className="rounded-xl bg-purple-900/10 border border-purple-900/20 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-purple-900/15 hover:border-purple-900/30 transition-all duration-300">
            <div>
              <p className="text-white font-semibold text-sm mb-1">Friend's Xerox Corner</p>
              <p className="text-gray-500 text-xs">
                #13, Anna Street, Kanagam, Chennai — Serving the community since 2010
              </p>
            </div>
            <Link
              to="/enquiry"
              className="group shrink-0 flex items-center gap-2 px-5 py-2.5 bg-purple-600/25 border border-purple-600/40 text-purple-300 font-semibold rounded-xl hover:bg-purple-600/40 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/20 transition-all text-sm hover:-translate-y-1"
            >
              Send Enquiry
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
