import Image from 'next/image'

export function Photo() {
	return (
		<div className='order-1 md:order-2 flex justify-center'>
			<div className='relative'>
				<div className='w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl'>
					<Image
						src='/avatar.png'
						alt='avatar'
						priority
						fill
						className='object-cover rounded-xl'
					/>
				</div>

				<div className='bg-green-500 w-5 h-5 rounded-full absolute -right-1 -top-1 border-4 border-border animate-pulse'></div>
			</div>
		</div>
	)
}
