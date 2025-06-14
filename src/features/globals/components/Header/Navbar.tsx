'use client'

import { Button } from '@/components/ui/button'

type NavbarItem = { name: string; id: string }

const navbarItems: NavbarItem[] = [
	{ name: 'About', id: 'about' },
	{ name: 'Skills', id: 'skills' },
	{ name: 'Projects', id: 'projects' },
	{ name: 'Contact', id: 'contact' },
	{ name: 'Blog (Coming soon)', id: 'blog' },
]

export function Navbar() {
	return (
		<nav className='hidden md:flex items-center gap-4'>
			{navbarItems.map(item => (
				<Button variant={'link'} key={item.id} disabled={item.id === 'blog'}>
					{item.name}
				</Button>
			))}
		</nav>
	)
}
