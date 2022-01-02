import Layout from 'components/Layout'
import PostsList from 'components/PostsList'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Tag as TagType, Post} from 'types'
import GraphQL from 'utils/GraphQL'

type Props = {
  tag: TagType,
  posts: Post[],
}

const Tag: React.FC<Props> = ({ tag, posts }) => {
  const { query: { id } } = useRouter()
  const { loading, data, error } = GraphQL.useQuery<GetTagQueryType>(query, {
    variables: { id },
  })

  const t = (loading || error || !data) ? tag : (data as GetTagQueryType)?.tag
  const p = (loading || error || !data) ? posts : (data as GetTagQueryType)?.posts

  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <div className="flex flex-row border-b pb-4">
          <div className="mr-4 font-semibold text-xl">Tag: </div>
          <div>
            <div className="text-xl">{t.name}</div>
            <div className="">{t.description}</div>
          </div>
        </div>
        <PostsList posts={p} />
      </div>
    </Layout>
  )
}

export default Tag

const query = GraphQL.gql`
  query GetTag($id: ID!) {
    tag(id: $id) {
      id
      name
      description
    }
    posts(where: { tags: { id: $id} } ) {
      id
      title
      created_at
      timestamp
      tags {
        id
        name
      }
      organisations {
        id
        short_name
      }
    }
  }
`

type GetTagQueryType = {
  tag: TagType,
  posts: Post[],
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if(!params){
    return { notFound: true }
  }
  const { id } = params
  const { data: { tag, posts } } = await GraphQL.getClient().query<GetTagQueryType>({
    query,
    variables: {
      id,
    },
  })
  return {
    props: {
      posts,
      tag,
    },
  }
}

type TagsQuery = {
  tags: TagType[]
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { tags } } = await GraphQL.getClient().query<TagsQuery>({
    query: GraphQL.gql`
      query GetTags {
        tags {
          id
        }
      }
    `,
  })
  return {
    fallback: `blocking`,
    paths: tags.map(tag => ({
      params: { id: tag.id },
    })),
  }
}