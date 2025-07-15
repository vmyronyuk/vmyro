import { Footer } from '@/features/globals/components/Footer'
import { Header } from '@/features/globals/components/Header/Header'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Vitaliy Myroniuk — Fullstack Developer | Next.js, React, Node.js Expert',
	description:
		'Vitaliy Myroniuk — experienced Fullstack Developer with 2 years working on Next.js, React, Node.js, and AI-powered web applications. Building scalable, modern solutions using cutting-edge technologies. Let’s create your project together!',
	icons: {
		icon: '/favicon.svg',
	},
	openGraph: {
		title: 'Vitaliy Myroniuk — Fullstack Developer',
		description:
			'Explore the portfolio of a modern Fullstack Developer. Built with Next.js, React, TypeScript, and more.',
		url: 'https://www.vmyro.co/',
		siteName: 'Vitaliy Myroniuk',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Vitaliy Myroniuk — Fullstack Developer',
		description:
			'Building modern fullstack solutions using Next.js, React, Node.js, TypeScript.',
	},
	metadataBase: new URL('https://www.vmyro.co/'),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>

				<Script
					id='ld-json'
					type='application/ld+json'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Vitaliy Myroniuk',
							jobTitle: 'Fullstack Developer',
							url: 'https://www.vmyro.co/',
							sameAs: [
								'https://github.com/vmyronyuk',
								'https://ua.linkedin.com/in/vitaliymyronyuk',
								'https://www.instagram.com/v.myroniuk/',
							],
						}),
					}}
				/>
				<meta
					name='google-site-verification'
					content='UogrYoaEWoO1MG1jkpUTWkPbSBFoZk3iVwaN3Hbioq0'
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
					<Analytics />
				</Providers>
			</body>
		</html>
	)
}
