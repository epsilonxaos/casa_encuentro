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
	return (
		<a
			className={twMerge('bg-naranja py-2 px-7 text-white font-medium text-sm', className)}
			href='https://rbe.zaviaerp.com/?hotel=casaencuentro'
			target='_blank'
			rel='noopener noreferrer'>
			{children ?? 'Reservar'}
		</a>
	)
}

Botton.Reservar = Reservar

export default Botton
