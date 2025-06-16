import { Footer } from '@/features/globals/components/Footer'
import { Header } from '@/features/globals/components/Header/Header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
		'Vitaliy Myroniuk — Fullstack Developer | 2 Years Experience | Next.js, React, Node.js',
	description:
		'Vitaliy Myroniuk — experienced Fullstack Developer with 2 years working on Next.js, React, Node.js, and AI-powered web applications. Building scalable, modern solutions using cutting-edge technologies. Let’s create your project together!',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
