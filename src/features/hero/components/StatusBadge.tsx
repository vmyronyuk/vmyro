export function StatusBadge() {
	return (
		<div className='inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 w-fit mx-auto'>
			<div className='w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse' />
			<span className='text-sm font-semibold text-green-500'>
				Available for work
			</span>
		</div>
	)
}
