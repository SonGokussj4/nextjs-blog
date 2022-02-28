import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[This is me, who else]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

// Dynamic navigation
// https://www.freecodecamp.org/news/dynamic-navigation-in-nextjs/

// Navbar
// https://www.freecodecamp.org/news/how-to-build-a-simple-navigation-bar-with-nextjs-and-styled-components-d9d8f9c8e8f9/
// https://www.gyanblog.com/javascript/next-js-bootstrap-template-navbar-header/