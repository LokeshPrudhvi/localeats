import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="Local Presence Digital Logo" className="w-10 h-10 object-contain bg-white rounded-xl shadow-md p-0.5" />
              <div>
                <span className="font-display font-bold text-white text-lg block leading-none">Local Presence</span>
                <span className="font-sans text-white/50 text-xs tracking-widest uppercase leading-none">Digital</span>
              </div>
            </div>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-xs">
              Simple but powerful digital presence for local businesses in Princeton, McKinney, and Allen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home',     to: '/' },
                { label: 'About',    to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Contact',  to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-brand-orange font-sans text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:4692615679"
                  className="text-white/60 hover:text-brand-orange font-sans text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (469) 261-5679
                </a>
              </li>
              <li>
                <a
                  href="mailto:Pavanc1783@gmail.com"
                  className="text-white/60 hover:text-brand-orange font-sans text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Pavanc1783@gmail.com
                </a>
              </li>
              <li className="text-white/60 font-sans text-sm flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Princeton, McKinney & Allen, TX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-sans text-xs">
            © {new Date().getFullYear()} Local Presence Digital. All rights reserved.
          </p>
          <p className="text-white/40 font-sans text-xs">
            Built for real small business owners. No agencies. No fluff.
          </p>
        </div>
      </div>
    </footer>
  )
}
