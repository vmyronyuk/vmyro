'use client'

import { Button } from '@/components/ui/button'
import { Download, Mail } from 'lucide-react'

export function ActionButtons() {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/files/Vitaliy_Myroniuk_CV.pdf'
		link.download = 'Vitaliy_Myroniuk_CV.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className='flex items-center gap-3 mx-auto'>
			<Button
				type='button'
				onClick={handleDownload}
				className='font-semibold w-40 h-11 shadow-lg shadow-primary/25'
			>
				<Download />
				Download CV
			</Button>
			<Button variant={'outline'} className='font-semibold w-40 h-11'>
				<Mail />
				Contact me
			</Button>
		</div>
	)
}
