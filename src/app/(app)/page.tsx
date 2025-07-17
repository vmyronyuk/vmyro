import { AboutMe } from '@/features/aboutMe/components/AboutMe'
import { Contact } from '@/features/contact/components/Contactc'
import { Hero } from '@/features/hero/components/Hero'
import { Projects } from '@/features/projects/components/Projects'
import { Skills } from '@/features/skills/components/Skills'

export default function Main() {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}
