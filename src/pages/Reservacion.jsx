import { useEffect } from 'react'

export default function Reservacion() {
	useEffect(() => {
		document.querySelector('body').classList.add('noneHotel')
	}, [])

	return (
		<div className='h-screen w-full overflow-hidden pt-[65px]'>
			<iframe
				src='https://hotels.cloudbeds.com/reservation/qZCAVP'
				className='border-0 w-full'
				height={'100%'}
				frameborder='0'></iframe>
		</div>
	)
}
