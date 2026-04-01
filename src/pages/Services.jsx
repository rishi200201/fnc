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
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* ───────────── HERO ───────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-800/15 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A comprehensive range of print and document services tailored for
            students, professionals, and businesses in Chennai.
          </p>
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
                  className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-600/40 hover:bg-purple-950/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-600/25 flex items-center justify-center mb-5 group-hover:bg-purple-600/30 group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
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
                        className="px-2.5 py-1 bg-purple-900/30 border border-purple-800/30 text-purple-400 text-xs rounded-lg font-medium"
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
