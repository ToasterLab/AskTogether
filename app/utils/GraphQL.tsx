import { ApolloClient, InMemoryCache, gql, useQuery, ApolloProvider } from '@apollo/client'
import { GRAPHQL_URI } from './Constants'

const config = {
  cache: new InMemoryCache(),
  ssrMode: typeof window === `undefined`,
  uri: GRAPHQL_URI,
}

const getClient = () => {
  return new ApolloClient(config)
}

const GraphQL = {
  Provider: ApolloProvider,
  getClient,
  gql,
  useQuery,
}

export default GraphQL