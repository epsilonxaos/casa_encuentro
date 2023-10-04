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

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<header className='fixed top-0 left-0 w-full z-50 bg-black text-xs md:text-base'>
				{/* //TODO: Verificar los espaciados de padding en X */}
				<Container className=''>
					<nav className='flex items-center justify-between py-[25px]'>
						<div className='md:hidden'>
							<Language />
						</div>
						<img
							src={logo}
							alt='Casa encuentro'
							className='w-[180px]'
						/>
						<Menu className='hidden md:flex md:items-center md:gap-[33px] menuText' />
						<button
							onClick={() => setOpen(!open)}
							className='border border-dorado px-2 py-1 md:hidden'>
							Menú
						</button>
					</nav>
				</Container>
				{open && (
					<Menu className='w-full fixed top-[80px] left-0 py-[25px] bg-black md:hidden flex items-center justify-center gap-[20px] menuText' />
				)}
			</header>

			<FormReservaciones />

			{open && (
				<div className='bg-black md:hidden bg-opacity-10 z-20 fixed top-0 left-0 w-full h-full backdrop-blur-sm'></div>
			)}
		</>
	)
}

function Language() {
	return <>ES EN</>
}

function Menu({ className = '' }) {
	return (
		<ul className={className}>
			<li>Hostal</li>
			<li>Reservar</li>
			<li>Voluntariado</li>
			<li>Reseñas</li>
			<li className='hidden md:inline'>
				<Language />
			</li>
		</ul>
	)
}

const FormReservaciones = () => {
	const [currentDate, setCurrentDate] = useState(false)
	const [checkIn, setCheckIn] = useState(false)
	const [checkOut, setCheckOut] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const currentTime = obtenerFecha()
		setCurrentDate(currentTime.dateCurrent)
		setCheckIn({ date: currentTime.dateCurrent, dateFormat: currentTime.dateCurrentFormat })
		setCheckOut({ date: currentTime.dateCurrent2, dateFormat: currentTime.dateCurrentFormat2 })
	}, [])

	useEffect(() => {
		console.log('%c >>> checkIn ', 'background: #03071e; color: #ffba08; font-weight: bold')
		console.log(checkIn)
	}, [checkIn])

	if (!checkIn && !checkOut) return

	return (
		<div className='absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-[calc(100%+80px) z-[1] w-full sm:max-w-[400px]'>
			{open && (
				<div className='relative px-2 bg-black rounded-b z-[1]'>
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
								className='w-[calc(50%-20px)] sm:w-auto'
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
								Reservar ahora
							</button>
						</div>
					</form>
				</div>
			)}

			<button
				onClick={() => setOpen(!open)}
				className={`absolute flex items-center -z-[1] -bottom-[27px] left-1/2 -translate-x-1/2 ${
					!open ? 'bg-naranja' : 'bg-red-900'
				} text-white py-1 px-2 rounded-b text-sm`}>
				{!open ? (
					<>
						<BsCalendarWeek className='inline mr-1' /> Reservar ahora
					</>
				) : (
					<>
						<FaTimes className='inline mr-1' /> Cerrar
					</>
				)}
			</button>
		</div>
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
		<div className={twMerge('relative z-0 w-full sm:w-[190px] mb-[15px] sm:mb-0 group sm:mr-3', className)}>
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
				className='block py-2.5 !w-[90%] sm:!w-[190px] mx-auto text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-1 text-center'
			/>
			<label
				htmlFor={name}
				className='bg-black peer-focus:font-medium absolute z-[1] text-sm text-dorado left-2 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
				{label}
			</label>
		</div>
	)
}
