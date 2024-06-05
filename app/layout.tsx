import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import localFont from 'next/font/local'
import { Space_Grotesk } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

const hk_grotesk_pro = localFont({
  src: [
    {
      path: '../font/HKGroteskPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/HKGroteskPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/HKGroteskPro-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/HKGroteskPro-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/HKGroteskPro-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-hk-grotesk-pro',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${hk_grotesk_pro.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#fb4f4f" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
