import { Badge } from '@/components/ui/badge'
import { getProjectById } from '@/features/projects/dal/getProjectById'
import {
	applicationStatusOptions,
	projectCategoriesOptions,
	techStackOptions,
} from '@/features/projects/domain'
import { getLabel } from '@/lib/utils/getLabel'
import { ArrowLeft, Calendar, CircleAlert, CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	if (!id) notFound()

	const project = await getProjectById(Number(id))

	return (
		<div className='container mt-20 flex justify-center mb-20'>
			<div className='mt-8 sm:max-w-4/5'>
				<Link
					href={'/#projects'}
					className='flex items-center gap-2 text-sm mb-8'
				>
					<ArrowLeft className='w-4 h-4' />
					Back to Projects
				</Link>
				<div className='flex flex-col gap-4'>
					<h2 className='text-3xl md:text-4xl font-semibold'>
						{project.title}
					</h2>
					<div className='flex items-center gap-3.5'>
						<div className='flex items-center gap-3 text-muted-foreground'>
							<Calendar className='w-4 h-4' />
							<span>{project.finishedAt}</span>
						</div>
						<Badge variant={'outline'}>
							{getLabel(
								projectCategoriesOptions,
								project.applicationCategory || 'fullstack'
							)}
						</Badge>
						<Badge variant={'success'}>
							{getLabel(applicationStatusOptions, project.applicationStatus)}
						</Badge>
					</div>
					<p className='text-muted-foreground text-lg'>{project.description}</p>
					<div className='border px-6 py-8 flex flex-col gap-5 rounded my-2'>
						<h3 className='text-2xl font-semibold'>Technologies Used</h3>
						<div className='flex flex-wrap gap-3'>
							{project.techStack &&
								project.techStack.map(tech => (
									<Badge
										key={tech}
										variant={'secondary'}
										className='py-1.5 text-sm'
									>
										{getLabel(techStackOptions, tech)}
									</Badge>
								))}
						</div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
						<div className='border p-6 rounded-md flex flex-col gap-3.5'>
							<h3 className='text-2xl font-semibold flex items-center gap-3'>
								<CircleAlert className='text-orange-500' />
								Challanges
							</h3>
							<ul className='flex flex-col gap-3.5'>
								{project.challenges &&
									project.challenges.map(challenge => (
										<li
											key={challenge.id}
											className='text-muted-foreground flex items-center gap-2.5'
										>
											<div className='bg-orange-500 min-w-2 min-h-2 rounded-full' />
											{challenge.challenge}
										</li>
									))}
							</ul>
						</div>

						<div className='border p-6 rounded-md flex flex-col gap-3.5'>
							<h3 className='text-2xl font-semibold flex items-center gap-3'>
								<CircleCheckBig className='text-green-500' />
								Solutions
							</h3>
							<ul className='flex flex-col gap-3.5'>
								{project.solutions &&
									project.solutions.map(solution => (
										<li
											key={solution.id}
											className='text-muted-foreground flex items-center gap-2.5'
										>
											<div className='bg-green-500 min-w-2 min-h-2 rounded-full' />
											{solution.solution}
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
