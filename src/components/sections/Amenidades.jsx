import Container from '../container/Container'
import Titulo from '../helpers/Titulo'
import Parrafo from '../helpers/Parrafo'
import amenidades from '../data/amenidades.json'
import DecoracionHorizontal from '../helpers/DecoracionHorizontal'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

export default function Amenidades() {
	const { t, i18n } = useTranslation()
	return (
		<>
			<Container className='px-[50px] md:px-[80px] lg:px-[120px] pt-[90px] overflow-hidden relative max-w-[1320px]'>
				<Titulo.H2 className='max-w-[345px]  2xl:max-w-[430px] mx-auto'>{t('home.amenidades.titulo')}</Titulo.H2>
				<hr className='border-crema w-full max-w-[215px] mx-auto mb-[40px]' />
			</Container>
			<Container className='px-0 overflow-hidden relative max-w-[1320px]'>
				<div className='flex flex-wrap justify-center'>
					{amenidades.map((k, key) => (
						<div
							className='text-center w-1/4 sm:w-1/3 lg:w-1/4 xl:w-1/6 mb-[20px]'
							key={'amenidad-' + key}>
							<img
								src={k.img}
								alt='Amenidad'
								className='max-h-[25px] max-w-[64px] mb-2 inline-block'
							/>
							<Parrafo className='text-xs'>{k.title[i18n.language]}</Parrafo>
						</div>
					))}
				</div>
			</Container>

			<DecoracionHorizontal
				className='w-full overflow-hidden'
				options={{ className: 'inline' }}
			/>
		</>
	)
}
