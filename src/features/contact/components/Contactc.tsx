import { Field } from '@/components/form/Field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export function Contact() {
	return (
		<section id='contact' className='py-18 bg-muted/30 w-full'>
			<div className='container mx-auto text-center max-w-4xl flex flex-col gap-12'>
				<div className='flex flex-col gap-3'>
					<h2 className='text-3xl md:text-4xl font-bold'>Get In Touch</h2>
					<p className='text-muted-foreground text-lg'>
						Have a project in mind? Let`s work together!
					</p>
				</div>
				<div className='grid md:grid-cols-2 gap-12'>
					<form>
						<Card className='py-6 px-6 rounded-md'>
							<Field>
								<Label>Name *</Label>
								<Input placeholder='Your full name' />
							</Field>

							<Field>
								<Label>Email *</Label>
								<Input placeholder='your.email@example.com' />
							</Field>

							<Field>
								<Label>Message *</Label>
								<Textarea
									placeholder='Tell me about your project...'
									rows={5}
								/>
							</Field>

							<Button className='font-semibold flex items-center gap-3'>
								<Send />
								Send Message
							</Button>
						</Card>
					</form>

					<div className='flex flex-col justify-between'>
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
								<p className='text-muted-foreground text-sm'>
									vitalikmur38@gmail.com
								</p>
							</div>
						</Card>
						<Card className='p-5 rounded-md flex-row items-center'>
							<div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center '>
								<Github className='text-primary' />
							</div>
							<div className='flex flex-col'>
								<Label className='text-base'>GitHub</Label>
								<p className='text-muted-foreground text-sm'>
									vitalikmur38@gmail.com
								</p>
							</div>
						</Card>
						<div className='p-4 rounded-md text-left gap-1 bg-green-100 dark:bg-green-900/10 border border-green-200 dark:border-green-800'>
							<div className='flex items-center gap-2'>
								<div className='w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse'></div>
								<span className='text-green-700 dark:text-green-400 font-semibold text-sm'>
									Available for new projects
								</span>
							</div>
							<p className='text-green-700 text-xs'>
								Typically responds within 24 hours
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
