'use server'

import { State } from '@/lib/types'
import { sendTelegramMessage } from '../dal/sendTelegramMessage'

export async function sendTelegramMessageAction(
	_prevState: State,
	formData: FormData
): Promise<State> {
	const name = formData.get('name') as string
	const email = formData.get('email') as string
	const message = formData.get('message') as string

	const text = `📝 New Form Submission:\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`

	try {
		await sendTelegramMessage(text)
		return 'ok'
	} catch (error) {
		console.error(error)
		return 'error'
	}
}
