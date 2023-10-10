import { useState } from 'react'
import logo from '../img/logo.svg'
import Container from './container/Container'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { obtenerFecha } from './helpers/helpers'
import { useEffect } from 'react'
import es from 'date-fns/locale/es'
import { twMerge } from 'tailwind-merge'
import { DateTime } from 'luxon'
import { FaTimes } from 'react-icons/fa'
import { BsCalendarWeek } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, scroll } from 'framer-motion'

const v1 = {
	hide: {
		top: -10,
	},
	show: {
		top: 80,
	},
}

const variants = {
	menu: {
		hide: {
			opacity: 0,
			when: 'afterChildren',
		},
		hideD: {
			display: 'none',
			transition: {
				when: 'beforeChildren',
				// delay: 0.1,
			},
		},
		show: {
			display: 'block',
			when: 'afterChildren',
		},
		showB: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				// delay: 0.1,
			},
		},
	},
}

const imgV = {
	normal: {
		left: 0,
		translateX: '0%',
	},
	center: {
		left: '50%',
		translateX: '-50%',
	},
}
export default function Header({ scrollYProgress }) {
	const [open, setOpen] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<header className='fixed top-0 left-0 w-full z-50 text-xs md:text-base'>
				<div className='bg-black'>
					{/* //? Activacion solo escritorio, debido a tiempos cortos para la entrega y presion por parte del cliente */}
					<Container className='hidden md:block'>
						<AnimatePresence mode='wait'>
							<nav className='flex items-center justify-between py-[25px]'>
								<motion.img
									src={logo}
									initial={imgV.normal}
									animate={scrollPosition <= 250 ? imgV.normal : imgV.center}
									alt='Casa encuentro'
									className='w-[180px] relative cursor-pointer'
									onClick={() => {
										window.scrollTo({ top: 0, left: 0, behavior: 'smooth', transition: { duration: 0.4 } })
									}}
								/>
								<div className='flex relative pr-[calc(30px+52px)] min-h-[24px]'>
									<AnimatePresence mode='wait'>
										{scrollPosition <= 250 && (
											<motion.div
												initial={[variants.menu.hide, variants.menu.hideD]}
												animate={[variants.menu.show, variants.menu.showB]}
												exit={variants.menu.hide}
												transition={{ duration: 0.3 }}>
												<Menu className='flex md:items-center md:gap-[33px] menuText' />
											</motion.div>
										)}
									</AnimatePresence>
									<div className='ml-[30px] absolute right-0 menuText'>
										<Language />
									</div>
								</div>
								<button
									onClick={() => setOpen(!open)}
									className='border border-dorado px-2 py-1 md:hidden'>
									Menú
								</button>
							</nav>
						</AnimatePresence>
					</Container>

					{/* //? Activacion solo movil */}
					<Container className='md:hidden'>
						<nav className='flex items-center justify-between py-[25px]'>
							<div>
								<Language />
							</div>
							<img
								src={logo}
								alt='Casa encuentro'
								className='w-[180px] relative cursor-pointer'
								onClick={() => {
									window.scrollTo({ top: 0, left: 0, behavior: 'smooth', transition: { duration: 0.4 } })
								}}
							/>
							<button
								onClick={() => setOpen(!open)}
								className='border border-dorado px-2 py-1'>
								Menú
							</button>
						</nav>
					</Container>
				</div>
				<AnimatePresence mode='wait'>
					{open && (
						<motion.div
							initial={v1.hide}
							animate={v1.show}
							exit={v1.hide}
							transition={{ duration: 0.3 }}
							className='w-full fixed z-[-1] top-[80px] left-0 py-[25px] pt-5 bg-black md:hidden'>
							<Menu className='flex items-center justify-center gap-[20px] menuText pt-0' />
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<FormReservaciones />

			{open && (
				<div className='bg-black md:hidden bg-opacity-10 z-20 fixed top-0 left-0 w-full h-full backdrop-blur-sm'></div>
			)}
		</>
	)
}

const Language = () => {
	const { i18n } = useTranslation()

	return (
		<>
			<span
				onClick={() => i18n.changeLanguage('es')}
				className={`mr-2 cursor-pointer ${i18n.language == 'es' ? 'underline font-semibold' : 'opacity-60'}`}>
				ES
			</span>
			<span
				onClick={() => i18n.changeLanguage('en')}
				className={`cursor-pointer ${i18n.language == 'en' ? 'underline font-semibold' : 'opacity-60'}`}>
				EN
			</span>
		</>
	)
}

const Menu = ({ className = '' }) => {
	const { t } = useTranslation()
	return (
		<ul className={className}>
			<li>
				<Link to={'/#hostal'}>Hostal</Link>
			</li>
			<li>
				<Link to={'/#habitaciones'}>{t('header.reservar')}</Link>
			</li>
			<li>
				<Link to={'/#voluntariado'}>{t('header.voluntariado')}</Link>
			</li>
			<li>
				<Link to={'/#reviews'}>{t('header.resenias')}</Link>
			</li>
		</ul>
	)
}

const FormReservaciones = () => {
	const [currentDate, setCurrentDate] = useState(false)
	const [checkIn, setCheckIn] = useState(false)
	const [checkOut, setCheckOut] = useState(false)
	const [open, setOpen] = useState(true)

	const { t } = useTranslation()

	useEffect(() => {
		const currentTime = obtenerFecha()
		setCurrentDate(currentTime.dateCurrent)
		setCheckIn({ date: currentTime.dateCurrent, dateFormat: currentTime.dateCurrentFormat })
		setCheckOut({ date: currentTime.dateCurrent2, dateFormat: currentTime.dateCurrentFormat2 })
	}, [])

	if (!checkIn && !checkOut) return

	const v = {
		open: {
			height: 'auto',
		},
		close: {
			height: '0px',
		},
	}

	return (
		<AnimatePresence mode='wait'>
			<motion.div className='absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-[calc(100%+80px) z-[1] w-full sm:max-w-[400px]'>
				<motion.div
					initial={v.close}
					animate={open ? v.open : v.close}
					exit={open ? v.open : v.close}
					transition={{ duration: 0.3 }}
					className='relative px-2 bg-black rounded-b z-[1] overflow-hidden'>
					<form
						action='https://rbe.zaviaerp.com/'
						method='get'>
						<input
							type='hidden'
							name='zbe_hotel_id'
							defaultValue='casaencuentro'
						/>
						<input
							type='hidden'
							name='lng'
							defaultValue='es'
						/>
						<input
							type='hidden'
							name='zbe_arrival'
							value={checkIn.dateFormat}
						/>
						<input
							type='hidden'
							name='zbe_departure'
							value={checkOut.dateFormat}
						/>
						<div className='flex justify-center flex-wrap py-3'>
							<InputCalendar
								className='w-auto'
								selected={checkIn.date}
								minDate={currentDate}
								startDate={checkIn.date}
								endDate={checkOut.date}
								onChange={dates => {
									const [start, end] = dates
									setCheckIn({ date: start, dateFormat: DateTime.fromJSDate(start).toFormat('yyyy-MM-dd') })
									setCheckOut({ date: end, dateFormat: DateTime.fromJSDate(end).toFormat('yyyy-MM-dd') })
								}}
								label='Check in - Check out'
								name='fechasrange'
							/>
							<button
								className='bg-naranja py-2 px-2 text-white font-medium text-sm'
								type='submit'>
								{t('header.reservar_ahora')}
							</button>
						</div>
					</form>
				</motion.div>
				<button
					onClick={() => setOpen(!open)}
					className={`absolute flex items-center -z-[1] -bottom-[27px] left-1/2 -translate-x-1/2 ${
						!open ? 'bg-naranja' : 'bg-slate-900'
					} text-white py-1 px-2 rounded-b text-sm`}>
					{!open ? (
						<>
							<BsCalendarWeek className='inline mr-1' /> {t('header.reservar_ahora')}
						</>
					) : (
						<>
							<FaTimes className='inline mr-1' /> {t('ocultar')}
						</>
					)}
				</button>
			</motion.div>
		</AnimatePresence>
	)
}

const InputCalendar = ({
	className = '',
	name = '',
	label = '',
	selected = '',
	minDate = '',
	onChange,
	endDate,
	startDate,
	selectsStart,
}) => {
	return (
		<div className={twMerge('relative z-0 w-[190px] group mr-2 sm:mr-3', className)}>
			<ReactDatePicker
				{...(name && { name })}
				{...(selected && { selected })}
				{...(minDate && { minDate })}
				{...(onChange && { onChange })}
				{...(selectsStart && { selectsStart })}
				{...(startDate && { startDate })}
				{...(endDate && { endDate })}
				locale={es}
				selectsRange
				className='block py-2.5 w-[190px] mx-auto text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-1 text-center'
			/>
			<label
				htmlFor={name}
				className='bg-black peer-focus:font-medium absolute z-[1] text-sm text-dorado left-2 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
				{label}
			</label>
		</div>
	)
}
