type ProjectFeaturedProps = {
	isFeatured: boolean
}

export function ProjectFeatured({ isFeatured }: ProjectFeaturedProps) {
	return (
		<>
			{isFeatured && (
				<div className='absolute top-4 left-4 z-10 bg-primary  text-xs px-2 py-1 rounded-full font-medium text-white'>
					Featured
				</div>
			)}
		</>
	)
}
