import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'
import parse from 'html-react-parser'
import banner from '../../img/bannerhostal.png'
import { useTranslation } from 'react-i18next'

export default function Bienvenida() {
	const { t, i18n } = useTranslation()
	return (
		<>
			<Container
				className='px-[50px] md:px-[80px] lg:px-[120px] pt-[90px] md:pt-[140px] xl:pt-[180px] overflow-hidden relative max-w-[1320px]'
				id='hostal'>
				<DecoracionVertical
					className='absolute top-0 left-[-10px] lg:left-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
				<DecoracionVertical
					className='absolute top-0 right-[-10px] lg:right-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
				<Titulo>{t('home.bienvenida.titulo')}</Titulo>
				<Parrafo className='text-center'>{t('home.bienvenida.parrafo_1')}</Parrafo>
				<Parrafo className='text-center'>{parse(t('home.bienvenida.parrafo_2'))}</Parrafo>
				<Parrafo className='text-center'>{parse(t('home.bienvenida.parrafo_3'))}</Parrafo>
				<Parrafo className='font-semibold text-center mb-50px'>{t('home.bienvenida.parrafo_4')}</Parrafo>
			</Container>

			<img
				src={banner}
				alt='Banner Hostal'
				className='object-cover w-full min-h-[200px] max-w-[1290px] mx-auto'
			/>
		</>
	)
}
