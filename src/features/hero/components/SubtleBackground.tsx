export function SubtleBackground() {
	return (
		<div>
			<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5' />
			<div className='absolute top-1/4 left-1/4 w-44 h-96 bg-red-500/15 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000' />

			<div className='absolute inset-0 opacity-[0.02] dark:opacity-[0.05]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 3px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 3px)
          `,
						backgroundSize: '100px 100px',
					}}
				/>
			</div>
		</div>
	)
}
