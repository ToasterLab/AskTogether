import type { NextPage, GetStaticProps } from 'next'
import GraphQL from 'utils/GraphQL'
import type { Post } from 'types'
import PostsList from 'components/PostsList'
import Layout from 'components/Layout'
import SearchBox from 'components/SearchBox'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <SearchBox />
        <PostsList posts={posts} />
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data: { posts } } = await GraphQL.getClient().query({
    query: GraphQL.gql`
      query GetPosts {
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
      }
    `
  })
  return {
    props: {
      posts,
    },
  }
}