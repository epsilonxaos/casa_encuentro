import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

const Botton = ({ children, type = 'button', className = '' }) => {
	return (
		<button
			{...(type && { type })}
			className={twMerge('bg-naranja py-2 px-7 text-white font-medium text-sm')}>
			{children}
		</button>
	)
}

const Reservar = ({ children, className = '' }) => {
	const { t } = useTranslation()
	return (
		<a
			className={twMerge('bg-naranja py-2 px-7 text-white font-medium text-sm', className)}
			href='https://hotels.cloudbeds.com/reservation/qZCAVP'
			target='_blank'
			rel='noopener noreferrer'>
			{children ?? t('reservar')}
		</a>
	)
}

Botton.Reservar = Reservar

export default Botton
