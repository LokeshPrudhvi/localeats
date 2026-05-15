import { useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const RESTAURANT_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'

const testimonials = [
  {
    quote: 'We went from almost invisible on Google to showing up on the first page. The new website looks amazing and the online ordering is saving us money every week. Best decision we made this year.',
    name: 'Maria R.',
    role: "Owner, Rivera's Salva Tex Mex",
    location: 'Princeton, TX',
    initials: 'MR',
    color: 'bg-brand-orange',
  },
  {
    quote: "The Review QR code is genius. We're getting way more Google reviews now. Our Tier 2 package paid for itself in the first month.",
    name: 'John D.',
    role: "Owner, Jocy's Restaurant",
    location: 'Princeton, TX',
    initials: 'JD',
    color: 'bg-brand-green',
  },
  {
    quote: 'Finally have a website that looks professional on phones. Customers keep telling us how easy it is to find us now. Highly recommend.',
    name: 'Carlos M.',
    role: 'Owner',
    location: 'McKinney, TX',
    initials: 'CM',
    color: 'bg-brand-mid',
  },
]

export default function Testimonials() {
  const constraintRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_IMG}
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/90" />
      </div>

      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-14">
          <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">
            Results That Speak
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Real Restaurants.{' '}
            <span className="text-brand-orange">Real Results.</span>
          </h2>
        </AnimatedSection>

        {/* Cards — draggable on mobile */}
        <div ref={constraintRef} className="overflow-hidden -mx-6 md:mx-0">
          <motion.div
            className="flex md:grid md:grid-cols-3 gap-6 px-6 md:px-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintRef}
            dragElastic={0.1}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 md:p-8 flex-shrink-0 w-[85vw] md:w-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array(5).fill(0).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-white/85 text-base leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-bold text-white text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-white text-sm">{t.name}</div>
                    <div className="font-sans text-white/50 text-xs">{t.role} · {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="font-sans text-white/40 text-sm">Drag to scroll on mobile</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
