import { AboutMe } from '@/features/aboutMe/components/AboutMe'
import { Contact } from '@/features/contact/components/Contactc'
import { Hero } from '@/features/hero/components/Hero'
import { Projects } from '@/features/projects/components/Projects'
import { getAllProjects } from '@/features/projects/dal/getAllProjects'
import { Skills } from '@/features/skills/components/Skills'

export default async function Main() {
	const projects = await getAllProjects()

	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<Hero />
			<AboutMe />
			<Skills />
			<Projects projects={projects} />
			<Contact />
		</div>
	)
}
