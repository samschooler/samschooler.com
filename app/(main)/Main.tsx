import { BoxHeader } from '@/components/home/BoxHeader'
import { HomeButton } from '@/components/home/HomeButton'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import CustomLink from '@/components/Link'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Home({ posts }) {
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
            <div className="mx-auto max-w-lg text-justify text-lg">
              <p>
                I am a software engineer living in Colorado. Currently, I work for{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  href="https://odeko.com"
                >
                  Odeko
                </a>{' '}
                building technology to streamline small business. In the past, I've worked for{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://airkit.com"
                >
                  Airkit
                </a>
                ,{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://thatch.co"
                >
                  Thatch Travel
                </a>
                ,{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://www.spiredigital.com/"
                >
                  Spire Digital
                </a>{' '}
                and{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://truebill.com"
                >
                  Truebill
                </a>
                . I've also founded a (failed) startup called{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://wanderlift.com"
                >
                  Wanderlift
                </a>{' '}
                to help people get out and explore the outdoors. As well as have built the initial
                product for{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  rel="noreferrer"
                  href="https://lynxglobalintelligence.com"
                >
                  Lynx Global Intelligence
                </a>
                , to better understand the world around us via data.
              </p>
              <p>
                My current passion projects focus on building better relationships between friends,
                as well as thinking about hyper-local products and games. My other passions include
                the outdoors, transportation, decentralized systems, and privacy. I like to use
                rapid dev cycles to design, build, test and deploy unique and delightful
                experiences.
              </p>
              <p>
                In my free time I rock climb, backcountry ski, hike, bike, travel and{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  href="/projects/rollerbakers"
                >
                  deliver cookies on rollerblades
                </a>
                .
              </p>
              <p>
                This is my personal site, you can also find me on{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  href="https://twitter.com/samschooler"
                  rel="me"
                >
                  Twitter
                </a>
                ,{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  href="https://github.com/samschooler"
                  rel="me"
                >
                  Github
                </a>{' '}
                and{' '}
                <a
                  className="border-b-2 border-transparent text-[#fb4f4f] transition duration-200 hover:border-[#fb4f4f]"
                  href="https://instagram.com/samschooler"
                  rel="me"
                >
                  Instagram
                </a>
                .
              </p>
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

        <div className="mb-4 flex flex-wrap justify-center">
          <div className="m-4 w-[300px]">
            <div className="p-4">
              <h3 className="mb-4 text-xl font-medium">Web</h3>
              <ul className="space-y-4 text-lg">
                <li>React, Jest, Emotion, Redux</li>
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
                <li>Swift</li>
                <li>Firebase</li>
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
              <h3 className="mb-4 text-xl font-medium">Design</h3>
              <ul className="space-y-4 text-lg">
                <li>Figma + Sketch</li>
                <li>Photoshop</li>
                <li>Affinity</li>
              </ul>
            </div>
          </div>
          <div className="m-4 w-[300px]">
            <div className="p-4 opacity-70">
              <h3 className="mb-4 text-xl font-medium">Backend</h3>
              <ul className="space-y-4 text-lg">
                <li>Docker</li>
                <li>Postgres</li>
                <li>GraphQL</li>
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
