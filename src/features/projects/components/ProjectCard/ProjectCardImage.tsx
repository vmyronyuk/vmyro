import Image from 'next/image'
import { Project } from '../../types'

type ProjectImageCardProps = {
	projectTitle: Project['title']
}

export function ProjectCardImage({ projectTitle }: ProjectImageCardProps) {
	return (
		<div className='aspect-video relative'>
			<Image
				src='/ndav2.png'
				alt={`${projectTitle} - Project Screenshot`}
				fill
				className='object-cover w-full h-full hover:scale-105 transition-all duration-300 rounded-t-xl z-10'
			/>
			<div className='absolute inset-0 bg-[#111112] rounded-t-xl' />
		</div>
	)
}
