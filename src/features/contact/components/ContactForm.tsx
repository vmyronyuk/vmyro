import { Field } from '@/components/form/Field'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

export function ContactForm() {
	return (
		<form>
			<Card className='py-6 px-6 rounded-md'>
				<Field>
					<Label>Name *</Label>
					<Input placeholder='Your full name' />
				</Field>

				<Field>
					<Label>Email *</Label>
					<Input placeholder='your.email@example.com' />
				</Field>

				<Field>
					<Label>Message *</Label>
					<Textarea placeholder='Tell me about your project...' rows={5} />
				</Field>

				<Button
					variant={'shadow'}
					className='font-semibold flex items-center gap-3'
				>
					<Send />
					Send Message
				</Button>
			</Card>
		</form>
	)
}
