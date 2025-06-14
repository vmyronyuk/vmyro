import { ChevronDown } from 'lucide-react'
import { ActionButtons } from './ActionButtons'
import { MainContent } from './MainContent'
import { StatusBadge } from './StatusBadge'
import { SubtleBackground } from './SubtleBackground'

export function Hero() {
	return (
		<section className='min-h-screen flex items-center justify-center overflow-hidden'>
			<SubtleBackground />

			<div className='container mx-auto px-4 text-center flex flex-col gap-6 z-10'>
				<StatusBadge />
				<MainContent />
				<ActionButtons />

				<ChevronDown
					className='text-muted-foreground animate-bounce mx-auto'
					size={30}
				/>
			</div>
		</section>
	)
}
