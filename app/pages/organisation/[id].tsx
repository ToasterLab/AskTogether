import Layout from 'components/Layout'
import PostsList from 'components/PostsList'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { getDomain } from 'utils'
import type { Organisation as OrganisationType, Post } from 'types'
import GraphQL from 'utils/GraphQL'

type Props = {
  organisation: OrganisationType,
  posts: Post[],
}

const Organisation: React.FC<Props> = ({ organisation, posts }) => {
  return (
    <Layout>
      <div className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8">
        <div className="border-b pb-4 flex flex-row">
          <div className="mr-4 font-semibold">Organisation: </div>
          <div>
            <div>{organisation.name} ({organisation.short_name})</div>
            {organisation.url
              ? <a href={organisation.url} className="underline decoration-dotted">
                  {getDomain(organisation.url)}
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if(!params){
    return { notFound: true }
  }
  const { id } = params
  const { data: { organisation, posts } } = await GraphQL.getClient().query({
    query: GraphQL.gql`
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
    `,
    variables: {
      id,
    },
  })
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