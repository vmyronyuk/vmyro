'use client'

import { Button } from '@/components/ui/button'
import { ContactButtons } from '@/features/aboutMe/components/ContactButtons'
import { scrollTo } from '@/lib/utils/scrollTo'
import { navbarItems } from '../../../utils/navbarItems'

type MobileNavbarProps = {
	isMobileMenuOpen: boolean
	setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function MobileNavbar({
	isMobileMenuOpen,
	setIsMobileMenuOpen,
}: MobileNavbarProps) {
	const menuItemClickHandler = (id: string) => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
		scrollTo(id)
	}

	return (
		<div
			className={`md:hidden absolute top-full left-0 w-full bg-background/70 backdrop-blur-md border-b border-border/50 shadow-lg transition-all duration-300 ${
				isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}
		>
			<nav className='container mx-auto p-4'>
				<div className='flex flex-col gap-4 items-start'>
					{navbarItems.map(item => (
						<Button
							variant={'link'}
							key={item.id}
							onClick={() => menuItemClickHandler(item.id)}
							disabled={item.id === 'blog'}
							className='text-lg'
						>
							{item.name}
						</Button>
					))}
				</div>

				<div className='flex items-center justify-center gap-4 border-t border-border-50 mt-6'>
					<ContactButtons />
				</div>
			</nav>
		</div>
	)
}
