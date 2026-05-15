import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const steps = [
  {
    num: '01',
    title: 'You Text Us',
    desc: 'Call or message us. Tell us about your restaurant — takes two minutes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Free 15-Min Review',
    desc: "We check your Google listing and website, show you exactly what's missing — for free.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'We Build It',
    desc: 'Pick Tier 1 or Tier 2. Send us your logo, menu, and food photos. We handle everything else.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'We Launch + Support',
    desc: 'New site goes live in 10–14 days. We train you and give you 30 days of free support.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'You Get More Customers',
    desc: 'More people find you online. More direct orders. More Google reviews rolling in.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-brand-warm overflow-hidden">
      <div className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">
            The Process
          </p>
          <h2
            className="font-display font-bold text-brand-dark leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            How It Works —{' '}
            <span className="text-brand-green">Dead Simple</span>
          </h2>
        </AnimatedSection>

        {/* Desktop: horizontal line with steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-stone-200 z-0" style={{ top: '2.5rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col items-center text-center md:items-start md:text-left group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-stone-200 flex flex-col items-center justify-center mb-5 shadow-sm group-hover:border-brand-orange group-hover:shadow-md transition-all duration-300 relative">
                  <div className="text-brand-orange mb-0.5">{step.icon}</div>
                  <span className="font-sans font-bold text-stone-300 text-xs leading-none">{step.num}</span>
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-stone-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
