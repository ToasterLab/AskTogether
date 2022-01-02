import type { Featured as FeaturedType } from "types"
import Organisation from "./Organisation"
import Tag from "./Tag"

interface Props {
  data: FeaturedType,
}

const Featured: React.FC<Props> = ({ data }) => {

  return (
    <div className="my-4 lg:px-4 pt-4 lg:border-l border-t h-full">
      <h2 className="mb-4 text-lg font-semibold">Featured</h2>
      <div className="flex flex-row gap-2 flex-wrap">
        {data.organisations && data.organisations.map(org => org && (
          <Organisation org={org} key={org.id} />
        ))}
      </div>
      <div className="flex flex-row gap-2 flex-wrap mt-4">
        {data.tags && data.tags.map(tag => tag && (
          <Tag tag={tag} key={tag.id} />
        ))}
      </div>
    </div>
  )
}


export default Featured