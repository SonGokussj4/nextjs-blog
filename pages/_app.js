import '../styles/global.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
