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
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4 pt-16">
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
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* Page header */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-purple-800/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-purple-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Send an{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Enquiry
            </span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Fill in the details below and we'll instantly connect you via WhatsApp
            for a quick reply.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="max-w-lg mx-auto">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Full Name */}
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
                    className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/10 focus:border-purple-500/60 focus:bg-purple-900/10'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
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
                    className={`w-full pl-10 pr-4 py-3.5 bg-white/[0.05] border rounded-xl text-white placeholder-gray-700 text-sm outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500/60 focus:border-red-500'
                        : 'border-white/10 focus:border-purple-500/60 focus:bg-purple-900/10'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                )}
              </div>

              {/* Service Required */}
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
                    className={`w-full pl-10 pr-10 py-3.5 border rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer ${
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
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Additional Message{' '}
                  <span className="text-gray-600 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific requirements, quantities, or details..."
                  className="w-full px-4 py-3.5 bg-white/[0.05] border border-white/10 rounded-xl text-white placeholder-gray-700 text-sm outline-none focus:border-purple-500/60 focus:bg-purple-900/10 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-2xl shadow-purple-900/50 hover:shadow-purple-700/50 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
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

              <p className="text-gray-700 text-xs text-center">
                Submitting will open WhatsApp with your enquiry pre-filled.
              </p>
            </form>
          </div>

          {/* Direct contact pill */}
          <div className="mt-5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-green-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Prefer to message directly?</p>
              <a
                href="https://wa.me/918148259753"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm hover:text-green-300 transition-colors"
              >
                +91 81482 59753 — tap to open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Enquiry
