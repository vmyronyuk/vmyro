import config from '@payload-config'
import { getPayload } from 'payload'

export async function getAllProjects() {
	const payload = await getPayload({ config })

	const projectDocs = await payload.find({
		collection: 'projects',
		limit: 50,
	})

	const projects = projectDocs.docs

	return projects
}
