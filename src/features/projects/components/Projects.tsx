'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { projects } from '../utils/project'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { ProjectsFilter } from './ProjectsFilter'
import { ProjectsWrapper } from './ProjectsWrapper'
import { Stats } from './Stats/Stats'

export function Projects() {
	const [filteredProjects, setFilteredProjects] = useState(projects)

	return (
		<section id='projects' className='py-20 w-full container'>
			<div className='px-4 text-center flex flex-col gap-3'>
				<h2 className='text-3xl md:text-4xl font-bold'>Featured Projects</h2>
				<p className='text-muted-foreground text-lg'>Some of my recent work</p>
			</div>
			<div className='flex flex-col gap-12 justify-center items-center'>
				<ProjectsFilter
					projects={projects}
					setFilteredProjects={setFilteredProjects}
				/>

				<ProjectsWrapper>
					{filteredProjects.map(project => (
						<ProjectCard key={project.title} project={project} />
					))}
				</ProjectsWrapper>

				{filteredProjects.length > 2 && (
					<Button variant={'outline'} className='w-fit py-5 px-12 font-medium'>
						{`Show all ${filteredProjects.length} Projects`}
					</Button>
				)}

				<Stats totalProjects={7} categories={5} technologies={18} clients={4} />
			</div>
		</section>
	)
}
