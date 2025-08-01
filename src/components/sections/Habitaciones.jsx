import parse from 'html-react-parser'
import { generarId } from '../helpers/helpers'
import Titulo from '../helpers/Titulo'
import Parrafo from '../helpers/Parrafo'
import Container from '../container/Container'
import icono from '../../img/habitaciones/icono-1.svg'
import DecoracionHorizontal from '../helpers/DecoracionHorizontal'

import habComp from '../../img/habitaciones/hab-comp.jpg'
import habPriv from '../../img/habitaciones/hab-priv.jpg'
import adorno1 from '../../img/habitaciones/adorno1.png'
import adorno2 from '../../img/habitaciones/adorno2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Botton from '../helpers/Botton'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

import habitaciones from '../data/habitaciones.json'

export default function Habitaciones() {
	const { t, i18n } = useTranslation()
	return (
		<>
			<Container
				className='px-[50px] md:px-[80px] lg:px-[120px] pt-[90px] overflow-hidden relative max-w-[1320px]'
				id={'habitaciones'}>
				<Titulo.H2 className='mb-[15px] max-w-[270px] 2xl:max-w-[350px] mx-auto'>
					{t('home.habitaciones.titulo')}
				</Titulo.H2>
				<img
					src={icono}
					alt='Icono habitaciones'
					className='mb-[50px] lg:mb-[90px] w-[90px] mx-auto'
				/>
			</Container>

			<div className='overflow-hidden'>
				<Container className='max-w-[1320px] px-0'>
					{habitaciones.map((h, key) => (
						<UIRoom
							key={'hab-' + key}
							img={h.cover}
							title={h.titulo[i18n.language]}
							description={h.desc[i18n.language]}
							sizeRoom={h.size[i18n.language]}
							amenidades={h.amenidades[i18n.language]}
							type={key % 2 === 0 ? '' : 'reverse'}
							gallery={h.galeria}
						/>
					))}
				</Container>
			</div>

			<DecoracionHorizontal
				className='w-full overflow-hidden'
				options={{ className: 'inline' }}
			/>
		</>
	)
}

function UIRoom({ img, title, amenidades = [], description, sizeRoom, type = 'normal', gallery = [] }) {
	return (
		<div
			className={`flex flex-wrap items-center mb-[60px] md:mb-[80px] lg:mb-[100px] ${
				type === 'reverse' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'
			}`}>
			<div className={`w-full md:w-[45%] pl-10 pr-4 mb-7 md:mb-0`}>
				<h3 className='font-juliusSansOne text-base md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left'>
					{title}
				</h3>
				<Parrafo className='font-medium mb-0 text-center md:text-left'>{parse(description)}</Parrafo>
				<Parrafo className='mb-[15px] text-center md:text-left'>{parse(sizeRoom)}</Parrafo>

				<ul className='columns-2 w-full max-w-[400px] md:max-w-none mx-auto list-disc md:pl-[15px] mb-[30px]'>
					{amenidades.map(k => (
						<li key={'room-amenidad' + generarId(7)}>{k}</li>
					))}
				</ul>

				<div className='text-center md:text-left'>
					<Botton.Reservar />
				</div>
			</div>
			<div className={`w-full mb-[40px] md:mb-0 md:w-[50%] relative z-[1]`}>
				{type === 'reverse' ? (
					<div
						className='hidden md:block h-[80px] w-[450px] bg-no-repeat bg-contain bg-right absolute top-1/2 left-[-460px] z-10'
						style={{ backgroundImage: "url('" + adorno2 + "')" }}
					/>
				) : (
					<div
						className='hidden md:block h-[80px] w-[450px] bg-no-repeat bg-contain bg-left absolute top-1/2 right-[-460px] z-10'
						style={{ backgroundImage: "url('" + adorno1 + "')" }}
					/>
				)}

				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					modules={[Autoplay]}
					autoplay={{
						delay: 4000,
					}}
					speed={1500}
					loop={true}>
					{gallery.map((g, key) => (
						<SwiperSlide key={'galeria-' + key + '-' + title}>
							<img
								src={g}
								alt='Imagen de galeria'
								className='h-[230px] md:h-[330px] object-cover w-full'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
