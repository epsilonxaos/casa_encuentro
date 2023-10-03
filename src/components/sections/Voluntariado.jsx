import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import celular from '../../img/voluntariado/celular.png'
import { twMerge } from 'tailwind-merge'

export default function Voluntariado() {
	return (
		<>
			<Container className='px-[50px] md:px-[80px] lg:px-[120px] py-[90px]  xl:pt-[180px] overflow-hidden relative max-w-[1320px]'>
				<div className='flex flex-wrap items-center'>
					<div className='w-full md:w-2/5 mb-[30px] md:mb-0'>
						<LazyLoadImage
							src={celular}
							alt='Celular'
							className='w-[80%] max-w-[400px] mx-auto'
						/>
					</div>
					<div className='w-full md:w-3/5'>
						<Titulo className='mb-[20px]'>Haz de tu estadía una experiencia enriquecedora y gratificante.</Titulo>
						<hr className='border-crema w-[60%] max-w-[215px] mx-auto mb-[20px]' />
						<Parrafo className='font-semibold'>
							Nos llena de alegría y emoción darte la más cordial bienvenida a Casa Encuentro.
						</Parrafo>
						<Parrafo>
							Estamos encantados de contar con personas tan dedicadas y comprometidas como tú, dispuestos a contribuir
							con tu tiempo y esfuerzo para hacer de esta experiencia una verdadera comunidad de hospitalidad y
							amistad. 
						</Parrafo>
						<Parrafo>
							Mérida es una ciudad rica en cultura, historia y tradiciones, y estamos seguros de que disfrutarás
							explorando cada rincón de esta encantadora ciudad. Además, tendrás la oportunidad de conocer a personas
							maravillosas y aprender de su cultura y costumbres mientras trabajas en nuestro hostal.
						</Parrafo>
						<Titulo>Déjanos tu datos para contactarte</Titulo>

						<form
							action=''
							className='sm:grid sm:grid-cols-2 gap-4'>
							<Input
								label={'Nombre'}
								name='nombre'
								className=''
							/>
							<Input
								label={'Apellidos'}
								name='apellidos'
								className=''
							/>
							<Input
								type='email'
								label={'Correo electrónico'}
								name='email'
								className=''
							/>
							<Input
								label={'Edad'}
								name='edad'
								className=''
							/>
							<Input
								label={'Ciudad'}
								name='ciudad'
								className='col-span-2'
							/>

							<div className='relative z-0 col-span-2 mb-[25px] md:mb-0'>
								<label
									htmlFor='mensaje'
									className='bg-black text-dorado text-sm'>
									Déjanos tu mensaje
								</label>
								<textarea
									id='mensaje'
									rows='4'
									className='block py-2.5 w-full text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-3'></textarea>
							</div>
							<div className='col-span-2 text-center'>
								<button className='bg-naranja py-2 px-7 text-white font-medium text-sm'>Quiero postularme</button>
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

const Input = ({
	className = '',
	type = 'text',
	name = '',
	label = '',
	placeholder = '',
	onChange = false,
	value = '',
}) => {
	return (
		<div className={twMerge('relative z-0 w-full mb-[25px] md:mb-0 group', className)}>
			<input
				type={type}
				name={name}
				{...(onChange && { onChange })}
				id={name}
				className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-3'
				placeholder={placeholder}
				required
				value={value}
			/>
			<label
				htmlFor={name}
				className='bg-black peer-focus:font-medium absolute z-[1] text-sm text-dorado left-2 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
				{label}
			</label>
		</div>
	)
}
