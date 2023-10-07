import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import celular from '../../img/voluntariado/celular.png'
import { twMerge } from 'tailwind-merge'
import { Input } from '../forms/Input'
import { useTranslation } from 'react-i18next'

export default function Voluntariado() {
	const { t } = useTranslation()
	return (
		<>
			<Container
				className='px-[50px] md:px-[80px] lg:px-[120px] py-[90px]  xl:pt-[180px] overflow-hidden relative max-w-[1320px]'
				id={'voluntariado'}>
				<div className='flex flex-wrap items-center'>
					<div className='w-full md:w-2/5 mb-[30px] md:mb-0'>
						<img
							src={celular}
							alt='Celular'
							className='w-[80%] max-w-[400px] mx-auto'
						/>
					</div>
					<div className='w-full md:w-3/5'>
						<Titulo.H2 className='mb-[20px]'>{t('home.voluntariado.titulo')}</Titulo.H2>
						<hr className='border-crema w-[60%] max-w-[215px] mx-auto mb-[20px]' />
						<Parrafo className='font-semibold'>{t('home.voluntariado.parrafo_1')}</Parrafo>
						<Parrafo>{t('home.voluntariado.parrafo_2')}</Parrafo>
						<Parrafo>{t('home.voluntariado.parrafo_3')}</Parrafo>
						<Titulo.H3>{t('home.voluntariado.titulo_formulario')}</Titulo.H3>

						<form
							action=''
							className='sm:grid sm:grid-cols-2 gap-4'>
							<Input
								label={t('nombre')}
								name='nombre'
								className=''
							/>
							<Input
								label={t('apellido')}
								name='apellidos'
								className=''
							/>
							<Input
								type='email'
								label={t('correo')}
								name='email'
								className=''
							/>
							<Input
								label={t('edad')}
								name='edad'
								className=''
							/>
							<Input
								label={t('ciudad')}
								name='ciudad'
								className='col-span-2'
							/>

							<div className='relative z-0 col-span-2 mb-[25px] md:mb-0'>
								<label
									htmlFor='mensaje'
									className='bg-black text-dorado text-sm'>
									{t('mensaje')}
								</label>
								<textarea
									id='mensaje'
									rows='4'
									className='block py-2.5 w-full text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-3'></textarea>
							</div>
							<div className='col-span-2 text-center'>
								<button className='bg-naranja py-2 px-7 text-white font-medium text-sm'>
									{t('home.voluntariado.boton_enviar')}
								</button>
							</div>
						</form>
					</div>
				</div>
				<DecoracionVertical
					className='absolute bottom-0 left-[-10px] lg:left-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
				<DecoracionVertical
					className='absolute bottom-0 right-[-10px] lg:right-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
			</Container>
		</>
	)
}
