import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import banner from '../../img/bannerhostal.png'
import { Booking, HostelWorld, Start, Tripadvisor } from '../helpers/Icons'
import Botton from '../helpers/Botton'

export default function Reviews() {
	return (
		<div className='bg-dorado'>
			<Container className='bg px-[20px] py-[55px] overflow-hidden relative max-w-[1320px]'>
				<Titulo.H2 className='text-black'>historias de los huéspedes</Titulo.H2>
				<div className='flex flex-wrap mb-[40px]'>
					<div className='w-full md:w-2/3 md:pr-[40px] flex flex-col justify-between min-h-[290px] mb-8 md:mb-0'>
						<article>
							<Start className='mb-8' />
							<Parrafo className='text-black font-medium'>
								Una excelente opción para disfrutar cómodamente de Mérida y para hacer nuevos amigos. ¡Me encantó!
							</Parrafo>
							<Parrafo className='text-black font-medium'>
								Además de ser un lugar cómodo y bello, en todo momento me hicieron sentir en casa. Espero volver pronto.
							</Parrafo>
						</article>
						<div className='flex items-center justify-between'>
							<Tripadvisor className={'max-w-max h-[13px] sm:h-[22px] lg:h-[26px]'} />
							<Booking className={'max-w-max h-[13px] sm:h-[22px] lg:h-[26px]'} />
							<HostelWorld className={'max-w-max h-[13px] sm:h-[22px] lg:h-[26px]'} />
						</div>
					</div>
					<table className='text-black font-bold w-full md:w-1/3'>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Personal</td>
							<td className='pt-5 text-right'>10</td>
						</tr>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Instalaciones y servicios</td>
							<td className='pt-5 text-right'>10</td>
						</tr>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Limpieza</td>
							<td className='pt-5 text-right'>10</td>
						</tr>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Confort</td>
							<td className='pt-5 text-right'>10</td>
						</tr>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Relación - precio</td>
							<td className='pt-5 text-right'>10</td>
						</tr>
						<tr className='border-b-4 border-b-[#E1D7CB] rounded-lg '>
							<td className='pt-5'>Ubicación</td>
							<td className='pt-5 text-right'>9.3</td>
						</tr>
					</table>
				</div>

				<div className='text-center'>
					<Botton.Reservar className='text-black font-semibold' />
				</div>
			</Container>
		</div>
	)
}
