import CustomLink from '../Link'

const Title: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="inline-block border-4 border-black px-4 py-2 text-4xl font-bold dark:border-white">
    {title}
  </h2>
)

export const BoxHeader: React.FC<{
  title: string
  href?: string
  description: React.ReactElement
}> = ({ title, href, description }) => {
  return (
    <div className="relative mb-12 inline-block">
      {href ? (
        <CustomLink href={href}>
          <Title title={title} />
        </CustomLink>
      ) : (
        <Title title={title} />
      )}
      <div className="flex items-center p-4 text-center text-sm md:absolute md:bottom-0 md:right-[-200px] md:top-1 md:w-[200px] md:text-left">
        {description}
      </div>
    </div>
  )
}
