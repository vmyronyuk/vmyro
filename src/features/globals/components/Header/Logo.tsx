'use client'

import { Terminal } from 'lucide-react'

export function Logo() {
	return (
		<div className='flex items-center gap-2'>
			<div className='w-8 h-8 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center'>
				<Terminal className='w-4 h-4 text-white' />
			</div>
			<span className='font-bold text-xl'>vmyro</span>
		</div>
	)
}
