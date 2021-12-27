import Header from 'components/Header'
import React from 'react'
import Footer from 'components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout