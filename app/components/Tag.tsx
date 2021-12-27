import React from 'react'
import type { Tag as TagType } from 'types'

interface Props {
  tag: TagType,
}

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <a className="flex py-1 px-2 border rounded border-neutral-400 border-solid" href="#">
      {tag.name}
    </a>
  )
}

export default Tag