import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-brand-green relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-dark/50 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="section-padding relative z-10 text-center">
        <AnimatedSection>
          <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-5">
            Ready To Grow?
          </p>
          <h2
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Ready to stop losing customers<br />to your own website?
          </h2>
          <p className="font-sans text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
            We usually reply the same day — often within a few hours.
            Let's make your food look as good online as it tastes in real life.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <motion.a
            href="tel:4692615679"
            className="inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="bg-white/10 border border-white/20 rounded-full p-4 group-hover:bg-brand-orange/20 transition-colors duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-sans text-white/60 text-xs tracking-widest uppercase">Text or Call</div>
              <div className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                (469) 261-5679
              </div>
            </div>
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="font-sans font-semibold text-white border-2 border-white/30 px-6 py-3 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-200"
          >
            Or send a message →
          </Link>
        </AnimatedSection>

        {/* Badges */}
        <AnimatedSection delay={0.35} className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: '⚡', text: 'Done in 10–14 days' },
            { icon: '🔒', text: 'No long contracts' },
            { icon: '💸', text: 'No hidden fees' },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span className="text-xl">{b.icon}</span>
              <span className="font-sans text-white/60 text-sm">{b.text}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
