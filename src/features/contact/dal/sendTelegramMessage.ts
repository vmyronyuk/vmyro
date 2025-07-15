export async function sendTelegramMessage(message: string) {
	const TOKEN = process.env.BOT_TOKEN!
	const CHAT_ID = process.env.CHAT_ID!

	await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			chat_id: CHAT_ID,
			text: message,
		}),
		cache: 'no-store',
	})
}
