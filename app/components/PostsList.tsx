import type { Post, Organisation as OrganisationType , Tag as TagType } from 'types'
import Date from 'utils/Date'
import Organisation from 'components/Organisation'
import Tag from 'components/Tag'
import Link from 'next/link'

interface Props {
  posts: Post[],
}

const Timestamp: React.FC<{ timestamp: Post[`timestamp`]}> = ({ timestamp }) => (
  <div className="justify-self-end text-sm" title={timestamp}>
    {Date.humanise(timestamp)}
  </div>
)

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post, index) => (
        <div className={`flex flex-col py-4 ${index === (posts.length - 1) ? `` : `border-b`}`} key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a className="mb-3 hover:text-gray-500">
                <h2 className="text-xl">{post.title}</h2>
              </a>
            </Link>
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row">
                {
                  post.organisations
                    ? (post.organisations as OrganisationType[]).map(
                        (org) => (<Organisation org={org} key={org.id} />),
                    ) : null
                }
              </div>
              <div className="flex flex-1 flex-row items-center gap-2">
                {
                  post.tags
                    ? (post.tags as TagType[]).map(tag => (
                      <Tag tag={tag} key={tag.id} />
                    )) : null
                }
              </div>
              <Timestamp timestamp={post.timestamp ? post.timestamp : post.created_at} />
            </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList