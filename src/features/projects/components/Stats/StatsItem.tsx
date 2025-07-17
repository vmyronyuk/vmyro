type StatsItemProps = {
	label: string
	value: string | number
}

export function StatsItem({ label, value }: StatsItemProps) {
	return (
		<div className='flex flex-col gap-1.5 items-center'>
			<span className='text-2xl sm:text-3xl font-semibold text-primary'>
				{value}
			</span>
			<span className='text-muted-foreground text-sm'>{label}</span>
		</div>
	)
}
