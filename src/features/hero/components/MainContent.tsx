'use client'

export function MainContent() {
	return (
		<div>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-4'>
					<p className='text-muted-foreground text-xl'>Hello, I`m</p>
					<h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent'>
						Vitaliy Myroniuk
					</h1>
					<h2 className='text-primary text-2xl md:text-3xl font-semibold'>
						Full-Stack Developer
					</h2>
				</div>

				<p className='text-lg md:text-xl text-muted-foreground mx-auto max-w-[40rem] leading-relaxed'>
					I create modern web applications with clean code and exceptional user
					experiences. Passionate about turning innovative ideas into digital
					reality.
				</p>
			</div>
		</div>
	)
}
