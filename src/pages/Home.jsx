import React from 'react'
import { Link } from 'react-router-dom'
import {
  Printer,
  FileText,
  Layers,
  BookOpen,
  Scissors,
  Globe,
  ArrowRight,
  MessageCircle,
  Star,
  Clock,
  Shield,
  Zap,
  Camera,
} from 'lucide-react'

const featuredServices = [
  {
    icon: Printer,
    title: 'Xerox & Photocopying',
    desc: 'High-speed B&W photocopying for documents of all sizes with bulk discounts.',
  },
  {
    icon: FileText,
    title: 'Colour / B&W Printout',
    desc: 'Vibrant A3 & A4 colour and monochrome prints using premium-quality ink.',
  },
  {
    icon: Layers,
    title: 'Lamination',
    desc: 'Protect your certificates, ID cards, and documents with glossy lamination.',
  },
  {
    icon: BookOpen,
    title: 'School & College Projects',
    desc: 'Full project prep: printing, formatting, cover design, and binding.',
  },
  {
    icon: Scissors,
    title: 'Soft / Spiral Binding',
    desc: 'Professional binding for reports, dissertations, and presentations.',
  },
  {
    icon: Globe,
    title: 'Online Registration',
    desc: 'Assisted government, college, and exam portal registrations.',
  },
]

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '5000+', label: 'Happy Customers' },
  { number: '10+', label: 'Services Offered' },
  { number: '100%', label: 'Quality Assured' },
]

const whyUs = [
  {
    icon: Star,
    title: 'Premium Quality',
    desc: 'State-of-the-art equipment ensures crisp, clear output every single time.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We value your time. Most orders are completed within the hour.',
  },
  {
    icon: Shield,
    title: 'Trusted for a Decade',
    desc: 'Serving Chennai students and professionals with integrity since 2010.',
  },
]

const pricingRates = [
  {
    icon: Printer,
    title: 'B/W Printout',
    badge: null,
    highlight: false,
    items: [
      { label: 'Double Side', price: '₹1.20', unit: 'per page' },
      { label: 'Single Side', price: '60 Paise', unit: 'per page' },
    ],
  },
  {
    icon: FileText,
    title: 'Colour Print',
    badge: '50 Pages & Above',
    highlight: true,
    items: [
      { label: 'Per Page', price: '₹6', unit: null },
    ],
  },
  {
    icon: BookOpen,
    title: 'Binding',
    badge: null,
    highlight: false,
    items: [
      { label: 'Spiral Binding', price: '₹25', unit: 'onwards' },
      { label: 'Soft Binding', price: '₹30', unit: 'onwards' },
    ],
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    badge: null,
    highlight: false,
    items: [
      { label: '4 Photos Set', price: '₹20', unit: null },
    ],
  },
]

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* background blobs */}
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-800/15 rounded-full blur-[80px]" />
        </div>

        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          {/* status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-900/40 border border-purple-700/40 rounded-full text-purple-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now Open · Chennai's Premier Print Shop
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white">Welcome to </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
              Friend's Xerox Corner
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Your one-stop destination for{' '}
            <span className="text-purple-400 font-medium">printing</span>,{' '}
            <span className="text-purple-400 font-medium">xerox</span>,{' '}
            <span className="text-purple-400 font-medium">lamination</span>, and all
            document services. Fast, affordable, and always reliable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-2xl shadow-purple-900/60 hover:shadow-purple-700/60 hover:-translate-y-0.5 text-sm"
            >
              Enquire Now
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/918148259753"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 bg-white/[0.05] border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle size={17} className="text-green-400" />
              WhatsApp Us
            </a>
          </div>

          {/* scroll hint */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-1 opacity-30">
              <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-purple-500 rounded-full" />
              <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── STATS ───────────── */}
      <section className="py-14 border-y border-purple-900/20 bg-black/40">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES PREVIEW ───────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              From simple photocopies to complex project binding — we handle it all
              with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-600/40 hover:bg-purple-950/20 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mb-4 group-hover:bg-purple-600/30 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group"
            >
              View All Services
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── PRICING RATES ───────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background: printer pattern + gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0c0a1c] to-[#0a0a0f]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%237c3aed' stroke-width='1.2'%3E%3Crect x='30' y='6' width='40' height='35' rx='2'/%3E%3Crect x='18' y='34' width='64' height='30' rx='3'/%3E%3Crect x='28' y='55' width='44' height='35' rx='2'/%3E%3Cline x1='34' y1='63' x2='66' y2='63'/%3E%3Cline x1='34' y1='70' x2='60' y2='70'/%3E%3Cline x1='34' y1='77' x2='54' y2='77'/%3E%3Ccircle cx='66' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Printing Rates for Students
            </h2>
            <p className="text-purple-300/70 text-base italic font-light max-w-lg mx-auto">
              "Every page you print is a step closer to success."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingRates.map((rate, i) => {
              const Icon = rate.icon
              return (
                <div
                  key={i}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group cursor-default ${
                    rate.highlight
                      ? 'bg-gradient-to-b from-purple-900/50 to-violet-900/20 border-purple-500/50 shadow-2xl shadow-purple-900/40'
                      : 'bg-white/[0.03] border-white/[0.07] hover:border-purple-600/40 hover:bg-purple-950/20'
                  }`}
                >
                  {rate.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg">
                      Popular
                    </span>
                  )}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                      rate.highlight
                        ? 'bg-purple-500/30 border border-purple-400/50'
                        : 'bg-purple-600/15 border border-purple-600/25 group-hover:bg-purple-600/30 group-hover:border-purple-500/50'
                    }`}
                  >
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">{rate.title}</h3>
                  {rate.badge && (
                    <p className="text-purple-400/80 text-xs mb-2">{rate.badge}</p>
                  )}
                  <div className="mt-3 space-y-3.5 border-t border-white/[0.06] pt-3">
                    {rate.items.map((item, j) => (
                      <div key={j} className="flex items-end justify-between">
                        <span className="text-gray-400 text-xs leading-tight">{item.label}</span>
                        <div className="text-right ml-2">
                          <span
                            className={`font-black text-xl leading-none ${
                              rate.highlight ? 'text-purple-300' : 'text-white'
                            }`}
                          >
                            {item.price}
                          </span>
                          {item.unit && (
                            <p className="text-gray-600 text-[10px] mt-0.5">{item.unit}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Delivery notice */}
          <div className="flex items-center justify-center gap-3 mt-10 px-6 py-4 bg-purple-900/15 border border-purple-800/25 rounded-2xl max-w-lg mx-auto">
            <span className="text-xl shrink-0">🚚</span>
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">Delivery available!</span>{' '}
              Charges based on distance.{' '}
              <a
                href="tel:+918148259753"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                Call &amp; discuss.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <section className="py-24 px-4 bg-black/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Why Us?
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why Choose Friend's Xerox Corner?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-purple-900/15 to-transparent border border-purple-900/25 hover:border-purple-700/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-600/35 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────── HIGHLIGHT BANNER ───────────── */}
      <section className="py-8 px-4 bg-purple-900/10 border-y border-purple-900/20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap size={18} className="text-yellow-400 shrink-0" />
            <span className="text-gray-300 text-sm font-medium">
              Visit us at{' '}
              <span className="text-white font-semibold">
                41, Anna Street, Kanagam, Taramani, Chennai
              </span>
            </span>
          </div>
          <a
            href="tel:+918148259753"
            className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Call: +91 81482 59753
          </a>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-purple-950" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/5 rounded-full blur-3xl" />

            <div className="relative px-8 sm:px-16 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-purple-200 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
                Send us an enquiry or message us on WhatsApp — we'll get back to
                you instantly with pricing and details.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/enquiry"
                  className="px-8 py-4 bg-white text-purple-900 font-black rounded-xl hover:bg-purple-50 transition-all duration-200 shadow-2xl text-sm"
                >
                  Send Enquiry
                </Link>
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-sm"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
