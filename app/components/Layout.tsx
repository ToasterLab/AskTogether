import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="text-gray-700">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout