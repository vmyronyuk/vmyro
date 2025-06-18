import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { projectCategoriesOptions } from '../domain'

export function ProjectsFilter() {
	return (
		<div className='flex flex-col gap-6 mt-9'>
			<div className='mx-auto w-xs md:w-md'>
				<Input placeholder='Search project...' />
			</div>
			<div className='flex flex-wrap justify-center gap-2'>
				{projectCategoriesOptions.map(category => (
					<Button
						key={category.value}
						variant={'outline'}
						size={'sm'}
						className='font-semibold'
					>
						{category.label}
					</Button>
				))}
			</div>
		</div>
	)
}
