import { LazyLoadImage } from 'react-lazy-load-image-component'
import banner from '../../img/banner.jpg'
import sello from '../../img/sello.png'
import { useEffect } from 'react'

export default function Banner() {
	return (
		<div className='relative'>
			<img
				src={banner}
				className='w-full aspect-square sm:aspect-video max-h-[calc(100vh-80px)] object-cover'
				alt='Banner principal'
			/>

			<img
				src={sello}
				alt='Logo circular'
				className='w-[90px] md:w-[120px] xl:w-[215px] absolute bottom-[-60px] md:bottom-[-80px] xl:bottom-[-140px] left-1/2 -translate-x-1/2'
			/>
		</div>
	)
}
