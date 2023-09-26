import { LazyLoadImage } from 'react-lazy-load-image-component'
import banner from '../img/banner.jpg'

export default function Banner() {
	return (
		<LazyLoadImage
			src={banner}
			className='w-full aspect-square sm:aspect-video max-h-[calc(100vh-80px)] object-cover'
			alt='Banner principal'
		/>
	)
}
