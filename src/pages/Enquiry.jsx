import React, { useState } from 'react'
import { MessageCircle, CheckCircle, User, Phone, ChevronDown, FileText, Send } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Xerox / Photocopying',
  'Colour Printout (A4 / A3)',
  'B/W Printout (A4 / A3)',
  'Lamination',
  'School / College Project',
  'Soft Binding',
  'Spiral Binding',
  'Online Registration Assistance',
  'Browsing Services',
  'Document Scanning',
  'Other / Multiple Services',
]

const WHATSAPP_NUMBER = '918148259753'

const Enquiry = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.'
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      e.phone = 'Enter a valid phone number (digits only).'
    }
    if (!form.service) e.service = 'Please select a service.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello Friend's Xerox Corner! 👋",
      '',
      "I'd like to make an enquiry:",
      '',
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `🖨️ *Service:* ${form.service}`,
      `💬 *Message:* ${form.message.trim() || 'N/A'}`,
      '',
      "_Sent via Friend's Xerox Corner Website_",
    ]
    return encodeURIComponent(lines.join('\n'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(url, '_blank', 'noopener,noreferrer')
    }, 800)
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', service: '', message: '' })
    setErrors({})
  }

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-sm mx-auto">
          <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={38} className="text-green-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Enquiry Sent!</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Your enquiry was forwarded to WhatsApp. We'll get back to you shortly.
            If WhatsApp didn't open, tap the button below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-white/[0.05] border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
            >
              New Enquiry
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/15 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500/25 transition-all text-sm font-medium"
            >
              <MessageCircle size={15} />
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  // ── Form screen ──
  return (
    <div className="min-h-screen bg-transparent pt-16">
      {/* Page header */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#5b21b6]/10 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_30%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse" />
                Quick WhatsApp Enquiry
              </span>
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  Need prints, binding or documents? <span className="block bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">Get it done fast and flawlessly.</span>
                </h1>
                <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
                  Share your requirements and we will deliver a tailored quote, instant timeline, and student-friendly pricing via WhatsApp.
                  Perfect for students, professionals, and last-minute print orders.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Fast Response</p>
                  <p className="mt-3 text-lg font-semibold text-white">Ready within minutes</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Premium Print</p>
                  <p className="mt-3 text-lg font-semibold text-white">Xerox, binding, lamination</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-purple-300 font-semibold">Enquiry quick start</p>
                  <p className="mt-2 text-3xl font-black text-white">Fill just once</p>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-purple-500/15 text-purple-300">
                  <Send size={24} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/[0.04] p-5 border border-white/10">
                  <p className="text-sm text-gray-400">Preferred contact</p>
                  <p className="mt-2 text-white font-semibold">WhatsApp +91 81482 59753</p>
                </div>
                <div className="rounded-3xl bg-white/[0.04] p-5 border border-white/10">
                  <p className="text-sm text-gray-400">Best for</p>
                  <p className="mt-2 text-white font-semibold">Copies, printing, binding, scanning</p>
                </div>
                <div className="rounded-3xl bg-white/[0.04] p-5 border border-white/10">
                  <p className="text-sm text-gray-400">Order details</p>
                  <p className="mt-2 text-white font-semibold">Send file link or notes in message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <h2 className="text-3xl font-black text-white mb-4">Tell us exactly what you need</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Enter your details below and we’ll reply with the best quote, pickup location, and delivery timing. Use the message box to attach details like number of pages, paper size, and finish.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name <span className="text-purple-500">*</span>
                </label>
                <div className="relative">
                  <User
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-2xl text-white placeholder-gray-600 text-sm outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/10 focus:border-purple-500/60 focus:bg-purple-900/10'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number <span className="text-purple-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-2xl text-white placeholder-gray-600 text-sm outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/10 focus:border-purple-500/60 focus:bg-purple-900/10'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Service Required <span className="text-purple-500">*</span>
                </label>
                <div className="relative">
                  <FileText
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  />
                  <ChevronDown
                    size={15}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  />
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-10 py-3.5 border rounded-2xl text-sm outline-none transition-all appearance-none cursor-pointer ${
                      errors.service ? 'border-red-500/60' : 'border-white/10 focus:border-purple-500/60'
                    } ${form.service ? 'text-white' : 'text-gray-600'}`}
                    style={{ backgroundColor: '#111120' }}
                  >
                    <option value="" disabled style={{ backgroundColor: '#111120', color: '#6b7280' }}>
                      Select a service...
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        style={{ backgroundColor: '#111120', color: '#ffffff' }}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Additional Message <span className="text-gray-600 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us page count, paper size, binding type, and delivery preference..."
                  className="w-full px-4 py-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder-gray-600 text-sm outline-none focus:border-purple-500/60 focus:bg-purple-900/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-2xl shadow-purple-900/50 hover:shadow-purple-700/50 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle size={17} />
                    Send via WhatsApp
                  </>
                )}
              </button>
              <p className="text-gray-500 text-xs text-center mt-1">
                WhatsApp will open with your enquiry already filled in.
              </p>
            </form>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300 font-semibold mb-4">Why choose us</p>
              <div className="space-y-4">
                {[
                  { title: 'Fast turnaround', desc: 'Most orders ready in hours, not days.' },
                  { title: 'Student-friendly prices', desc: 'Affordable rates for all print jobs.' },
                  { title: 'Complete assistance', desc: 'From files to finishing, we handle it.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white/[0.03] border border-white/10 p-4">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-900/25 to-violet-900/15 p-6 shadow-2xl shadow-black/30">
              <p className="text-sm text-purple-300 uppercase tracking-[0.28em] font-semibold mb-4">Quick summary</p>
              <div className="space-y-3">
                <div className="rounded-3xl bg-black/60 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Service</p>
                  <p className="text-white font-semibold">Printing, binding, lamination</p>
                </div>
                <div className="rounded-3xl bg-black/60 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Delivery</p>
                  <p className="text-white font-semibold">Pickup & local drop-off</p>
                </div>
                <div className="rounded-3xl bg-black/60 p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Support</p>
                  <p className="text-white font-semibold">WhatsApp support anytime</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Upload files', value: 'Send your file details'},
              { label: 'Choose service', value: 'Select print, binding, lamination'},
              { label: 'Get quote', value: 'Receive price and timeline via WhatsApp'},
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg shadow-black/10">
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300 font-semibold mb-3">{item.label}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Enquiry
