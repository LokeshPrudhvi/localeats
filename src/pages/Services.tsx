import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/ui/AnimatedSection'

const SERVICES_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80'

const tier1 = [
  { text: 'Clean, fast, mobile-friendly website with your full menu done properly' },
  { text: 'Google Business Profile fully optimized (rank for "restaurants near me" & "food near me")' },
  { text: 'Facebook & Instagram pages cleaned up and made professional' },
  { text: '30 days of free updates — add new dishes, change hours, fix anything' },
]

const tier2 = [
  { text: 'Everything in Tier 1' },
  { text: 'Direct online ordering system — customers order from your site, you keep 100% of every payment' },
  { text: 'Smart Review QR code for tables — drives 5-star Google reviews and collects customer phone numbers' },
  { text: '3 months of maintenance + simple monthly report showing new customers and orders' },
]

const process = [
  { step: '01', title: 'You reach out', desc: 'Text or call — we reply same day.' },
  { step: '02', title: 'Free 15-min review', desc: 'We audit your current Google listing and website.' },
  { step: '03', title: 'We build it', desc: 'Send us your logo, menu, photos. We handle the rest.' },
  { step: '04', title: 'Launch in ~2 weeks', desc: 'Go live with 30 days or 3 months of free support.' },
]

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICES_IMG} alt="Restaurant interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-brand-dark/20" />
        </div>
        <div className="relative z-10 section-padding pb-14 pt-28">
          <motion.p
            className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.p>
          <motion.h1
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Services & Pricing
          </motion.h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-brand-cream">
        <div className="section-padding text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-sans text-stone-500 text-lg leading-relaxed">
              Your food deserves better than that ancient website. Let's be honest —
              most restaurant websites look like they were designed by someone who's
              never stepped foot in a real kitchen. We fix that.
            </p>
            <p className="font-sans text-stone-500 text-lg leading-relaxed mt-4">
              We only offer two clear packages made specifically for busy local
              restaurant owners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-brand-warm">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm h-full flex flex-col">
                <div className="bg-brand-green px-8 py-8">
                  <span className="font-sans text-white/60 text-xs font-semibold tracking-widest uppercase">Tier 1</span>
                  <h2 className="font-display font-bold text-white text-3xl mt-1 mb-3">Look Good Online</h2>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-white text-5xl">$1,500</span>
                    <span className="font-sans text-white/50 text-sm">one-time</span>
                  </div>
                </div>
                <div className="px-8 py-8 flex-1 flex flex-col">
                  <p className="font-sans text-stone-500 text-sm leading-relaxed mb-6">
                    Your current website is quietly costing you customers every day. We fix that fast.
                  </p>
                  <ul className="space-y-4 flex-1 mb-8">
                    {tier1.map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-sans text-stone-600 text-sm leading-snug">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center font-sans font-bold text-brand-green border-2 border-brand-green px-6 py-3.5 rounded-full hover:bg-brand-green hover:text-white transition-all duration-200"
                  >
                    Get Started with Tier 1
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Tier 2 */}
            <AnimatedSection direction="right">
              <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/30 h-full flex flex-col relative">
                <div className="absolute top-5 right-5">
                  <span className="bg-brand-orange text-white font-sans font-bold text-xs px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="bg-brand-orange/20 border-b border-white/10 px-8 py-8">
                  <span className="font-sans text-white/60 text-xs font-semibold tracking-widest uppercase">Tier 2</span>
                  <h2 className="font-display font-bold text-white text-3xl mt-1 mb-3">Make More Money</h2>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-white text-5xl">$3,000</span>
                    <span className="font-sans text-white/50 text-sm">one-time</span>
                  </div>
                </div>
                <div className="px-8 py-8 flex-1 flex flex-col">
                  <p className="font-sans text-white/60 text-sm leading-relaxed mb-6">
                    Everything in Tier 1 plus the tools that actually bring in more revenue.
                  </p>
                  <ul className="space-y-4 flex-1 mb-8">
                    {tier2.map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-sans text-white/75 text-sm leading-snug">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center font-sans font-bold text-white bg-brand-orange px-6 py-3.5 rounded-full hover:bg-orange-600 transition-colors duration-200"
                  >
                    Get Started with Tier 2
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <p className="font-sans text-stone-400 text-sm">
              Done in 2 weeks or less · No long contracts · No hidden monthly fees
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process mini-section */}
      <section className="py-20 bg-brand-cream">
        <div className="section-padding">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-bold text-brand-dark text-3xl md:text-4xl">
              How we get it done
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="font-display font-black text-brand-orange/20 text-6xl leading-none mb-3">{p.step}</div>
                  <h3 className="font-display font-bold text-brand-dark text-lg mb-2">{p.title}</h3>
                  <p className="font-sans text-stone-500 text-sm leading-snug">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-orange text-center">
        <div className="section-padding">
          <AnimatedSection>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              Your restaurant. Your rules. Just better online.
            </h2>
            <p className="font-sans text-white/80 text-lg mb-8">
              Let's talk — free 15-minute review, no obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:4692615679"
                className="inline-flex items-center gap-2 bg-white text-brand-orange font-sans font-bold px-8 py-4 rounded-full shadow-xl hover:bg-orange-50 transition-colors duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Call (469) 261-5679
              </motion.a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Send a Message
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
