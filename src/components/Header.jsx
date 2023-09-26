import { useState } from 'react'
import logo from '../img/logo.svg'
import Container from './container/Container'

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
