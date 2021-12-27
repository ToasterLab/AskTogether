import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { GRAPHQL_URI } from './Constants'

const config = {
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
}

const getClient = () => {
  return new ApolloClient(config)
}

export default {
  getClient,
  gql,
}