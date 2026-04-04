import React from 'react'
import { Link } from 'react-router-dom'
import {
  Copy,
  FileText,
  Layers,
  BookOpen,
  Scissors,
  Globe,
  MonitorSmartphone,
  ScanLine,
  Camera,
  Printer,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'

const services = [
  {
    icon: Copy,
    title: 'Xerox / Photocopying',
    description:
      'High-speed, high-quality black and white photocopying for documents of all sizes. Affordable per-page rates with bulk discounts available.',
    tags: ['A4', 'A3', 'Bulk Orders'],
  },
  {
    icon: FileText,
    title: 'Colour Printout',
    description:
      'Vibrant full-colour printing for presentations, reports, photos, and more. Available in A4 and A3 sizes using premium ink cartridges.',
    tags: ['A4', 'A3', 'Photo Quality'],
  },
  {
    icon: FileText,
    title: 'B/W Printout',
    description:
      'Crisp and clear black-and-white prints for documents, assignments, and everyday printing needs at unbeatable rates.',
    tags: ['A4', 'A3', 'Fast Print'],
  },
  {
    icon: Layers,
    title: 'Lamination',
    description:
      'Protect your important documents, certificates, ID cards, and photos with our professional lamination services.',
    tags: ['A4', 'A3', 'ID Card', 'Certificate'],
  },
  {
    icon: BookOpen,
    title: 'School / College Projects',
    description:
      'Complete project preparation services including printing, formatting, cover page design, and binding solutions.',
    tags: ['Projects', 'Reports', 'Assignments'],
  },
  {
    icon: Scissors,
    title: 'Soft Binding',
    description:
      'Neat and professional soft binding for reports, thesis, and project submissions with a clean, polished look.',
    tags: ['Reports', 'Thesis', 'Projects'],
  },
  {
    icon: Scissors,
    title: 'Spiral Binding',
    description:
      'Durable wire spiral binding for calendars, notebooks, manuals, and presentations that lay flat when open.',
    tags: ['Presentations', 'Notebooks', 'Manuals'],
  },
  {
    icon: Globe,
    title: 'Online Registration',
    description:
      'Get assisted support with government portals, college admissions, exam registrations, and other official online forms.',
    tags: ['Government', 'Education', 'Exams'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Browsing Services',
    description:
      'High-speed internet browsing with assisted support for job applications, form filling, and online research.',
    tags: ['Internet', 'Job Apply', 'Research'],
  },
  {
    icon: ScanLine,
    title: 'Document Scanning',
    description:
      'High-resolution scanning of documents, photos, and certificates directly to PDF or image formats.',
    tags: ['PDF', 'JPG', 'High-Res'],
  },
  {
    icon: Camera,
    title: 'Passport Size Photos',
    description:
      'Professional passport and ID size photographs printed on high-quality glossy paper — ideal for applications, exams, and official submissions.',
    tags: ['4 Photos – ₹20', 'Glossy Print', 'Same Day'],
  },
]

const Services = () => {
  return (
    <div className="min-h-screen bg-transparent pt-16">
      {/* ───────────── HERO ───────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580910051073-5791c3d07532?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#5b21b6]/10 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_30%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] items-center">
            <div className="space-y-6 text-white">
              <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                What We Do
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                Professional printing and finishing services for students and businesses.
              </h1>
              <p className="max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
                From photocopying and colour printouts to lamination, binding, and online support — get everything done accurately and affordably.
              </p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-purple-200 text-sm mb-6">
                "Quality printing turns ideas into reality."
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/enquiry"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl shadow-2xl shadow-purple-900/50 hover:from-purple-500 hover:to-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-purple-700/60 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Printer size={17} className="relative z-10" />
                  <span className="relative z-10">Enquire Now</span>
                  <ArrowRight size={17} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20"
                >
                  <MessageCircle size={17} className="text-green-400 group-hover:animate-bounce" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:bg-black/70 transition-all duration-300">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-5">Service spotlight</p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
                  <p className="text-gray-400 text-sm">Large format printing</p>
                  <p className="mt-2 text-white text-lg font-semibold">Posters, plans, banners</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
                  <p className="text-gray-400 text-sm">Fast binding</p>
                  <p className="mt-2 text-white text-lg font-semibold">Spiral, soft, hard covers</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
                  <p className="text-gray-400 text-sm">Document finishing</p>
                  <p className="mt-2 text-white text-lg font-semibold">Lamination, scanning, copies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── QUICK PRICING ───────────── */}
      <section className="py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%237c3aed' stroke-width='1.2'%3E%3Crect x='30' y='6' width='40' height='35' rx='2'/%3E%3Crect x='18' y='34' width='64' height='30' rx='3'/%3E%3Crect x='28' y='55' width='44' height='35' rx='2'/%3E%3Cline x1='34' y1='63' x2='66' y2='63'/%3E%3Cline x1='34' y1='70' x2='60' y2='70'/%3E%3Cline x1='34' y1='77' x2='54' y2='77'/%3E%3Ccircle cx='66' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-purple-950/10 to-[#0a0a0f]/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] text-center mb-6">
            Printing Rates for Students
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'B/W Double Side', price: '₹1.20', sub: 'per page' },
              { label: 'B/W Single Side', price: '60p', sub: 'per page' },
              { label: 'Colour Print', price: '₹6', sub: '50 pages & above' },
              { label: 'Passport Photos', price: '₹20', sub: '4 photos set' },
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-600/35 hover:bg-purple-950/15 transition-all duration-300 text-center group"
              >
                <p className="text-2xl font-black text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.price}
                </p>
                <p className="text-gray-300 text-xs font-medium mb-0.5">{item.label}</p>
                <p className="text-gray-600 text-[10px]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES GRID ───────────── */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-600/40 hover:bg-purple-950/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/20"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mb-5 group-hover:bg-purple-600/30 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300 group-hover:animate-pulse">
                    <Icon size={22} className="text-purple-400" />
                  </div>

                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 bg-purple-900/30 border border-purple-800/30 text-purple-400 text-xs rounded-lg font-medium hover:bg-purple-800/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20">
            <div className="rounded-2xl bg-gradient-to-r from-purple-900/30 to-violet-900/20 border border-purple-800/30 p-10 text-center">
              <h3 className="text-2xl font-black text-white mb-3">
                Can't find what you need?
              </h3>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
                We offer many more specialised services. Send us an enquiry or
                WhatsApp us directly and we'll sort you out.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/enquiry"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-xl shadow-purple-900/50 text-sm"
                >
                  Send an Enquiry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/918148259753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 bg-green-500/10 border border-green-500/25 text-green-400 font-semibold rounded-xl hover:bg-green-500/20 transition-all duration-200 text-sm"
                >
                  <MessageCircle size={16} />
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

export default Services
