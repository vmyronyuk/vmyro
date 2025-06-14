'use client'

import { Button } from '@/components/ui/button'
import { scrollTo } from '@/lib/utils/scrollTo'
import { navbarItems } from '../../utils/navbarItems'

export function Navbar() {
	return (
		<nav className='hidden md:flex items-center gap-4'>
			{navbarItems.map(item => (
				<Button
					variant={'link'}
					onClick={() => scrollTo(item.id)}
					key={item.id}
					disabled={item.id === 'blog'}
				>
					{item.name}
				</Button>
			))}
		</nav>
	)
}
