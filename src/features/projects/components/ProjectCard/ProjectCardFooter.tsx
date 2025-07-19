import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Project } from '../../../../../payload-types'

type ProjectCardFooterProps = {
	project: Project
}

export function ProjectCardFooter({ project }: ProjectCardFooterProps) {
	return (
		<div className='flex justify-end my-4'>
			<Button variant={'shadow'} asChild disabled className='w-full'>
				<Link
					href={`/projects/${project.id}`}
					aria-label={`View ${project.title} project`}
				>
					<ExternalLink className='w-4 h-4 mr-2' />
					View Project
				</Link>
			</Button>
		</div>
	)
}
