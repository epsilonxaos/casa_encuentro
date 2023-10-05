import { twMerge } from 'tailwind-merge'

// TODO: Tiene un letter-spacing de 2.4px (tracking-[2.4px])
// TODO: Tiene un line-height de 26.52px (leading-[26px])
// TODO: NO estan aplicados, revisar despues
const Titulo = ({ children, className = '' }) => {
	return (
		<h1
			className={twMerge(
				'text-center font-juliusSansOne text-sm md:text-base lg:text-lg xl:text-2xl mb-[32px]',
				className
			)}>
			{children}
		</h1>
	)
}

const H2 = ({ children, className = '' }) => {
	return (
		<h2
			className={twMerge(
				'text-center font-juliusSansOne text-sm md:text-base lg:text-lg xl:text-2xl mb-[32px]',
				className
			)}>
			{children}
		</h2>
	)
}

const H3 = ({ children, className = '' }) => {
	return (
		<h3
			className={twMerge(
				'text-center font-juliusSansOne text-sm md:text-base lg:text-lg xl:text-2xl mb-[32px]',
				className
			)}>
			{children}
		</h3>
	)
}

Titulo.H2 = H2
Titulo.H3 = H3

export default Titulo
