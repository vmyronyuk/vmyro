'use client'

import { Logo } from '../Logo'

export function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='py-8 border-t border-border/50'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center justify-between'>
					<Logo />

					<p className='text-muted-foreground text-sm text-center md:text-right'>
						© {year} Vitaliy Myroniuk. All rights reserved.
						<br className='md:hidden' />
						<span className='hidden md:inline'> • </span>
						Built with Next.js
					</p>
				</div>
			</div>
		</footer>
	)
}
