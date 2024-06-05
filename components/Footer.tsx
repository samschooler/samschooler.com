import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import CustomLink from './Link'

export default function Footer() {
  return (
    <footer className="min-h-[25vh] bg-gray-900 py-8 text-center text-white">
      <div className="mb-4">
        <Image
          alt="SS"
          className="mx-auto mb-4 transition-transform duration-1000 hover:rotate-[720deg]"
          src="/static/images/logo.svg"
          width={42}
          height={42}
        />
        <p className="text-sm">
          Made with{' '}
          <a
            className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
            rel="noreferrer"
            href="http://www.fileformat.info/info/unicode/char/2764/index.htm"
          >
            U+2764
          </a>{' '}
          by Sam Schooler in Denver, Colorado.
        </p>
      </div>
      <div className="text-xs text-gray-300">
        &copy; {`${new Date().getFullYear()}`}{' '}
        <CustomLink
          className="border-b-2 border-transparent text-white transition duration-200 hover:border-white"
          rel="me"
          href={siteMetadata.siteUrl}
        >
          {siteMetadata.author}
        </CustomLink>
        .
      </div>
    </footer>
  )
}
