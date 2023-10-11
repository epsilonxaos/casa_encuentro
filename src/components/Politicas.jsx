import { useTranslation } from 'react-i18next'
import Container from './container/Container'
import Parrafo from './helpers/Parrafo'
import Titulo from './helpers/Titulo'

export const Politicas = () => {
	const { t } = useTranslation()

	return (
		<Container className='px-[15px] md:px-[25px] lg:px-[50px] py-[120px] max-w-6xl'>
			<Titulo.H2>{t('footer.politicas')}</Titulo.H2>
			<Parrafo>
				<span className='font-semibold'>CASA ENCUENTRO</span> respeta su derecho de privacidad. Esta política resume qué
				información personal podemos recoger, de qué manera podemos utilizar esta información y otros temas importantes
				relacionados con su privacidad y protección de datos.
			</Parrafo>
			<Parrafo>
				Es política de <span className='font-semibold'>CASA ENCUENTRO</span> cumplir con todas las leyes de privacidad y
				de protección de datos vigentes. Este compromiso refleja el valor que le damos al hecho de obtener y conservar
				la confianza de nuestros clientes, socios comerciales y demás personas que comparten su información personal con
				nosotros.
			</Parrafo>
			<Parrafo>
				Esta Política se aplica a todos los sitios de Internet y aplicaciones móviles administrados por{' '}
				<span className='font-semibold'>CASA ENCUENTRO</span> o en su nombre, e incluye las compañías de{' '}
				<span className='font-semibold'>CASA ENCUENTRO</span> de todo el mundo (conocidas como “sitio de internet o
				aplicación móvil de <span className='font-semibold'>CASA ENCUENTRO</span>”).
			</Parrafo>
			<Parrafo>
				También se aplica a toda la información personal que <span className='font-semibold'>CASA ENCUENTRO</span> pueda
				recoger de cualquier otro modo:
			</Parrafo>
			<ul className='pl-4'>
				<li>
					<Parrafo className='mb-0'>1. A través de nuestros productos y servicios.</Parrafo>
				</li>
				<li>
					<Parrafo className='mb-0'>
						2. Cuando interactúa con nosotros por medios distintos de un sitio de internet o aplicación móvil de{' '}
						<span className='font-semibold'>CASA ENCUENTRO</span>, por ejemplo, de manera presencial, por teléfono o en
						una feria de muestras o formación.
					</Parrafo>
				</li>
				<li>
					<Parrafo className='mb-0'>
						3. A través de nuestros clientes, distribuidores, proveedores, vendedores y otros socios comerciales (en
						conjunto, “socios comerciales”).
					</Parrafo>
				</li>
			</ul>
			<Parrafo>
				No obstante, los sitios de Internet, aplicaciones móviles, productos y servicios de{' '}
				<span className='font-semibold'>CASA ENCUENTRO</span> pueden tener fines y características distintas. Si se
				necesita proporcionar información adicional o diferente para un determinado sitio de internet, aplicación móvil,
				producto o servicio específico de <span className='font-semibold'>CASA ENCUENTRO</span>, se publicará dicha
				obligación por separado en el sitio de internet, aplicación móvil, producto o servicio que sea pertinente. Cada
				una de estas obligaciones de proporcionar información adicional, políticas o declaraciones de privacidad
				específicas (“Declaración de Privacidad Específica”) complementan y enmiendan esta Política.
			</Parrafo>
		</Container>
	)
}
