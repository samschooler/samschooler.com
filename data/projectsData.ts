interface Project {
  title: string
  timeframe: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Little Invite',
    timeframe: 'Early 2024',
    description: `Simple invites for small to medium events. Built with Next.js, Supabase, Postgres and AWS.`,
    imgSrc: '',
    href: 'https://littleinvite.com',
  },
  {
    title: 'Bring Marco',
    timeframe: 'Early 2024',
    description: `Map everything. Built with Next.js, Supabase, Postgres and AWS.`,
    imgSrc: '',
    href: 'https://bringmarco.com',
  },
  {
    title: 'Wanderlift',
    timeframe: '2016 - 2018',
    description: ` Rideshare for adventure lovers.`,
    imgSrc: '/static/images/wanderlift.png',
    href: 'https://wanderlift.com',
  },
  {
    title: 'RollerBakers',
    timeframe: '2015',
    description: `RollerBakers was born out of a need for spending money. My dorm room had a kitchen in it, and I loved to baked so I thought: Why not make the most of this. I created https://rollerbakers.com a cookie delivery service which delivers freshly baked cookies directly to your dorm room.`,
    imgSrc: '/static/images/rollerbakers.png',
    href: '/blog/rollerbakers',
  },
  {
    title: 'Bowrun',
    timeframe: '2014',
    description: `A simple game developed with Java and LibGDX. The game is a simple endless runner where you have to avoid obstacles and collect coins. The game was available on the App Store and Google Play Store.`,
    imgSrc: '/static/images/bowrun.png',
    href: '/blog/bowrun',
  },
]

export default projectsData
