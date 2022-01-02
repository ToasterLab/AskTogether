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
import { mdToHTML, mdToText } from 'utils'
import Tag from 'components/Tag'
import Organisation from 'components/Organisation'
import { useRouter } from 'next/router'
import Head from 'next/head'


type Props = {
  post: Post,
  responses: ResponseType[],
}

const PostDetail: React.FC<Props> = ({ post, responses }) => {
  const { query: { id } } = useRouter()
  const { loading, data, error } = GraphQL.useQuery<GetPostQueryType>(query, {
    variables: { id },
  })

  const p = (loading || error || !data) ? post : (data as GetPostQueryType)?.post
  const r = (loading || error || !data) ? responses : (data as GetPostQueryType)?.responses
  return (
    <Layout>
      <Head>
        <title>AskTogether | {p.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={p.title} />
        <meta property="og:url" content={`https://ask.tgt.sg/post/${p.id}`} />
        <meta property="og:description" content={mdToText(p.content).slice(0, 199)+`…`} />
        <meta property="article:published_time" content={p.timestamp} />
        {p.tags && <meta property="article:tag" content={(p.tags as TagType[]).map(t => t.name).join(`,`)} />}
      </Head>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <div className="flex flex-col gap-6">
          <div className="border rounded">
            <div className="px-4 py-3 bg-gray-100 flex flex-row items-center">
              <div className="text-gray-600">
                <time title={p.timestamp}>
                  {Date.humanise(p.timestamp)}
                </time>
              </div>
            </div>
            <div className="px-4 py-6">
              <h1 className="text-3xl font-extrabold mb-4">{p.title}</h1>
              <div
                className="prose max-w-none text-black prose-p:my-2"
                dangerouslySetInnerHTML={{ __html: mdToHTML(p.content) }} />
              <div className="flex flex-row items-center gap-5 mt-6">
                <div className="flex flex-row">
                  {
                    p.organisations
                      ? (p.organisations as OrganisationType[]).map(
                          (org) => (<Organisation org={org} key={org.id} />),
                      ) : null
                  }
                </div>
                <div className="flex flex-row items-center gap-2">
                  {
                    p.tags
                      ? (p.tags as TagType[]).map(tag => (
                        <Tag tag={tag} key={tag.id} />
                      )) : null
                  }
                </div>
              </div>
              
            </div>
          </div>
          {
            r.map(res => (
              <Response response={res} key={res.id} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail

type GetPostQueryType = {
  post: Post,
  responses: ResponseType[],
}

const query = GraphQL.gql`
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
`

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if(!params){
    return { notFound: true }
  }
  const { id } = params
  const { data: { post, responses } } = await GraphQL.getClient().query<GetPostQueryType>({
    query,
    variables: {
      id,
    },
  })
  return {
    props: {
      post,
      responses,
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