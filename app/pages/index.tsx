import type { NextPage, GetStaticProps } from 'next'
import Header from 'components/Header'
import GraphQL from 'utils/GraphQL'
import type { Post } from 'types'
import PostsList from 'components/PostsList'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="container max-w-screen-lg mx-auto px-4 mt-8 mb-8">
        <PostsList posts={posts} />
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data: { posts } } = await GraphQL.getClient().query({
    query: GraphQL.gql`
      query GetPosts {
        posts {
          id
          title
          content
          created_at
          author {
            id
            username
          }
          organisations {
            id
            name
            logo {
              url
            }
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