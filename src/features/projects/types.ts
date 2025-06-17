export type ProjectCategory =
	| 'all'
	| 'fullstack'
	| 'frontend'
	| 'backend'
	| 'ai'

export type Project = {
	title: string
	description: string
	tech: string[]
	category: ProjectCategory
	link: string
	featured: boolean
}
