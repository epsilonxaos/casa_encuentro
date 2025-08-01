import { AnimatePresence, motion, usePresence } from 'framer-motion'
import { Sello, SelloStroke } from './helpers/Icons'
import { useState } from 'react'
import Titulo from './helpers/Titulo'
import { useEffect } from 'react'

export default function Entrada({ changeIntro }) {
	const [isHover, setIsHover] = useState(false)
	const variants = {
		circulo: {
			hidden: {
				opacity: 0,
				background: '#00000000',
				when: 'afterChildren',
			},
			show: {
				opacity: 1,
				transition: {
					when: 'beforeChildren',
					duration: 1,
				},
			},
			bg: {
				background: '#A65D4F',
				transition: {
					when: 'beforeChildren',
					duration: 1,
					delay: 2.5,
				},
			},
			isHover: {
				background: '#A65D4F',
			},
			notHover: {
				scale: 1,
				background: '#A65D4F',
			},
			exit: {
				opacity: 0,
				transition: {
					duration: 1,
				},
			},
		},
		dibujado: {
			hidden: {
				pathLength: 0,
				fillOpacity: 0,
				when: 'afterChildren',
			},
			show: {
				pathLength: 1,
				transition: {
					when: 'beforeChildren',
					delay: 1.5,
					duration: 1.5,
				},
			},
			second: {
				fillOpacity: 1,
				stroke: '#00000000',
				transition: {
					when: 'beforeChildren',
					delay: 2,
					duration: 1.5,
				},
			},
			exit: {
				opacity: 0,
				transition: {
					duration: 0.5,
				},
			},
		},
	}

	useEffect(() => {
		setTimeout(() => changeIntro(), 3700)
	}, [])

	return (
		<AnimatePresence mode='wait'>
			<div className='bg-black h-screen w-full flex items-center justify-center flex-col absolute z-10 top-0 left-0'>
				<motion.div
					onHoverStart={e => setIsHover(true)}
					onHoverEnd={e => setIsHover(false)}
					initial={{ padding: '8px' }}
					animate={isHover ? { padding: '30px' } : { padding: '8px' }}
					className='p-2 relative z-10 cursor-pointer'>
					<motion.div
						variants={variants.circulo}
						initial={'hidden'}
						animate={['show', 'bg', isHover ? 'isHover' : '']}
						exit={'exit'}
						className='p-2 rounded-full bg-naranja absolute top-0 left-0 w-full h-full z-[-1]'
					/>
					<Sello
						variants={variants.dibujado}
						className='w-[250px] h-[250px]'
					/>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}
