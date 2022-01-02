import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GraphQL from 'utils/GraphQL'

function MyApp({ Component, pageProps }: AppProps) {
  const client = GraphQL.getClient()
  return (
    <GraphQL.Provider client={client}>
      <Component {...pageProps} />
    </GraphQL.Provider>
  )
}

export default MyApp
