import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { debounce } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { projectCategoriesOptions } from '../domain'
import { Project, ProjectCategory } from '../types'
type ProjectsFilterProps = {
	projects: Project[]
	setFilteredProjects: (projects: Project[]) => void
}

export function ProjectsFilter({
	projects,
	setFilteredProjects,
}: ProjectsFilterProps) {
	const [selectedCategory, setSelectedCategory] =
		useState<ProjectCategory>('all')

	const debouncedNameFilter = useMemo(() => {
		return debounce((name: string) => {
			const filteredProjects = projects.filter(project =>
				project.title.toLowerCase().includes(name.toLowerCase())
			)
			setFilteredProjects(filteredProjects)
		}, 300)
	}, [projects, setFilteredProjects])

	const nameFilterHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			debouncedNameFilter(e.target.value)
		},
		[debouncedNameFilter]
	)

	const categoryFilterHandler = useCallback(
		(category: ProjectCategory) => {
			setSelectedCategory(category)
			const filteredProjects =
				category === 'all'
					? projects
					: projects.filter(project => project.category === category)
			setFilteredProjects(filteredProjects)
		},
		[projects, setFilteredProjects]
	)

	return (
		<div className='flex flex-col gap-6 mt-9'>
			<div className='mx-auto w-xs md:w-md'>
				<Input placeholder='Search project...' onChange={nameFilterHandler} />
			</div>
			<div className='flex flex-wrap justify-center gap-2'>
				{projectCategoriesOptions.map(category => (
					<Button
						key={category.value}
						variant={
							selectedCategory === category.value ? 'default' : 'outline'
						}
						size={'sm'}
						className='font-semibold'
						onClick={() => categoryFilterHandler(category.value)}
					>
						{category.label}
					</Button>
				))}
			</div>
		</div>
	)
}
