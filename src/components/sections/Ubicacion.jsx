import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import mapa from '../../img/ubicacion/mapa.png'
import mapaMovil from '../../img/ubicacion/mapamovil.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Ubicacion() {
	return (
		<section className='pt-[90px]'>
			<Titulo.H2 className='mb-0'>Nos ubicamos en:</Titulo.H2>
			<Parrafo className='text-center'>
				A 10 minutos del centro histórico, sobre la Calle 27 218, entre 26 y 28, García Ginerés, Mérida, Yucatán.
			</Parrafo>

			<LazyLoadImage
				className='w-full max-w-max hidden md:block'
				src={mapa}
				alt='Mapa'
			/>
			<LazyLoadImage
				className='w-full max-w-max md:hidden'
				src={mapaMovil}
				alt='Mapa movil'
			/>
		</section>
	)
}
