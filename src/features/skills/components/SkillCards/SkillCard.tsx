'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

type SkillCardProps = {
	title: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
	skills: string[]
	color: string
}

export function SkillCard({
	title,
	icon: Icon,
	skills,
	color,
}: SkillCardProps) {
	return (
		<Card className='bg-background/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 backdrop-blur-md border-border/50'>
			<CardContent className='flex flex-col gap-5'>
				<div className='flex items-center gap-3'>
					<div
						className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${color} shadow-lg hover:shadow-xl transition-all duration-300`}
					>
						<Icon className={`w-6 h-6 text-white`} />
					</div>
					<h3 className='text-lg font-semibold'>{title}</h3>
				</div>

				<div className='grid grid-cols-2 gap-3'>
					{skills.map((skill, index) => (
						<Badge
							key={index}
							variant={'secondary'}
							className='py-2 rounded-full text-sm font-semibold w-full hover:bg-primary/10 hover:text-primary transition-all duration-300'
						>
							{skill}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
