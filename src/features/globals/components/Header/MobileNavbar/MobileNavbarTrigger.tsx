import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

type MobileNavbarTriggerProps = {
	isMobileNavbarOpen: boolean
	toggleMobileMenu: () => void
}

export function MobileNavbarTrigger({
	isMobileNavbarOpen,
	toggleMobileMenu,
}: MobileNavbarTriggerProps) {
	return (
		<Button
			variant='ghost'
			className='relative h-10 w-10 p-0 md:hidden'
			onClick={toggleMobileMenu}
		>
			<Menu
				className={`absolute h-6 w-6 transform transition-all duration-300 ${
					isMobileNavbarOpen
						? 'rotate-90 opacity-0 scale-75'
						: 'opacity-100 scale-110'
				}`}
			/>
			<X
				className={`absolute h-6 w-6 transform transition-all duration-300 ${
					isMobileNavbarOpen
						? 'opacity-100 scale-110 rotate-0'
						: 'opacity-0 scale-75'
				}`}
			/>
		</Button>
	)
}
