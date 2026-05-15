import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/ui/AnimatedSection'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80'
const TEAM_IMG   = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80'

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Results',
    desc: 'Your new site goes live in 10–14 days. No slow agency timelines.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a2 2 0 014-4z" />
      </svg>
    ),
    title: 'Clear Pricing',
    desc: 'Two packages, two prices. No hourly billing, no surprise invoices.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real Value',
    desc: 'Our Tier 2 clients consistently recover their investment in month one from saved delivery commissions.',
  },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="Restaurant food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-brand-dark/30" />
        </div>
        <div className="relative z-10 section-padding pb-14 pt-28">
          <motion.p
            className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Who We Are
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-brand-cream">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="font-display font-bold text-brand-dark text-3xl mb-4">Hi, I’m Pavan — Founder of LocalPresence Digital.</h2>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  I have a Master’s degree in Engineering and spent many years working as an IT Architect for big corporations. I was designing complex systems, managing big teams, and building digital stuff for companies that throw around millions of dollars like it’s nothing.
                </p>
                <div className="pl-6 border-l-4 border-brand-orange py-2 my-6">
                  <p className="font-sans text-brand-dark text-xl leading-relaxed italic font-medium">
                    “Why the hell are small local businesses in Princeton, McKinney, and Allen still stuck with websites that look like they were built in 2008 on a dial-up connection?”
                  </p>
                </div>
                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                  While big corporations get fancy custom solutions, hardworking restaurant owners, motel operators, and shop owners are out here losing customers every day because their Google listing looks abandoned and their website crashes on mobile.
                </p>
                <p className="font-sans text-stone-600 text-lg leading-relaxed font-semibold text-brand-dark">
                  So I left the corporate world (and its endless meetings) to start LocalPresence Digital.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={TEAM_IMG}
                  alt="Founder"
                  className="rounded-3xl w-full aspect-[4/3] object-cover shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-brand-orange text-white rounded-2xl px-6 py-5 shadow-xl">
                  <div className="font-display font-black text-2xl">100%</div>
                  <div className="font-sans text-white/90 text-sm font-medium">Local Focus</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="font-display font-bold text-brand-dark text-2xl md:text-3xl mb-6">
              My mission is simple and a bit rebellious:
            </h3>
            <p className="font-sans text-stone-600 text-xl leading-relaxed">
              Help real small business owners in North Texas get a professional, effective, and actually useful digital presence — <strong className="text-brand-orange">without paying ridiculous agency prices or signing scary contracts.</strong>
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-dark text-lg mb-3">Enterprise Experience</h4>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">My enterprise-level technical experience building systems that actually work.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-dark text-lg mb-3">Local Understanding</h4>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">Real understanding of local business struggles like tight margins, hot kitchens, and weekend crowds.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-brand-dark text-lg mb-3">No-BS Solutions</h4>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">Straightforward solutions. We don’t build "beautiful" websites that nobody visits.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" className="max-w-4xl mx-auto">
            <div className="bg-brand-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 space-y-6">
                <p className="font-sans text-white/90 text-lg md:text-xl leading-relaxed">
                  We build clean, fast, mobile-friendly digital systems that help customers find you, trust you, and actually buy from you.
                </p>
                <p className="font-sans text-white/80 text-lg leading-relaxed">
                  Whether you run a restaurant that makes killer food, a motel that deserves more direct bookings, a repair shop that’s always busy, or any other local business — we make sure your online presence works as hard as you do in real life.
                </p>
                
                <div className="py-6 my-8 border-y border-white/10">
                  <p className="font-display font-bold text-2xl md:text-3xl text-white">
                    Corporate brain. Local heart. <span className="text-brand-orange">Zero fluff.</span>
                  </p>
                </div>
                
                <p className="font-sans text-white text-xl font-medium">
                  If you’re tired of losing customers to a crappy website, you’re in the right place.
                  <br className="hidden md:block"/> Let’s fix that together.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-warm">
        <div className="section-padding">
          <AnimatedSection className="text-center mb-14">
            <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">Why Us</p>
            <h2
              className="font-display font-bold text-brand-dark"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              That's why we keep everything{' '}
              <span className="text-brand-green">dead simple</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-xl mb-3">{v.title}</h3>
                  <p className="font-sans text-stone-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-center">
        <div className="section-padding">
          <AnimatedSection>
            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Local. Honest. Built for real restaurant owners.
            </h2>
            <p className="font-sans text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Ready to make your food look as good online as it tastes in real life?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:4692615679"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-sans font-bold px-8 py-4 rounded-full shadow-xl shadow-orange-900/30 hover:bg-orange-600 transition-colors duration-200"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Call (469) 261-5679
              </motion.a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-sans font-semibold px-8 py-4 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                View Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
