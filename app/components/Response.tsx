import Link from 'next/link'
import { IoMail } from 'react-icons/io5'
import type { Response as ResponseType } from 'types'
import Date from 'utils/Date'

interface Props { response: ResponseType }

const Response: React.FC<Props> = ({ response }) => {
  return (
    <div className="border rounded">
      <div className="px-4 py-3 bg-gray-100 flex flex-row items-center text-gray-500">
        <div className="text-gray-600">
          from&nbsp;
          {response.from === `organisation`
            ? (
              <Link href={`/organisation/${response.organisation?.id}`}>
                <a className="underline decoration-dotted" title={response.organisation?.name}>
                  {response.organisation?.name}
                </a>
              </Link>
            ) : (
              <span>user</span>
            )}
          &nbsp;on&nbsp;
          <time title={response.timestamp}>
            {Date.humanise(response.timestamp)}
          </time>
        </div>
      </div>
      <div className="px-4 py-4">
        <div
          className="prose max-w-none text-black prose-p:my-2"
          dangerouslySetInnerHTML={{ __html: response.content }} />
      </div>
    </div>
  )
}

export default Response