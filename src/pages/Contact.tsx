import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'

const CONTACT_IMG = 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1920&q=80'

export default function Contact() {
  const [form, setForm] = useState({ name: '', restaurant: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <div className="relative h-[45vh] min-h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={CONTACT_IMG} alt="Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/65 to-brand-dark/25" />
        </div>
        <div className="relative z-10 section-padding pb-14 pt-28">
          <motion.p
            className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Talk
          </motion.p>
          <motion.h1
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Main */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Left: Contact info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-brand-dark text-3xl mb-3">
                    Stop losing customers to a crappy website.
                  </h2>
                  <p className="font-sans text-stone-500 text-base leading-relaxed">
                    If you own an independent restaurant or diner in Princeton, McKinney, or
                    Allen, we want to hear from you. Even if you just want us to look at your
                    current website and give honest feedback — for free — reach out.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:4692615679"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200 group-hover:scale-105 transition-transform duration-200">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-sans text-stone-400 text-xs tracking-widest uppercase font-medium">Phone / Text</div>
                      <div className="font-display font-bold text-brand-dark text-2xl group-hover:text-brand-orange transition-colors duration-200">(469) 261-5679</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:Pavanc1783@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200 group-hover:scale-105 transition-transform duration-200">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-sans text-stone-400 text-xs tracking-widest uppercase font-medium">Email</div>
                      <div className="font-display font-bold text-brand-dark text-xl group-hover:text-brand-orange transition-colors duration-200">Pavanc1783@gmail.com</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-sans text-stone-400 text-xs tracking-widest uppercase font-medium">Serving</div>
                      <div className="font-sans font-semibold text-brand-dark text-base">Princeton · McKinney · Allen, TX</div>
                    </div>
                  </div>
                </div>

                {/* Reply note */}
                <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl px-6 py-4">
                  <p className="font-sans text-brand-dark text-sm leading-relaxed">
                    <strong>We usually reply the same day.</strong> Worst case, within 24 hours.
                    Let's make your food look as good online as it tastes in real life.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right">
              {submitted ? (
                <motion.div
                  className="bg-white rounded-3xl border border-stone-200 p-10 text-center h-full flex flex-col items-center justify-center shadow-sm"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-2xl mb-3">Message Sent!</h3>
                  <p className="font-sans text-stone-500 text-base leading-relaxed">
                    We got your message and will be in touch within a few hours.
                    In the meantime, feel free to text us directly at (469) 261-5679.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-stone-200 p-8 md:p-10 shadow-sm space-y-5"
                >
                  <h3 className="font-display font-bold text-brand-dark text-2xl mb-2">Send a Message</h3>
                  <p className="font-sans text-stone-400 text-sm mb-4">No complicated forms. Just the basics.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-stone-600 text-sm font-medium mb-1.5" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full font-sans text-stone-700 text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 placeholder:text-stone-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-stone-600 text-sm font-medium mb-1.5" htmlFor="restaurant">
                        Restaurant Name
                      </label>
                      <input
                        id="restaurant"
                        name="restaurant"
                        type="text"
                        required
                        value={form.restaurant}
                        onChange={handleChange}
                        placeholder="Maria's Tacos"
                        className="w-full font-sans text-stone-700 text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 placeholder:text-stone-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-stone-600 text-sm font-medium mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(214) 000-0000"
                      className="w-full font-sans text-stone-700 text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 placeholder:text-stone-300"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-stone-600 text-sm font-medium mb-1.5" htmlFor="message">
                      Tell us about your restaurant
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's your biggest online challenge right now?"
                      className="w-full font-sans text-stone-700 text-sm border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 placeholder:text-stone-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-brand-orange text-white font-sans font-bold text-base py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>

                  <p className="font-sans text-stone-300 text-xs text-center">
                    Or just text us directly — (469) 261-5679
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
