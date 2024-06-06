import { BoxHeader } from '@/components/home/BoxHeader'
import { HomeButton } from '@/components/home/HomeButton'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import ThemeSwitch from '@/components/ThemeSwitch'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default')!

  return (
    <div className="bg-white dark:bg-gray-900">
      <header className="flex h-[85vh] items-center justify-center bg-[#fb4f4f] pb-[10vh]">
        <div className="text-center">
          <h1 className="mx-2 mb-11 max-w-[500px] text-5xl font-light leading-tight text-white">
            Hey! I'm Sam. I am a{' '}
            <abbr title="I'm user and product driven. I solve problems through UX and implementation to make sure a product can cater to a user in an elegant and simple way, no matter the device.">
              <b className="font-semibold">design-focused frontend&nbsp;+&nbsp;mobile engineer</b>
            </abbr>
            .
          </h1>
          <HomeButton title="Let's Work Together" href="mailto:hire@samschooler.com" />
        </div>
      </header>
      <div className="-mt-[15vh] h-0 w-0 border-b-[15vh] border-l-[100vw] border-transparent border-b-white dark:border-b-gray-900"></div>

      <section className="mb-24 bg-white px-4 text-center dark:bg-gray-900">
        <div className="relative mx-auto text-center">
          <div className="ml-5">
            <ThemeSwitch />
          </div>
        </div>
        <BoxHeader
          title="Intro"
          description={
            <p>
              You seem like a change-the-world type of human.{' '}
              <a
                className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                href="mailto:change@samschooler.com"
              >
                I want to help.
              </a>
            </p>
          }
        />

        <div className="mb-4">
          <div className="shadow-none">
            <div className="prose mx-auto max-w-lg text-justify text-lg">
              <MDXLayoutRenderer code={author.body.code} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-center dark:bg-gray-900">
        <div className="relative mb-16 inline-block">
          <BoxHeader
            title="Side Projects"
            href="/projects"
            description={<p>These are things I've built for fun and I'm proud of.</p>}
          />
        </div>

        <div className="relative bg-gray-800 text-center dark:bg-black">
          <div className="-mt-12 h-0 w-0 border-r-[100vw] border-t-[15vh] border-transparent border-t-white dark:border-t-gray-900"></div>
          <div className="m-auto -my-[15vh] flex max-w-[1024px] flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {projectsData.slice(0, 4).map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  timeframe={d.timeframe}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
          <div className="-mb-12 h-0 w-0 border-b-[15vh] border-l-[100vw] border-transparent border-b-white dark:border-b-gray-900"></div>
        </div>
      </section>
      <div className="mt-20 text-center">
        <Link
          href="/projects"
          className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
        >
          See More Projects &rarr;
        </Link>
      </div>
      <section className="mb-24 bg-white pt-24 text-center dark:bg-gray-900">
        <BoxHeader
          title="Skills"
          description={<p>A generalist with a focus in frontend&nbsp;+&nbsp;mobile.</p>}
        />

        <div className="m-auto mb-4 flex max-w-5xl flex-wrap justify-center">
          <div className="m-4 w-[300px]">
            <div className="p-4">
              <h3 className="mb-4 text-xl font-medium">Web</h3>
              <ul className="space-y-4 text-lg">
                <li>React, Next.js, Redux, Jest</li>
                <li>Typescript/Javascript</li>
                <li>HTML5/CSS3</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4">
              <h3 className="mb-4 text-xl font-medium">Mobile Apps</h3>
              <ul className="space-y-4 text-lg">
                <li>React Native</li>
                <li>Swift/SwiftUI</li>
                <li>Supabase/Firebase</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4">
              <h3 className="mb-4 text-xl font-medium">Not Tech</h3>
              <ul className="space-y-4 text-lg">
                <li>Lead Climbing</li>
                <li>Backcountry Skiing</li>
                <li>Baking</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4 opacity-70">
              <h3 className="mb-4 text-xl font-medium">Backend</h3>
              <ul className="space-y-4 text-lg">
                <li>Node.js/Express</li>
                <li>Postgres</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4 opacity-70">
              <h3 className="mb-4 text-xl font-medium">Design</h3>
              <ul className="space-y-4 text-lg">
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Affinity</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4 opacity-70">
              <h3 className="mb-4 text-xl font-medium">DevOps</h3>
              <ul className="space-y-4 text-lg">
                <li>AWS + VPS Management</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-[75vh] items-center justify-center bg-[#fb4f4f] py-8 text-white">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="mb-4 text-5xl font-medium">Want to work together?</h3>
          <p className="mb-6 text-2xl font-medium">
            I'm currently looking for new fulltime projects in Colorado or remote. If you have a
            project that you think fits me, get in touch. Feel free to reach out for other reasons
            as well.
          </p>
          <HomeButton title="Reach Out" href="mailto:hire@samschooler.com" />
        </div>
      </section>
    </div>
  )
}
