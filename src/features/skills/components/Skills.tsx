'use client'

import { SkillCards } from './SkillCards/SkillCards'

export function Skills() {
	return (
		<section id='skills' className='py-18 bg-muted/30 w-full'>
			<div className='container mx-auto text-center max-w-4xl'>
				<div className='flex flex-col gap-3'>
					<h2 className='text-3xl md:text-4xl font-bold'>Skills</h2>
					<p className='text-muted-foreground text-lg'>
						Technologies I work with
					</p>
				</div>

				<SkillCards />
			</div>
		</section>
	)
}
