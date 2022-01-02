import type { NextPage, GetStaticProps } from 'next'
import GraphQL from 'utils/GraphQL'
import type { Featured as FeaturedType, Post } from 'types'
import PostsList from 'components/PostsList'
import Layout from 'components/Layout'
import SearchBox from 'components/SearchBox'
import Featured from 'components/Featured'
import Head from 'next/head'

interface Properties {
  posts: Post[],
  featured: FeaturedType,
}

const Home: NextPage<Properties> = ({ posts, featured }) => {
  const { loading, data, error } = GraphQL.useQuery(query)
  return (
    <Layout>
      <Head>
        <title>AskTogether | Home</title>
      </Head>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <SearchBox />
        <div className="w-full flex lg:flex-row flex-col gap-4">
          <div className="lg:w-3/4 w-full">
            <PostsList posts={(loading || error) ? posts : data.posts} />
          </div>
          <div className="lg:w-1/4 w-full">
            <Featured data={(loading || error) ? featured : data.featured} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

type GetHomeContentQuery = {
  posts: Post[],
  featured: FeaturedType,
}

const query = GraphQL.gql`
  query GetHomeContent {
    posts(sort: "timestamp:desc") {
      id
      title
      created_at
      timestamp
      organisations {
        id
        short_name
      }
      tags {
        id
        name
      }
    }

    featured {
      organisations {
        id
        short_name
      }
      tags {
        id
        name
      }
    }
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const { data: { posts, featured } } = await GraphQL.getClient().query<GetHomeContentQuery>({
    query,
  })
  return {
    props: {
      featured,
      posts,
    },
  }
}