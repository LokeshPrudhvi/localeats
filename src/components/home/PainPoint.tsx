import AnimatedSection from '../ui/AnimatedSection'

const stats = [
  { num: '70%', label: 'of customers research online before visiting a restaurant' },
  { num: '15–30%', label: 'taken by DoorDash & Uber Eats on every order' },
  { num: '3 sec', label: 'before a slow website visitor bounces — forever' },
]

export default function PainPoint() {
  return (
    <section className="bg-brand-dark py-24 md:py-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="section-padding relative z-10">
        <AnimatedSection>
          <p className="font-sans text-brand-orange font-semibold text-sm tracking-widest uppercase mb-4">
            The Hard Truth
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Your current website is quietly{' '}
            <span className="text-brand-orange">costing you customers</span>{' '}
            every single day.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-sans text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
            You're running a busy restaurant, cooking excellent food — but customers
            searching "restaurants near me" either can't find you, or land on an
            outdated website that sends them straight to your competitor.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={0.1 + i * 0.1}>
              <div className="bg-brand-dark/80 backdrop-blur-sm p-8 md:p-10 h-full">
                <div
                  className="font-display font-black text-brand-orange mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                >
                  {s.num}
                </div>
                <p className="font-sans text-white/60 text-base leading-snug">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-12">
          <p className="font-display font-bold text-white text-2xl md:text-3xl">
            We fix that.{' '}
            <span className="text-brand-orange">Fast.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
