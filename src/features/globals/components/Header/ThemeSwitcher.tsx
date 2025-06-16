'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const { theme, setTheme, systemTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button variant='ghost' size='icon' aria-label='Toggle theme' disabled>
				<Sun className='scale-125' />
			</Button>
		)
	}

	const currentTheme = theme === 'system' ? systemTheme : theme

	const themeToggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<Button
			variant={'ghost'}
			size={'icon'}
			onClick={themeToggle}
			className='relative overflow-hidden'
			aria-label='Toggle theme'
		>
			<Sun
				className={`${currentTheme === 'dark' ? 'block' : 'hidden'} scale-125`}
			/>
			<Moon
				className={`${currentTheme === 'dark' ? 'hidden' : 'block'} scale-125`}
			/>
		</Button>
	)
}
