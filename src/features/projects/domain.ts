import { ProjectCategory } from './types'

export const projectCategoriesValue: ProjectCategory[] = [
	'all',
	'fullstack',
	'frontend',
	'backend',
	'ai',
] as const

export const projectCategoriesOptions: {
	label: string
	value: ProjectCategory
}[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Fullstack', value: 'fullstack' },
	{ label: 'Frontend', value: 'frontend' },
	{ label: 'Backend', value: 'backend' },
	{ label: 'AI', value: 'ai' },
]
