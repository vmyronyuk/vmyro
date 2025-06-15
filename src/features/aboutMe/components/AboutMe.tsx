'use client'

import { Description } from './Description'
import { Photo } from './Photo'

export function AboutMe() {
	return (
		<section id='about' className='py-20'>
			<div className='container px-4 flex flex-col gap-12'>
				<div className='flex flex-col gap-3 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold'>About Me</h2>
					<p className='text-muted-foreground text-lg'>Get to know me better</p>
				</div>

				<div className='grid md:grid-cols-2 gap-12 items-center max-w-4xl'>
					<Description />
					<Photo />
				</div>
			</div>
		</section>
	)
}
