import type { NextPage, GetStaticProps } from 'next'
import GraphQL from 'utils/GraphQL'
import type { Featured as FeaturedType, Post } from 'types'
import PostsList from 'components/PostsList'
import Layout from 'components/Layout'
import SearchBox from 'components/SearchBox'
import Featured from 'components/Featured'

interface Properties {
  posts: Post[],
  featured: FeaturedType,
}

const Home: NextPage<Properties> = ({ posts, featured }) => {
  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <SearchBox />
        <div className="w-full flex flex-row gap-4">
          <div className="w-3/4">
            <PostsList posts={posts} />
          </div>
          <div className="w-1/4">
            <Featured data={featured} />
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

export const getStaticProps: GetStaticProps = async () => {
  const { data: { posts, featured } } = await GraphQL.getClient().query<GetHomeContentQuery>({
    query: GraphQL.gql`
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
    `,
  })
  return {
    props: {
      featured,
      posts,
    },
  }
}