import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* GA4 */}
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

      {/* Header */}
      <Header />

      {/* Page Content */}
      <Component {...pageProps} />

      {/* Footer */}
      <Footer />
    </>
  );
}
