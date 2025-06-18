import { projects } from '../utils/project'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { ProjectsFilter } from './ProjectsFilter'
import { ProjectsWrapper } from './ProjectsWrapper'

export function Projects() {
	return (
		<section id='projects' className='py-20 w-full container'>
			<div className='px-4 text-center flex flex-col gap-3'>
				<h2 className='text-3xl md:text-4xl font-bold'>Featured Projects</h2>
				<p className='text-muted-foreground text-lg'>Some of my recent work</p>
			</div>
			<div className='flex flex-col gap-12'>
				<ProjectsFilter />

				<ProjectsWrapper>
					{projects.map(project => (
						<ProjectCard key={project.title} project={project} />
					))}
				</ProjectsWrapper>
			</div>
		</section>
	)
}
