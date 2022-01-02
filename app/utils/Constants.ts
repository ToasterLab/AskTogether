// note that env variables are only accessible from Node.JS by default

export const GRAPHQL_URI: string = process.env.NEXT_PUBLIC_GRAPHQL_URI || ``
export const STRAPI_URI = process.env.NEXT_PUBLIC_STRAPI_URI
