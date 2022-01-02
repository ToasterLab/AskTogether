import React from 'react'
import Layout from 'components/Layout'

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <h1 className="text-xl font-semibold mb-4">About AskTogether</h1>
        <p>
          AskTogether is a platform for sharing information about organisations in Singapore.
          People use AskTogether to find answers that can't be found on organisations' websites.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage