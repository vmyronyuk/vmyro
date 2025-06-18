type ProjectsWrapperProps = {
	children: React.ReactNode
}

export function ProjectsWrapper({ children }: ProjectsWrapperProps) {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>{children}</div>
	)
}
