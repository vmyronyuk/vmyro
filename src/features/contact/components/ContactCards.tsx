import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactCards() {
	return (
		<div className='flex flex-col justify-between sm:gap-0 gap-5'>
			<Card className='p-5 rounded-md flex-row items-center'>
				<div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center '>
					<Mail className='text-primary' />
				</div>
				<div className='flex flex-col'>
					<Label className='text-base'>Email</Label>
					<p className='text-muted-foreground text-sm'>
						vitalikmur38@gmail.com
					</p>
				</div>
			</Card>
			<Card className='p-5 rounded-md flex-row items-center'>
				<div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center '>
					<Linkedin className='text-primary' />
				</div>
				<div className='flex flex-col'>
					<Label className='text-base'>LinkedIn</Label>
					<p className='text-muted-foreground text-sm'>@vitaliymyronyuk</p>
				</div>
			</Card>
			<Card className='p-5 rounded-md flex-row items-center'>
				<div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center '>
					<Github className='text-primary' />
				</div>
				<div className='flex flex-col'>
					<Label className='text-base'>GitHub</Label>
					<p className='text-muted-foreground text-sm'>@vmyronyuk</p>
				</div>
			</Card>
			<div className='p-4 rounded-md text-left gap-1 border border-green-400/30 bg-green-400/15'>
				<div className='flex items-center gap-2'>
					<div className='w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse'></div>
					<span className=' dark:text-green-400 font-semibold text-sm'>
						Available for new projects
					</span>
				</div>
				<p className='text-green-500 text-xs'>
					Typically responds within 24 hours
				</p>
			</div>
		</div>
	)
}
