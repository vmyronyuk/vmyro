import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function ContactButtons() {
	return (
		<div className='flex gap-4 pt-4'>
			<Button variant={'outline'} asChild className='h-9'>
				<Link target='_blank' href='https://github.com/vmyronyuk'>
					<Github />
					GitHub
				</Link>
			</Button>
			<Button variant={'outline'} asChild className='h-9'>
				<Link target='_blank' href='https://ua.linkedin.com/in/vitaliymyronyuk'>
					<Linkedin />
					LinkedIn
				</Link>
			</Button>
		</div>
	)
}
