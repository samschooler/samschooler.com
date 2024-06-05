export const HomeButton: React.FC<{
  title: string
  href: string
  dark?: boolean
}> = ({ title, href, dark }) => (
  <a
    className={`inline-block border-4 px-6 py-3 text-xl font-black uppercase no-underline transition duration-200 ${dark ? 'border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black' : 'border-white text-white hover:bg-white hover:text-[#fb4f4f]'}`}
    href={href}
  >
    {title}
  </a>
)
