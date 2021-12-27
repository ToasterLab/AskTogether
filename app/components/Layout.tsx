import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-700">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout