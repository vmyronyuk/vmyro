'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Description() {
	return (
		<div className='order-2 md:order-1 flex flex-col gap-4'>
			<p className='text-lg leading-relaxed'>
				I`m a passionate full-stack developer with 2+ years of experience
				creating web applications that solve real-world problems. I specialize
				in modern JavaScript frameworks and love building products that make a
				difference.
			</p>

			<p className='text-lg leading-relaxed'>
				When I`m not coding, you`ll find me exploring new technologies,
				contributing to open-source projects, or sharing knowledge with the
				developer community. I believe in continuous learning and staying
				up-to-date with industry trends.
			</p>

			<p className='text-lg leading-relaxed'>
				I`m currently open to new opportunities and exciting projects. Let`s
				build something amazing together!
			</p>

			<div className='flex gap-4 pt-4'>
				<Button variant={'outline'} asChild className='h-9'>
					<Link target='_blank' href='https://github.com/vmyronyuk'>
						<Github />
						GitHub
					</Link>
				</Button>
				<Button variant={'outline'} asChild className='h-9'>
					<Link
						target='_blank'
						href='https://ua.linkedin.com/in/vitaliymyronyuk'
					>
						<Linkedin />
						LinkedIn
					</Link>
				</Button>
			</div>
		</div>
	)
}
