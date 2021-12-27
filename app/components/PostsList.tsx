import React from 'react'
import type { Post, Organisation as OrganisationType } from 'types'
import Date from 'utils/Date'
import Organisation from 'components/Organisation'
import Tag from 'components/Tag'
import type { Tag as TagType } from 'types'

interface Props {
  posts: Post[],
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map(post => (
        <div className="flex flex-col" key={post.id}>
            <a className="mb-3" href="#">
              <h2 className="text-2xl">{post.title}</h2>
            </a>
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row">
                {
                  post.organisations
                    ? (post.organisations as OrganisationType[]).map(
                        (org) => (<Organisation org={org} key={org.id} />)
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
              <div className="justify-self-end" title={post.created_at}>
                {Date.humanise(post.created_at)}
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList