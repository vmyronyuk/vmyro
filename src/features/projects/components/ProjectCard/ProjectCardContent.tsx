import { Badge } from '@/components/ui/badge'
import { getLabel } from '@/lib/utils/getLabel'
import { projectCategoriesOptions } from '../../domain'
import { Project } from '../../types'

type ProjectCardContentProps = {
	project: Project
}

export function ProjectCardContent({ project }: ProjectCardContentProps) {
	return (
		<div className='pt-6 flex flex-col flex-1'>
			<div className='flex items-center justify-between mb-3'>
				<h3 className='font-semibold text-xl hover:text-primary transition-colors'>
					{project.title}
				</h3>
				<Badge
					variant={'secondary'}
					className='rounded-full font-semibold text-sm'
				>
					{getLabel(projectCategoriesOptions, project.category)}
				</Badge>
			</div>

			<p className='text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3'>
				{project.description}
			</p>

			<div className='flex flex-wrap gap-2'>
				{project.tech.map((tech, index) => (
					<Badge variant={'outline'} key={index}>
						{tech}
					</Badge>
				))}
			</div>
		</div>
	)
}
