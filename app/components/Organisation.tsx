import Link from 'next/link'
import type { Organisation as OrganisationType } from 'types'
import { IoBusiness } from 'react-icons/io5'

interface Props {
  org: OrganisationType
}

const Organisation: React.FC<Props> = ({ org }) => {
  return (
    <Link href={`/organisation/${org.id}`}>
      <a className="flex flex-row items-center py-1 px-2 border rounded border-neutral-400 border-solid text-sm hover:bg-gray-100">
        <IoBusiness color="rgb(163, 163, 163)"/>
        <div className="ml-1">{org.short_name}</div>
      </a>
    </Link>
  )
}

export default Organisation