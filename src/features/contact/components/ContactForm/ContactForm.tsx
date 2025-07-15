'use client'

import { Field } from '@/components/form/Field'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useActionState, useEffect, useRef } from 'react'
import { sendTelegramMessageAction } from '../../actions/sendToTelegram'
import { SubmitButton } from './SubmitButton'

export function ContactForm() {
	const [state, formAction] = useActionState(sendTelegramMessageAction, null)

	const formRef = useRef<HTMLFormElement>(null)

	useEffect(() => {
		if (state === 'ok') {
			formRef.current?.reset()
		}
	}, [state])

	return (
		<form action={formAction}>
			<Card className='py-6 px-6 rounded-md'>
				<Field>
					<Label>Name *</Label>
					<Input name='name' placeholder='Your full name' required />
				</Field>

				<Field>
					<Label>Email or Telegram *</Label>
					<Input name='email' placeholder='your.email@example.com' required />
				</Field>

				<Field>
					<Label>Message *</Label>
					<Textarea
						name='message'
						placeholder='Tell me about your project...'
						rows={5}
						required
					/>
				</Field>

				<SubmitButton />
			</Card>
		</form>
	)
}
