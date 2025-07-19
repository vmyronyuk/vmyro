import { StatsItem } from './StatsItem'

type StatsProps = {
	totalProjects: number | string
	categories: number
	technologies: number | string
	clients: number | string
}

export function Stats({
	totalProjects,
	categories,
	technologies,
	clients,
}: StatsProps) {
	return (
		<div className='md:w-xl w-full grid gap-y-6 sm:gap-0 grid-cols-2 md:grid-cols-4 sm:mt-5'>
			<StatsItem label='Total Projects' value={totalProjects} />
			<StatsItem label='Categories' value={categories} />
			<StatsItem label='Technologies' value={technologies} />
			<StatsItem label='Clients' value={clients} />
		</div>
	)
}
