'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const themeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<Button
			variant={'ghost'}
			size={'icon'}
			onClick={themeToggle}
			className='relative overflow-hidden'
			aria-label='Toggle theme'
		>
			<Sun className={`${theme === 'dark' ? 'block' : 'hidden'} scale-125`} />
			<Moon className={`${theme === 'dark' ? 'hidden' : 'block'} scale-125`} />
		</Button>
	)
}
