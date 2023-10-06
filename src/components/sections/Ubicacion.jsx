import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import mapa from '../../img/ubicacion/mapa.png'
import mapaMovil from '../../img/ubicacion/mapamovil.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

export default function Ubicacion() {
	const { t } = useTranslation()
	return (
		<section className='pt-[90px]'>
			<Titulo.H2 className='mb-0'>{t('home.ubicacion.titulo')}</Titulo.H2>
			<Parrafo className='text-center'>{t('home.ubicacion.direccion')}</Parrafo>

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
