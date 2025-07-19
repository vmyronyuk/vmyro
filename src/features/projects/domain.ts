import { ProjectCategory } from './types'

export const projectCategoriesValue: ProjectCategory[] = [
	'all',
	'fullstack',
	'frontend',
	'backend',
	'ai',
] as const

export const projectCategoriesOptions: {
	label: string
	value: ProjectCategory
}[] = [
	{ label: 'All', value: 'all' },
	{ label: 'Fullstack', value: 'fullstack' },
	{ label: 'Frontend', value: 'frontend' },
	{ label: 'Backend', value: 'backend' },
	{ label: 'AI', value: 'ai' },
]

export const applicationTypeValue = ['Mobile', 'Desktop', 'Web'] as const

export const applicationTypeOptions = [
	{ label: 'Mobile', value: 'mobile' },
	{ label: 'Desktop', value: 'desktop' },
	{ label: 'Web', value: 'web' },
]

export const applicationStatusValue = [
	'In Progress',
	'Completed',
	'Cancelled',
] as const

export const applicationStatusOptions = [
	{ label: 'In Progress', value: 'inProgress' },
	{ label: 'Completed', value: 'completed' },
	{ label: 'Cancelled', value: 'cancelled' },
]

export const techStackValue = [
	'Next.js',
	'React',
	'Node.js',
	'Payload CMS',
	'Tailwind CSS',
	'TypeScript',
	'PostgreSQL',
	'MongoDB',
	'Vercel',
	'Vercel AI SDK',
	'OpenAI API',
	'Mapbox',
	'Google Maps',
	'Zustand',
	'Jotai',
	'Redux Toolkit',
	'Telegraf.js',
	'React Hook Form',
	'Zod',
	'Docker',
] as const

export const techStackOptions = [
	{
		label: 'Next.js',
		value: 'nextjs',
	},
	{
		label: 'React',
		value: 'react',
	},
	{
		label: 'Node.js',
		value: 'nodejs',
	},
	{
		label: 'Payload CMS',
		value: 'payloadcms',
	},
	{
		label: 'Tailwind CSS',
		value: 'tailwindcss',
	},
	{
		label: 'TypeScript',
		value: 'typescript',
	},
	{
		label: 'PostgreSQL',
		value: 'postgresql',
	},
	{
		label: 'MongoDB',
		value: 'mongodb',
	},
	{
		label: 'Vercel',
		value: 'vercel',
	},
	{
		label: 'Vercel AI SDK',
		value: 'vercelai',
	},
	{
		label: 'OpenAI API',
		value: 'openai',
	},
	{
		label: 'Mapbox',
		value: 'mapbox',
	},
	{
		label: 'Google Maps',
		value: 'googlemaps',
	},
	{
		label: 'Zustand',
		value: 'zustand',
	},
	{
		label: 'Jotai',
		value: 'jotai',
	},
	{
		label: 'Redux Toolkit',
		value: 'redux',
	},
	{
		label: 'Telegraf.js',
		value: 'telegraf',
	},
	{
		label: 'React Hook Form',
		value: 'reacthookform',
	},
	{
		label: 'Zod',
		value: 'zod',
	},
	{
		label: 'Docker',
		value: 'docker',
	},
]
