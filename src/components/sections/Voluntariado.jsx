import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import celular from '../../img/voluntariado/celular.png'
import { Input } from '../forms/Input'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'sonner'
import { BsPlayCircle } from 'react-icons/bs'
import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

export default function Voluntariado() {
	const { t } = useTranslation()
	const form = useRef()
	const captchaRef = useRef(null)
	const [toggler, setToggler] = useState(false) //? Videos

	const sendEmail = async e => {
		e.preventDefault()
		const token = captchaRef.current.getValue()
		captchaRef.current.reset()
		console.log('%c >>> token ', 'background: #03071e; color: #ffba08; font-weight: bold')
		console.log(token)

		if (token) {
			toast.loading('Enviando...')
			emailjs.sendForm('service_67wnguf', 'template_pyiv2pt', form.current, 'cDwg-CB5weplwfNll').then(
				result => {
					form.target.reset()
					toast.success('Mensaje enviando')
				},
				error => {
					toast.error('Ups! Intente más tarde')
					console.log(error.text)
				}
			)
		}
	}

	//Cuenta para correos -> https://dashboard.emailjs.com/admin
	//contacto@casaencuentro.mx
	//CasaEncuentro.98
	return (
		<>
			<FsLightbox
				toggler={toggler}
				sources={['https://www.youtube.com/watch?v=RDS1mH97OdM']}
			/>
			<Container
				className='px-[50px] md:px-[80px] lg:px-[120px] py-[90px]  xl:pt-[180px] overflow-hidden relative max-w-[1320px]'
				id={'voluntariado'}>
				<div className='flex flex-wrap items-center'>
					<div className='w-full md:w-2/5 mb-[30px] md:mb-0 relative'>
						<BsPlayCircle
							size={45}
							onClick={() => {
								console.log('click')
								setToggler(!toggler)
							}}
							className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer'
						/>
						<img
							src={celular}
							alt='Celular'
							className='w-[80%] max-w-[400px] mx-auto'
						/>
					</div>
					<div className='w-full md:w-3/5'>
						<Titulo.H2 className='mb-[20px]'>{t('home.voluntariado.titulo')}</Titulo.H2>
						<hr className='border-crema w-[60%] max-w-[215px] mx-auto mb-[20px]' />
						<Parrafo className='text-center md:text-left font-semibold'>{t('home.voluntariado.parrafo_1')}</Parrafo>
						<Parrafo className='text-center md:text-left '>{t('home.voluntariado.parrafo_2')}</Parrafo>
						<Parrafo className='text-center md:text-left '>{t('home.voluntariado.parrafo_3')}</Parrafo>
						<Titulo.H3>{t('home.voluntariado.titulo_formulario')}</Titulo.H3>

						<form
							ref={form}
							onSubmit={sendEmail}
							className='sm:grid sm:grid-cols-2 gap-4'>
							<Input
								label={
									<span>
										<span className='text-red-500'>*</span> {t('nombre')}
									</span>
								}
								name='nombre'
								className=''
							/>
							<Input
								label={
									<span>
										<span className='text-red-500'>*</span> {t('apellido')}
									</span>
								}
								name='apellidos'
								className=''
							/>
							<Input
								type='email'
								label={
									<span>
										<span className='text-red-500'>*</span> {t('correo')}
									</span>
								}
								name='email'
								className=''
							/>
							<Input
								label={
									<span>
										<span className='text-red-500'>*</span> {t('edad')}
									</span>
								}
								name='edad'
								className=''
							/>
							<Input
								label={
									<span>
										<span className='text-red-500'>*</span> {t('ciudad')}
									</span>
								}
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
									name='mensaje'
									rows='4'
									className='block py-2.5 w-full text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-3'></textarea>
							</div>
							<small className='text-xs col-span-2'>
								<span className='text-red-500'>*</span> Los campos marcados son obligatorios
							</small>
							<div className='flex items-center justify-center col-span-2 mb-3'>
								<ReCAPTCHA
									ref={captchaRef}
									badge='inline'
									sitekey={'6LdPFY0oAAAAAMymuZZh6M82kwIOS4XoCx4tG394'}
								/>
							</div>
							<div className='col-span-2 text-center'>
								<button
									type='submit'
									className='bg-naranja py-2 px-7 text-white font-medium text-sm'>
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
