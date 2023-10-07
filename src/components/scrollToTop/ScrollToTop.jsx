import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const location = useLocation()

	useEffect(() => {
		console.log(location.hash)
		const element = location.hash ? document.getElementById(location.hash.replace('#', '')) : null

		console.log(element)
		setTimeout(() => {
			window.scrollTo({
				behavior: element ? 'smooth' : 'auto',
				top: element ? element.offsetTop : 0,
			})
		}, 100)
	}, [location])

	return null
}

export default ScrollToTop
