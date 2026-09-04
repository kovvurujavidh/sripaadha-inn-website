# SriPaadha Inn — Hotel Website

A premium, mobile-first single-page website for SriPaadha Inn, a 3-star hotel in Kanipakam, Andhra Pradesh, India.

## Features

- **Mobile-first responsive design** with floating CTA bar on mobile
- **Smooth scroll-reveal animations** with reduced-motion support
- **English language** with proper SEO metadata and structured data
- **Interactive gallery** with keyboard-navigable lightbox
- **Enquiry form** with validation and simulated submission
- **Google Maps integration** for location
- **Active navigation tracking** with section highlighting
- **Accessibility** features including focus-visible, semantic HTML, and ARIA labels

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (sans-serif) + Playfair Display (serif) via `next/font/google`
- **Icons**: Lucide React
- **Animations**: Custom CSS keyframes + IntersectionObserver

## Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, CSS variables, animations
│   ├── layout.tsx       # Root layout with fonts, SEO, structured data
│   ├── page.tsx         # Main page composing all sections
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx       # Fixed navigation with mobile menu
│   ├── Hero.tsx         # Full-screen hero section
│   ├── About.tsx        # Hotel introduction and features
│   ├── Rooms.tsx        # Room types and amenities
│   ├── Amenities.tsx    # Hotel facilities grid
│   ├── Gallery.tsx      # Photo gallery with lightbox
│   ├── Reviews.tsx      # Google rating and breakdown
│   ├── Location.tsx     # Map and contact details
│   ├── Enquiry.tsx      # Contact form
│   ├── Footer.tsx       # Site footer
│   ├── MobileCTA.tsx    # Fixed mobile call-to-action bar
│   └── ScrollReveal.tsx # Scroll animation wrapper
└── lib/
    └── utils.ts         # Utility functions (cn)
```

## Business Information

- **Name**: SriPaadha Inn
- **Type**: 3-star hotel
- **Location**: Brahmin Street, beside Main Temple & Bus Stand, Kanipakam, AP 517131
- **Phone**: 092988 55551
- **Rating**: 4.1/5 from 528 Google Reviews
- **Amenities**: Free Wi-Fi, free breakfast, parking, A/C, laundry service

## Deployment

This is a standard Next.js application that can be deployed to any platform that supports Node.js:

- **Vercel**: Zero-config deployment
- **Netlify**: Supports Next.js with the adapter
- **Docker**: Standard Node.js container
- **Traditional hosting**: Run `npm run build` then `npm run start`

## License

Private project for SriPaadha Inn.
