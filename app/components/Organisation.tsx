import React from 'react'
import type { Organisation as OrganisationType } from 'types'
import { IoBusiness } from 'react-icons/io5'

interface Props {
  org: OrganisationType
}

const Organisation: React.FC<Props> = ({ org }) => {
  return (
    <a className="flex flex-row items-center py-1 px-2 border rounded border-neutral-400 border-solid" href="#">
      <IoBusiness color="rgb(163, 163, 163)"/>
      <div className="ml-1">{org.short_name}</div>
    </a>
  )
}

export default Organisation