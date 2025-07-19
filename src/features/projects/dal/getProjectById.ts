import config from '@payload-config'
import { getPayload } from 'payload'
import { Project } from '../../../../payload-types'

export async function getProjectById(id: Project['id']) {
	const payload = await getPayload({ config })

	const project = await payload.findByID({
		collection: 'projects',
		id,
	})

	return project
}
