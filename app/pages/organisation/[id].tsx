import Layout from 'components/Layout'
import PostsList from 'components/PostsList'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { getDomain } from 'utils'
import type { Organisation as OrganisationType, Post } from 'types'
import GraphQL from 'utils/GraphQL'
import { useRouter } from 'next/router'

type Props = {
  organisation: OrganisationType,
  posts: Post[],
}

const Organisation: React.FC<Props> = ({ organisation, posts }) => {
  const { query: { id } } = useRouter()
  const { loading, data, error } = GraphQL.useQuery<GetOrganisationTypeQuery>(query, {
    variables: { id },
  })

  const o = (loading || error || !data)
    ? organisation
    : (data as GetOrganisationTypeQuery)?.organisation

  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <div className="border-b pb-4 flex flex-row">
          <div className="mr-4 font-semibold">Organisation: </div>
          <div>
            <div>{o.name} ({o.short_name})</div>
            {o.url
              ? <a href={o.url} className="underline decoration-dotted">
                  {getDomain(o.url)}
                </a>
              : null}
          </div>
        </div>
        <PostsList posts={posts} />
      </div>
    </Layout>
  )
}

export default Organisation

const query = GraphQL.gql`
  query GetOrganisation($id: ID!) {
    organisation(id: $id) {
      id
      name
      short_name
      url
    }
    posts(where: { organisations: { id: $id} } ) {
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

type GetOrganisationTypeQuery = {
  organisation: OrganisationType,
  posts: Post[],
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if(!params){
    return { notFound: true }
  }
  const { id } = params
  const { data: { organisation, posts } } = (
    await GraphQL.getClient().query<GetOrganisationTypeQuery>({
      query,
      variables: {
        id,
      },
    })
  )
  return {
    props: {
      organisation,
      posts,
    },
  }
}

type OrgsQuery = {
  organisations: OrganisationType[]
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { organisations } } = await GraphQL.getClient().query<OrgsQuery>({
    query: GraphQL.gql`
      query GetOrganisations {
        organisations {
          id
        }
      }
    `,
  })
  return {
    fallback: `blocking`,
    paths: organisations.map(org => ({
      params: { id: org.id },
    })),
  }
}