import { ContactCards } from './ContactCards'
import { ContactForm } from './ContactForm/ContactForm'

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
					<ContactForm />
					<ContactCards />
				</div>
			</div>
		</section>
	)
}
