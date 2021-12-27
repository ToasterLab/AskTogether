import Link from 'next/link'
import type { Tag as TagType } from 'types'

interface Props {
  tag: TagType,
}

const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tag/${tag.id}`}>
      <a className="flex py-1 px-2 border rounded border-neutral-400 border-solid text-sm">
        {tag.name}
      </a>
    </Link>
  )
}

export default Tag