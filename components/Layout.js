import Head from 'next/head'
import Header from './Header'
import Search from './Search'
import Footer from '@/components/Footer'
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />

      </Head>

      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
 
 
      <Footer></Footer>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to Gareth Davies Blog',
  keywords: 'Railway, Trains, Web design, Coding',
  description: 'The blog for Gareth Davies',
}
