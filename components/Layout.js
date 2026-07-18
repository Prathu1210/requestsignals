import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title = "Request Signals",
  description = "Real service requests from LinkedIn, Reddit, X, Facebook, and Instagram",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
