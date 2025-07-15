'use client'

import { Button } from '@/components/ui/button'
import { Loader, Send } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<Button
			variant='shadow'
			className='font-semibold flex items-center gap-3'
			type='submit'
			disabled={pending}
		>
			{pending ? <Loader className='animate-spin' /> : <Send />}
			{pending ? 'Sending...' : 'Send Message'}
		</Button>
	)
}
