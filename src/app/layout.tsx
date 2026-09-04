import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sripaadha-inn.in"),
  title: {
    default: "SriPaadha Inn — 3-Star Hotel in Kanipakam, Andhra Pradesh",
    template: "%s | SriPaadha Inn",
  },
  description:
    "SriPaadha Inn is a 3-star hotel beside the Main Temple & Bus Stand in Kanipakam, Andhra Pradesh. Free Wi-Fi, free breakfast, parking, and air conditioning. Rated 4.1/5 on Google.",
  keywords: [
    "SriPaadha Inn",
    "Kanipakam hotel",
    "hotel near Kanipakam temple",
    "Kanipakam accommodation",
    "3 star hotel Kanipakam",
    "hotel near Kanipakam temple",
    "Kanipakam Andhra Pradesh hotel",
    "budget hotel Kanipakam",
    "hotel near bus stand Kanipakam",
    "temple stay Kanipakam",
  ],
  authors: [{ name: "SriPaadha Inn" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sripaadha-inn.in",
    siteName: "SriPaadha Inn",
    title: "SriPaadha Inn — 3-Star Hotel in Kanipakam, Andhra Pradesh",
    description:
      "3-star hotel beside the Main Temple & Bus Stand in Kanipakam. Free Wi-Fi, free breakfast, parking, and air conditioning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SriPaadha Inn — 3-Star Hotel in Kanipakam",
    description:
      "3-star hotel beside the Main Temple & Bus Stand in Kanipakam, Andhra Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sripaadha-inn.in",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "SriPaadha Inn",
  description:
    "A 3-star hotel beside the Main Temple & Bus Stand in Kanipakam, Andhra Pradesh. Free Wi-Fi, free breakfast, parking, and air conditioning.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brahmin Street, beside Main Temple & Bus Stand",
    addressLocality: "Kanipakam",
    addressRegion: "Andhra Pradesh",
    postalCode: "517131",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.2796,
    longitude: 79.027,
  },
  telephone: "+919298855551",
  url: "https://sripaadha-inn.in",
  starRating: {
    "@type": "Rating",
    ratingValue: 4.1,
    bestRating: 5,
    ratingCount: 528,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Free Wi-Fi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free Breakfast",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laundry Service",
      value: true,
    },
  ],
  hasMap: "https://maps.google.com/?q=72HP+22+Kanipakam",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.1,
    bestRating: 5,
    ratingCount: 528,
    reviewCount: 528,
  },
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "SriPaadha Inn",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Brahmin Street, beside Main Temple & Bus Stand",
    addressLocality: "Kanipakam",
    addressRegion: "Andhra Pradesh",
    postalCode: "517131",
    addressCountry: "IN",
  },
  telephone: "+919298855551",
  url: "https://sripaadha-inn.in",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.2796,
    longitude: 79.027,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.1,
    bestRating: 5,
    ratingCount: 528,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
