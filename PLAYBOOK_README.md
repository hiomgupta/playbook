# 📖 Playbook MVP

> An interactive music storytelling experience built with React, Vite, and Spotify

**Status:** Day 5/8 Complete - Ready for final polish & deployment

## 🎯 Overview

Playbook is a digital fan-created book experience celebrating Eminem's musical legacy. Users flip through pages to discover songs, read reflections, and play music directly from Spotify embeds.

## ✨ Features Implemented

### ✅ Core Experience
- **Interactive Cover** - Click to open book with linen texture and 3D effects
- **Smooth Page Flips** - Drag or click to flip pages with 600ms animations
- **Page-Turn Sounds** - Audio feedback on each page flip (70% volume)
- **Responsive Design** - Desktop-first, mobile-friendly layouts

### ✅ Content Spreads
- **About Page** - Artist bio with portrait
- **Chapters Page** - Table of contents with dotted-line styling
- **Song Pages** - 6 spreads with Spotify embeds + reflections
  - Lose Yourself
  - Stan
  - The Real Slim Shady
  - Without Me
  - Mockingbird
  - Not Afraid

### ✅ Spotify Integration
- Live Spotify embeds on each song page
- Play/pause directly in the book
- Track metadata displays

### ✅ Visual Design
- Handwritten Caveat font throughout
- CSS variables for consistent theming
- Linen texture with SVG filters
- CSS Modules for component scoping
- WEBP-optimized images

## 📁 Project Structure

```
playbook/
├── public/
│   ├── audio/
│   │   └── page-turn.wav         # 150ms page-turn sound
│   ├── images/
│   │   ├── lose-yourself.webp    # 6.0 KB
│   │   ├── stan.webp              # 5.1 KB
│   │   ├── slim-shady.webp        # 6.2 KB
│   │   ├── without-me.webp        # 3.9 KB
│   │   ├── mockingbird.webp       # 4.7 KB
│   │   ├── not-afraid.webp        # 4.1 KB
│   │   └── eminem-portrait.webp   # 1.8 KB
│   └── (fonts, icons, etc.)
│
├── src/
│   ├── components/
│   │   ├── App.jsx                # Root component
│   │   ├── BookShell/             # State root (isOpen, currentPage, audioUnlocked)
│   │   ├── CoverView/             # Landing page with click-to-open
│   │   ├── BookView/              # Page flip container
│   │   ├── AboutSpread/           # Artist bio page
│   │   ├── ChaptersSpread/        # Table of contents
│   │   ├── ContentSpread/         # Song pages with Spotify
│   │   ├── AudioController/       # Headless page-turn sound manager
│   │   ├── SpotifyController/     # Headless Spotify state manager
│   │   └── DummyPage/             # Reusable page template
│   │
│   ├── styles/
│   │   ├── global.css             # CSS variables + typography + reset
│   │   └── typography.css         # Caveat font setup
│   │
│   ├── content/
│   │   └── book.config.js         # All book data (songs, reflections, etc.)
│   │
│   └── main.jsx                   # React entry point
│
├── dist/                          # Production build (generated)
├── PRE_DEPLOY_CHECKLIST.md        # Deployment verification guide
└── README.md                      # This file
```

## 🚀 Development

### Setup
```bash
npm install
npm run dev
```

Open browser to `http://localhost:5174`

### Build for Production
```bash
npm run build
npm run preview  # Test production build locally
```

## 🎨 Design System

### Colors
- `--cover-linen`: #F5F1E8 (book cover background)
- `--page-off-white`: #FAF8F3 (page background)
- `--text-charcoal`: #3D3935 (main text)
- `--accent-burgundy`: #6B3C2C (highlights)

### Typography
- **Font**: Caveat (handwritten Google Font)
- **All sizes**: Caveat, no sans-serif UI
- **Line Height**: 1.4 (normal), 1.2 (tight)

### Spacing
- All components use consistent padding/gaps
- Responsive breakpoint: 768px

## 📊 Performance

### Bundle Sizes (Production)
- JavaScript: 242 KB (gzipped: 74.63 KB)
- CSS: 13 KB (gzipped: 2.84 KB)
- HTML: 0.45 KB (gzipped: 0.30 KB)
- **Total**: ~77 KB gzipped

### Image Optimization
- PNG → WEBP conversion: 21-48% smaller
- Total images: 36 KB (WEBP format)
- Responsive lazy-loading ready

## 🔧 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.2.4 |
| Build Tool | Vite | 8.0.0 |
| Page Flip | page-flip | latest |
| Styling | CSS Modules | (native) |
| Fonts | Google Fonts | Caveat |
| Audio | HTML5 | (native) |
| Hosting Target | Vercel | (static) |

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)

## 🎯 Next Steps (Days 6-8)

### Day 6: Final Polish
- [ ] Refine spacing and sizing
- [ ] Optimize font rendering
- [ ] Test edge cases
- [ ] Accessibility audit

### Day 7: Pre-Deploy Testing
- [ ] Test on 3+ browsers
- [ ] Test on mobile devices
- [ ] Performance audit (Lighthouse)
- [ ] A/B test page speeds

### Day 8: Deploy to Vercel
- [ ] Connect GitHub repo
- [ ] Set up production deployment
- [ ] Configure custom domain (optional)
- [ ] Monitor performance

## 📞 Contact & Attribution

**Created by:** GitHub Copilot with Claude Haiku 4.5  
**For:** Music fan experiencing Eminem's legacy  
**Tool:** Playbook MVP - Interactive Musical Storytelling

---

**Last Updated:** Day 5, March 13, 2026  
**Status:** ✅ Production-ready (pending final polish & deployment)
