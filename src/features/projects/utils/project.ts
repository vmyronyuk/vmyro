import { Project } from '../types'

export const projects: Project[] = [
	{
		title: 'KinderFinder Platform',
		description:
			'A smart discovery platform for kindergartens in Switzerland featuring an interactive Mapbox map, advanced filters, and a CMS for structured content management. Includes a custom web scraper and an AI-powered data extraction engine that identifies and stores the most relevant information from third-party websites. Fully developed end-to-end as the sole developer.',
		tech: ['Next.js', 'Payload CMS', 'Mapbox', 'OpenAI API'],
		category: 'fullstack',
		link: '#',
		featured: true,
	},
	{
		title: 'CareConnect Platform',
		description:
			'A two-sided platform connecting hospitals and caregivers. Nurses and medical professionals can create profiles, upload certifications, and browse job listings. Clinics can post jobs and receive smart matches based on custom filters and uploaded credentials. Built with secure file upload, role-based logic, and match-making algorithms.',
		tech: ['Next.js', 'Payload CMS', 'PostgreSQL', 'Vercel'],
		category: 'fullstack',
		link: '#',
		featured: true,
	},
	{
		title: 'AI Estimator Assistant',
		description:
			'An AI-powered cost estimation assistant for a software development agency. Users interact via chat to describe project requirements, and the assistant generates a complete estimate, including cost breakdown, timeline, and required team structure. Engineered from scratch, including backend architecture and AI logic integration.',
		tech: ['Next.js', 'Payload CMS', 'PostgreSQL', 'Vercel AI SDK'],
		category: 'fullstack',
		link: '#',
		featured: true,
	},
]
