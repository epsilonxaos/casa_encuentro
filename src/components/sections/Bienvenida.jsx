import { LazyLoadImage } from 'react-lazy-load-image-component'
import Container from '../container/Container'
import DecoracionVertical from '../helpers/DecoracionVertical'
import Parrafo from '../helpers/Parrafo'
import Titulo from '../helpers/Titulo'

import banner from '../../img/bannerhostal.png'

export default function Bienvenida() {
	return (
		<>
			<Container className='px-[50px] md:px-[80px] lg:px-[120px] pt-[90px] md:pt-[140px] xl:pt-[180px] overflow-hidden relative max-w-[1320px]'>
				<DecoracionVertical
					className='absolute top-0 left-[-10px] lg:left-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
				<DecoracionVertical
					className='absolute top-0 right-[-10px] lg:right-0'
					options={{ className: 'w-[40px] md:w-[60px] lg:w-[77px]' }}
				/>
				<Titulo>
					¡BIENVENIDOS A CASA ENCUENTRO! TU HOGAR LEJOS DE CASA EN LA HERMOSA COLONIA JOAQUÍN GARCÍA GINERÉS DE MÉRIDA,
					YUCATÁN.
				</Titulo>
				<Parrafo>
					Esta colonia es un lugar lleno de historia y encanto. Su nombre honra a un destacado médico y científico
					yucateco del siglo XIX, Joaquín García Ginerés, quien contribuyó significativamente al desarrollo de la
					medicina en México y se destacó por su amor por la comunidad y la cultura local.
				</Parrafo>
				<Parrafo>
					Casa Encuentro, con su ambiente acogedor y su compromiso con la comunidad, rinde homenaje a este ilustre
					personaje. <span className='font-semibold'>¿Y por qué Casa Encuentro?</span> Bueno, el nombre refleja la
					esencia de lo que somos. Queremos ser ese lugar donde tú, viajero, te encuentres contigo mismo, con otros
					viajeros y con la historia y cultura de Mérida. Aquí, los encuentros y las conexiones son el corazón de
					nuestra filosofía.
				</Parrafo>
				<Parrafo>
					Nuestro hostal es el lugar perfecto para experimentar la auténtica vida de Mérida mientras disfrutas de una
					estancia cómoda y relajada. Estamos ubicados en una zona tranquila, lo que te garantiza noches de sueño
					reparador y días llenos de tranquilidad. Además, estamos a solo unos minutos del centro histórico, del icónico
					Paseo de Montejo y estamos a 3 calles del Parque de las Américas, un lugar donde los lugareños y visitantes se
					congregan para disfrutar de conciertos al aire libre, actividades culturales y relajarse bajo la sombra de los
					árboles con una rica marquesita.
				</Parrafo>
				<Parrafo className='font-semibold text-center mb-50px'>
					¡Reserva tu estancia ahora y empieza tu aventura en Casa Encuentro!
				</Parrafo>
			</Container>

			<LazyLoadImage
				src={banner}
				alt='Banner Hostal'
				className='object-cover w-full min-h-[200px] max-w-[1290px] mx-auto'
			/>
		</>
	)
}
