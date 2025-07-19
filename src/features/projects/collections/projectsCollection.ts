import { CollectionConfig } from 'payload'
import {
	applicationStatusOptions,
	applicationTypeOptions,
	projectCategoriesOptions,
	techStackOptions,
} from '../domain'

export const projectsCollection = {
	slug: 'projects',
	fields: [
		{
			name: 'featured',
			type: 'checkbox',
			defaultValue: false,
		},
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
		},
		{
			name: 'finishedAt',
			type: 'text',
			localized: true,
		},
		{
			name: 'applicationType',
			type: 'select',
			options: applicationTypeOptions,
			required: true,
		},
		{
			name: 'applicationStatus',
			type: 'select',
			options: applicationStatusOptions,
			required: true,
		},
		{
			name: 'applicationCategory',
			type: 'select',
			options: projectCategoriesOptions,
		},
		{
			name: 'description',
			type: 'textarea',
			localized: true,
		},
		{
			name: 'links',
			type: 'group',
			fields: [
				{
					name: 'demo',
					type: 'text',
				},
				{
					name: 'code',
					type: 'text',
				},
			],
		},
		{
			name: 'techStack',
			type: 'select',
			options: techStackOptions,
			hasMany: true,
		},
		{
			name: 'challenges',
			type: 'array',
			fields: [
				{
					name: 'challenge',
					type: 'text',
				},
			],
		},
		{
			name: 'solutions',
			type: 'array',
			fields: [
				{
					name: 'solution',
					type: 'text',
				},
			],
		},
		{
			name: 'resultsAndImpact',
			type: 'array',
			fields: [
				{
					name: 'label',
					type: 'text',
				},
				{
					name: 'value',
					type: 'text',
				},
			],
		},
	],
} satisfies CollectionConfig
