import Container from './container/Container'
import { TfiLocationPin } from 'react-icons/tfi'
import { FiPhone, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
	const { t } = useTranslation()
	return (
		<footer className='bg-dorado'>
			<Container className='text-black text-center py-[25px] text-sm md:text-sm'>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:items-center'>
					<p>
						<TfiLocationPin
							className='inline mr-1'
							size={16}
						/>
						<span>Calle 27 #218, entre 26 y 28, García Ginerés.</span>
					</p>
					<p>
						<a href='tel:+5512273282'>
							<FiPhone
								className='inline mr-1'
								size={16}
							/>
							<span>(55)1 227 3282</span>
						</a>
					</p>
					<p>
						<a
							href='https://www.facebook.com/profile.php?id=100089245131698'
							target='_blank'
							rel='noopener noreferrer'
							className='mr-2'>
							<FiFacebook
								className='inline'
								size={16}
							/>
						</a>
						<a
							href='https://www.instagram.com/casaencuentro_mx/'
							target='_blank'
							rel='noopener noreferrer'>
							<FiInstagram
								className='inline mr-1'
								size={16}
							/>{' '}
							<span className='underline'>casaencuentro_mx/</span>
						</a>
					</p>
					<p>
						<a href='mailto:contacto@casaencuentro.mx'>
							<FiMail
								className='inline mr-1'
								size={16}
							/>
							contacto@casaencuentro.mx
						</a>
					</p>
				</div>
			</Container>

			<div className='bg-black text-sm md:text-base text-center py-[15px]'>
				<p>
					<Link to={'/politicas'}>{t('footer.politicas')}</Link>
				</p>
			</div>
		</footer>
	)
}
