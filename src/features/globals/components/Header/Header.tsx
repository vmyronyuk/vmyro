'use client'

import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import { MobileNavbar } from './MobileNavbar/MobileNavbar'
import { MobileNavbarTrigger } from './MobileNavbar/MobileNavbarTrigger'
import { Navbar } from './Navbar'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const scrollHandler = () => {
			setIsScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header
			className={`fixed bg-background top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/70 backdrop-blur-md border-b border-border/50'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4 py-4 flex items-center justify-between'>
				<Logo />
				<Navbar />
				<div className='flex items-center gap-2'>
					<ThemeSwitcher />
					<MobileNavbarTrigger
						isMobileNavbarOpen={isMobileMenuOpen}
						toggleMobileMenu={toggleMobileMenu}
					/>
				</div>
				<MobileNavbar
					isMobileMenuOpen={isMobileMenuOpen}
					setIsMobileMenuOpen={setIsMobileMenuOpen}
				/>
			</div>
		</header>
	)
}
