import { Card, CardContent } from '@/components/ui/card'
import { Project } from '../../types'
import { ProjectCardContent } from './ProjectCardContent'
import { ProjectCardFooter } from './ProjectCardFooter'
import { ProjectCardImage } from './ProjectCardImage'
import { ProjectFeatured } from './ProjectFeatured'

type ProjectCardProps = {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card
			key={project.title}
			className={`flex flex-col h-full hover:shadow-xl hover:shadow-primary/10 py-0 transition-all duration-300 backdrop-blur-sm border border-primary/15 hover:border-primary/20 hover:-translate-y-1 gap-0 ${
				project.featured ? 'ring-2 ring-primary/20' : ''
			}`}
		>
			<ProjectFeatured isFeatured={project.featured} />
			<ProjectCardImage projectTitle={project.title} />

			<CardContent>
				<ProjectCardContent project={project} />
				<ProjectCardFooter project={project} />
			</CardContent>
		</Card>
	)
}
