import { AboutMe } from '@/features/aboutMe/components/AboutMe'
import { Hero } from '@/features/hero/components/Hero'

export default function Main() {
	return (
		<div className='w-full flex flex-col items-center justify-center'>
			<Hero />
			<AboutMe />
		</div>
	)
}
