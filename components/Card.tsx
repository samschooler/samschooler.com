import Image from './Image'
import Link from './Link'

const Card = ({ title, timeframe, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <Link
      href={href}
      className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      <div
        className={`${
          imgSrc && 'h-full'
        } overflow-hidden border-4 border-gray-800  bg-white dark:border-gray-600 dark:bg-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-top md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:bg-gray-900 dark:text-gray-200">
            {timeframe}
          </span>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <p className="prose mb-3 max-w-none text-gray-800 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Card
