'use client'

import { skillCategories } from '../../utils/skillCategories'
import { SkillCard } from './SkillCard'

export function SkillCards() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 justify-center items-center mx-auto w-full my-16'>
			{skillCategories.map(category => (
				<SkillCard
					key={category.title}
					title={category.title}
					skills={category.skills}
					icon={category.icon}
					color={category.color}
				/>
			))}
		</div>
	)
}
