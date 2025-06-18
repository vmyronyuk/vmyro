import { Button } from '@/components/ui/button'
import { Download, Mail } from 'lucide-react'

export function ActionButtons() {
	return (
		<div className='flex items-center gap-3 mx-auto'>
			<Button className='font-semibold w-40 h-11 shadow-lg shadow-primary/25'>
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
