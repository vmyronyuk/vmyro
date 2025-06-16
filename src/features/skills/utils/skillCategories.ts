import { Code, Database, Settings } from 'lucide-react'

export const skillCategories = [
	{
		title: 'Frontend',
		icon: Code,
		skills: [
			'React',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'JavaScript',
			'HTML/CSS',
		],
		color: 'from-red-500 to-red-600',
	},
	{
		title: 'Backend',
		icon: Database,
		skills: [
			'Node.js',
			'PostgreSQL',
			'MongoDB',
			'Express.js',
			'Payload CMS',
			'OpenAI API',
		],
		color: 'from-blue-500 to-blue-600',
	},
	{
		title: 'Tools',
		icon: Settings,
		skills: ['Git', 'Docker', 'Vercel', 'VS Code', 'Figma', 'Vercel AI SDK'],
		color: 'from-green-500 to-green-600',
	},
]
