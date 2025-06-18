import Image from 'next/image'
import { Project } from '../../types'

type ProjectImageCardProps = {
	projectTitle: Project['title']
}

export function ProjectCardImage({ projectTitle }: ProjectImageCardProps) {
	return (
		<div className='aspect-video relative'>
			<Image
				src='/nda.png'
				alt={`${projectTitle} - Project Screenshot`}
				fill
				className='object-cover w-full h-full hover:scale-105 transition-all duration-300 rounded-t-xl'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
		</div>
	)
}
