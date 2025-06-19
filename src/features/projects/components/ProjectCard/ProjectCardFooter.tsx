import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { Project } from '../../types'

type ProjectCardFooterProps = {
	project: Project
}

export function ProjectCardFooter({ project }: ProjectCardFooterProps) {
	return (
		<div className='flex justify-end my-4'>
			<Button variant={'shadow'} asChild disabled className='w-full'>
				<a
					href={project.link}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${project.title} project`}
					className='pointer-events-none'
				>
					<ExternalLink className='w-4 h-4 mr-2' />
					View Project
				</a>
			</Button>
		</div>
	)
}
