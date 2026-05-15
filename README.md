# LocalEats Digital

A marketing site for an independent-restaurant digital agency serving Princeton, McKinney, and Allen, TX.

## Stack
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS 3** (custom `brand` palette)
- **Framer Motion** for parallax, page transitions, scroll reveals, drag-to-scroll
- **React Router** for the 4-page SPA

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # serve the built site
```

## Project layout

```
src/
├── App.tsx               # Router + AnimatePresence page transitions
├── main.tsx              # Entry point
├── index.css             # Tailwind + fonts + custom scrollbar
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Hero, PainPoint, ServicesPreview, HowItWorks,
│   │                     # Testimonials, FinalCTA
│   └── ui/AnimatedSection.tsx
└── pages/                # Home, About, Services, Contact
```

## Brand palette
Defined in `tailwind.config.js`:

| Token             | Hex       | Use                              |
|-------------------|-----------|----------------------------------|
| `brand-dark`      | `#1A1A1A` | Body text, dark sections         |
| `brand-orange`    | `#E8531A` | Primary accent / CTAs            |
| `brand-green`     | `#1B4332` | Navbar, Tier 1 buttons           |
| `brand-cream`     | `#FAFAF7` | Page background                  |
| `brand-warm`      | `#F4EFE6` | Alternating section background   |
| `brand-amber`     | `#F5A623` | Star ratings                     |
| `brand-mid`       | `#8B5A3C` | Third testimonial avatar         |

Adjust any of these to retune the look in one place.
