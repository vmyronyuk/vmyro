import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Project } from '../../../../payload-types'
import { projectCategoriesOptions } from '../domain'
import { ProjectCategory } from '../types'

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

	const sortFeaturedFirst = (projects: Project[]) => {
		return [...projects].sort((a, b) => {
			const aFeatured = a.featured ? 1 : 0
			const bFeatured = b.featured ? 1 : 0
			return bFeatured - aFeatured
		})
	}

	const debouncedNameFilter = useMemo(() => {
		return debounce((name: string) => {
			const filteredProjects = projects.filter(project =>
				project.title.toLowerCase().includes(name.toLowerCase())
			)
			setFilteredProjects(sortFeaturedFirst(filteredProjects))
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
					: projects.filter(project => project.applicationCategory === category)

			setFilteredProjects(sortFeaturedFirst(filteredProjects))
		},
		[projects, setFilteredProjects]
	)

	useEffect(() => {
		setFilteredProjects(sortFeaturedFirst(projects))
		setSelectedCategory('all')
	}, [projects, setFilteredProjects])

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
						size='sm'
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
