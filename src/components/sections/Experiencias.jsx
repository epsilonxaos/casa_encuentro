import Container from '../container/Container'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import experiencias from '../data/experiencias.json'
import { generarId } from '../helpers/helpers'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DecoracionExp } from '../helpers/Icons'

export default function Experiencias() {
	return (
		<>
			<Container className='px-[15px] md:px-[25px] lg:px-[50px] pt-[90px] overflow-hidden relative max-w-[1320px]'>
				<Titulo.H2 className='mb-0'>Haz de tu viaje una experiencia inolvidable</Titulo.H2>
				<Parrafo className='text-center mb-[40px] max-w-[600px] mx-auto'>
					<span className='font-semibold'>Diseñemos juntos el mejor itinerario</span> a tu medida con tours
					personalizados para que conozcas los lugares que realmente deseas visitar, a tu ritmo y creando experiencias
					inolvidables con las personas que amas.
				</Parrafo>
			</Container>
			<ExperienciaUI data={experiencias} />
		</>
	)
}

const ExperienciaUI = ({ data = [] }) => {
	if (!data.length) return
	const ID = generarId(9)

	return (
		<div className='overflow-hidden relative z-[1] lg:px-[80px]'>
			<Container className='relative max-w-[1320px] px-0 z-10'>
				<DecoracionExp className='hidden md:block h-auto w-[30px] lg:w-[50px] 2xl:w-[75px] absolute top-0 right-[4px] lg:right-[-60px] 2xl:right-[-90px] z-10' />
				<DecoracionExp className='hidden md:block h-auto w-[30px] lg:w-[50px] 2xl:w-[75px] absolute bottom-0 left-[4px] lg:left-[-60px] 2xl:left-[-90px] z-10' />

				{data.map((d, k) => (
					<article
						className={`${
							k % 2 == 0 ? 'bg-[#090909]' : ''
						} py-[15px] px-[15px] max-w-[1260px] mx-auto md:px-[25px] lg:px-[50px] mb-[40px]`}
						key={'galeria-' + ID + '-' + k}>
						<LazyLoadImage
							src={d.icon}
							alt='Icono '
							className='w-[99px] mx-auto mb-5'
						/>
						<Titulo className='mb-0'>{d.title}</Titulo>
						<Parrafo className='text-center md:w-[90%] mx-auto'>{d.description}</Parrafo>

						<GaleriaUI galeria={d.gallery} />
					</article>
				))}
			</Container>
		</div>
	)
}

const GaleriaUI = ({ galeria = [] }) => {
	if (!galeria.length) return
	const IDGaleria = generarId(8)

	return (
		<div className='flex flex-wrap justify-center'>
			{galeria.map((g, k) => (
				<figure
					className='w-1/2 sm:w-1/3 md:w-1/3 xl:w-1/5'
					key={'galeria-' + IDGaleria + '-' + k}>
					<LazyLoadImage
						src={g}
						alt='Imagen galeria'
						className='object-cover'
					/>
				</figure>
			))}
		</div>
	)
}
