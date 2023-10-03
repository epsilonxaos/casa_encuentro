import Container from '../container/Container'
import Titulo from '../helpers/Titulo'
import Parrafo from '../helpers/Parrafo'
import amenidades from '../data/amenidades.json'
import DecoracionHorizontal from '../helpers/DecoracionHorizontal'

export default function Amenidades() {
	return (
		<>
			<Container className='px-[50px] md:px-[80px] lg:px-[120px] pt-[90px] overflow-hidden relative max-w-[1320px]'>
				<Titulo>
					Espacios diseñados pensando en tu <br />
					comodidad y tus necesidades
				</Titulo>
				<hr className='border-crema w-full max-w-[215px] mx-auto mb-[40px]' />

				<div className='flex flex-wrap justify-center'>
					{amenidades.map(k => (
						<div
							className='text-center w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 mb-[20px]'
							key={'amenidad-' + k.title}>
							<img
								src={k.img}
								alt='Amenidad'
								className='max-h-[45px] max-w-[64px] mb-2 inline-block'
							/>
							<Parrafo>{k.title}</Parrafo>
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
