import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getLabel } from '@/lib/utils/getLabel'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { projectCategoriesOptions } from '../domain'
import { projects } from '../utils/project'

export function Projects() {
	return (
		<section id='projects' className='py-20 w-full container'>
			<div className='px-4 text-center flex flex-col gap-3'>
				<h2 className='text-3xl md:text-4xl font-bold'>Featured Projects</h2>
				<p className='text-muted-foreground text-lg'>Some of my recent work</p>
			</div>
			<div className='flex flex-col gap-12'>
				<div className='flex flex-col gap-6 mt-9'>
					<div className='mx-auto w-xs md:w-md'>
						<Input placeholder='Search project...' />
					</div>
					<div className='flex flex-wrap justify-center gap-2'>
						{projectCategoriesOptions.map(category => (
							<Button
								key={category.value}
								variant={'outline'}
								size={'sm'}
								className='font-semibold'
							>
								{category.label}
							</Button>
						))}
					</div>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map(project => (
						<Card
							key={project.title}
							className={`flex flex-col h-full hover:shadow-xl hover:shadow-primary/10 py-0 transition-all duration-300 backdrop-blur-sm border border-primary/15 hover:border-primary/20 hover:-translate-y-1 gap-0 ${
								project.featured ? 'ring-2 ring-primary/20' : ''
							}`}
						>
							{project.featured && (
								<div className='absolute top-4 left-4 z-10 bg-primary  text-xs px-2 py-1 rounded-full font-medium text-white'>
									Featured
								</div>
							)}

							<div className='aspect-video relative'>
								<Image
									src='/nda.png'
									alt={`${project.title} - Project Screenshot`}
									fill
									className='object-cover w-full h-full hover:scale-105 transition-all duration-300 rounded-t-xl'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>

							<CardContent className='py-6 flex flex-col flex-1'>
								<div className='flex items-center justify-between mb-3'>
									<h3 className='font-semibold text-xl hover:text-primary transition-colors'>
										{project.title}
									</h3>
									<Badge
										variant={'secondary'}
										className='rounded-full font-semibold text-sm'
									>
										{getLabel(projectCategoriesOptions, project.category)}
									</Badge>
								</div>

								<p className='text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2'>
									{project.tech.map((tech, index) => (
										<Badge variant={'outline'} key={index}>
											{tech}
										</Badge>
									))}
								</div>

								<div className='flex justify-end mt-auto'>
									<Button
										asChild
										className='w-full bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/25 transition-all duration-300'
									>
										<a
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
											aria-label={`View ${project.title} project`}
										>
											<ExternalLink className='w-4 h-4 mr-2' />
											View Project
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
