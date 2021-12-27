import React from 'react'
import type { Post } from 'types'
import Date from 'utils/Date'
import Image from 'next/image'
import { STRAPI_URI } from 'utils/Constants'

interface Props {
  posts: Post[],
}

const PostsList: React.FC<Props> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col">
      {posts.map(post => (
        <div className="flex flex-col" key={post.id}>
          <div className="flex flex-row">
            <div className="flex-initial">
              <Image src={`${STRAPI_URI}${post.organisations[0].logo?.url}`} width="80" height="80" />
            </div>
            <div className="flex-auto">
              <div><h2 className="text-2xl">{post.title}</h2></div>
              <div className="flex flex-row">
                {post.tags?.map(tag => (
                  <div className="" key={tag?.id}>
                    {tag?.name}
                  </div>
                ))}
              </div>
              <div title={post.created_at}>{Date.humanise(post.created_at)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsList