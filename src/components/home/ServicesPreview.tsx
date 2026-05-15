import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'

const tier1Features = [
  'Clean, fast, mobile-friendly website with full menu',
  'Google Business Profile fully optimized',
  'Facebook & Instagram pages made professional',
  '30 days of free updates — no extra charge',
]

const tier2Features = [
  'Everything in Tier 1',
  'Direct online ordering (keep 100% of every order)',
  'Smart Review QR code for your tables',
  '3 months of maintenance + monthly reports',
]

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <div className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">
            Our Packages
          </p>
          <h2
            className="font-display font-bold text-brand-dark leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Two Simple Packages.{' '}
            <span className="text-brand-orange">Zero Bullshit.</span>
          </h2>
          <p className="font-sans text-stone-500 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            No long contracts. No hidden monthly fees. Just results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <AnimatedSection delay={0.1} direction="left">
            <motion.div
              className="relative bg-white rounded-3xl border border-stone-200 p-8 md:p-10 h-full flex flex-col shadow-sm hover:shadow-xl"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className="inline-block font-sans font-semibold text-brand-green text-xs tracking-widest uppercase bg-green-50 px-3 py-1 rounded-full border border-green-100 mb-4">
                  Tier 1
                </span>
                <h3 className="font-display font-bold text-brand-dark text-2xl md:text-3xl mb-2">
                  Look Good Online
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display font-black text-brand-dark text-4xl">$1,500</span>
                  <span className="font-sans text-stone-400 text-sm">one-time</span>
                </div>
                <p className="font-sans text-stone-500 text-sm leading-relaxed">
                  Your current website is quietly costing you customers. We fix that fast.
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier1Features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-sans text-stone-600 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block text-center font-sans font-bold text-brand-green border-2 border-brand-green px-6 py-3.5 rounded-full hover:bg-brand-green hover:text-white transition-all duration-200"
              >
                Get Started
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Tier 2 */}
          <AnimatedSection delay={0.2} direction="right">
            <motion.div
              className="relative bg-brand-dark rounded-3xl p-8 md:p-10 h-full flex flex-col shadow-2xl shadow-brand-dark/30"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Most Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white font-sans font-bold text-xs px-4 py-1.5 rounded-full shadow-lg shadow-orange-900/30">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most Popular
                </span>
              </div>

              <div className="mb-6 mt-2">
                <span className="inline-block font-sans font-semibold text-brand-orange text-xs tracking-widest uppercase bg-brand-orange/20 px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
                  Tier 2
                </span>
                <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-2">
                  Make More Money
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display font-black text-white text-4xl">$3,000</span>
                  <span className="font-sans text-white/40 text-sm">one-time</span>
                </div>
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  The features that actually bring in extra revenue — starting month one.
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier2Features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-sans text-white/75 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block text-center font-sans font-bold text-white bg-brand-orange px-6 py-3.5 rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-900/30"
              >
                Get Started
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-sans font-semibold text-brand-green hover:text-brand-orange transition-colors duration-200 text-sm"
          >
            Compare packages in detail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
