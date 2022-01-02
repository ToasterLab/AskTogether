import Layout from 'components/Layout'
import Response from 'components/Response'
import type {
  Post,
  Response as ResponseType,
  Tag as TagType,
  Organisation as OrganisationType,
} from 'types'
import type { GetStaticPaths, GetStaticProps } from 'next'
import GraphQL from 'utils/GraphQL'
import Date from 'utils/Date'
import { mdToHTML } from 'utils'
import Tag from 'components/Tag'
import Organisation from 'components/Organisation'


type Props = {
  post: Post,
  responses: ResponseType[],
}

const PostDetail: React.FC<Props> = ({ post, responses }) => {
  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <div className="flex flex-col gap-6">
          <div className="border rounded">
            <div className="px-4 py-3 bg-gray-100 flex flex-row items-center">
              <div className="text-gray-600">
                <time title={post.timestamp}>
                  {Date.humanise(post.timestamp)}
                </time>
              </div>
            </div>
            <div className="px-4 py-6">
              <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
              <div
                className="prose max-w-none text-black prose-p:my-2"
                dangerouslySetInnerHTML={{ __html: post.content }} />
              <div className="flex flex-row items-center gap-5 mt-6">
                <div className="flex flex-row">
                  {
                    post.organisations
                      ? (post.organisations as OrganisationType[]).map(
                          (org) => (<Organisation org={org} key={org.id} />),
                      ) : null
                  }
                </div>
                <div className="flex flex-row items-center gap-2">
                  {
                    post.tags
                      ? (post.tags as TagType[]).map(tag => (
                        <Tag tag={tag} key={tag.id} />
                      )) : null
                  }
                </div>
              </div>
              
            </div>
          </div>
          {
            responses.map(r => (
              <Response response={r} key={r.id} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if(!params){
    return { notFound: true }
  }
  const { id } = params
  const { data: { post, responses } } = await GraphQL.getClient().query<{
    post: Post,
    responses: ResponseType[],
  }>({
    query: GraphQL.gql`
      query GetPost($id: ID!) {
        post(id: $id) {
          id
          title
          content
          created_at
          timestamp
          to
          tags {
            id
            name
          }
          organisations {
            id
            name
            short_name
          }
        }
        responses(where: { post: { id: $id } }, sort: "timestamp:asc"){
          id
          title
          content
          post {
            id
          }
          timestamp
          from
          organisation {
            id
            name
          }
        }
      }
    `,
    variables: {
      id,
    },
  })
  return {
    props: {
      post: {
        ...post,
        content: mdToHTML(post.content),
      },
      responses: responses.map(r => ({
        ...r,
        content: mdToHTML(r.content),
      })),
    },
  }
}

type PostsQuery = {
  posts: Post[]
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { posts } } = await GraphQL.getClient().query<PostsQuery>({
    query: GraphQL.gql`
      query GetPosts {
        posts {
          id
        }
      }
    `,
  })
  return {
    fallback: `blocking`,
    paths: posts.map(({ id }) => ({
      params: { id },
    })),
  }
}