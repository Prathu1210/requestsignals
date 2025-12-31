import "../styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* SEO Head Section - ENHANCED */}
      <Head>
        {/* Character Set */}
        <meta charSet="UTF-8" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#6f7bf7" />
        
        {/* PRIMARY META TAGS - ADD THESE */}
        <meta name="title" content="RequestSignals - LinkedIn Project Leads Platform" />
        <meta name="description" content="Connect with quality LinkedIn project leads. Get direct access to decision-makers looking for web, app, and digital services." />
        <meta name="keywords" content="LinkedIn leads, project leads, freelance clients, B2B leads, web development leads, digital marketing leads" />
        <meta name="author" content="RequestSignals" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        
        {/* Open Graph - Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RequestSignals" />
        <meta property="og:title" content="RequestSignals - LinkedIn Project Leads Platform" />
        <meta property="og:description" content="Connect with quality LinkedIn project leads. Get direct access to decision-makers." />
        <meta property="og:url" content="https://requestsignals.com" />
        <meta property="og:image" content="https://requestsignals.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="RequestSignals - LinkedIn Project Leads Platform" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RequestSignals - LinkedIn Project Leads Platform" />
        <meta name="twitter:description" content="Connect with quality LinkedIn project leads. Get direct access to decision-makers." />
        <meta name="twitter:image" content="https://requestsignals.com/og-image.png" />
        <meta name="twitter:site" content="@requestsignals" />
        <meta name="twitter:creator" content="@requestsignals" />
        
        {/* Additional SEO - Enhanced */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://requestsignals.com" />
        
        {/* Mobile Web App Capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* DNS Prefetch - Performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      {/* GA4 Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y66WTXV9XN"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y66WTXV9XN');
        `}
      </Script>

      {/* Main Content */}
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}