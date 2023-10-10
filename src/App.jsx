import Banner from './components/sections/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Bienvenida from './components/sections/Bienvenida'
import Amenidades from './components/sections/Amenidades'
import Habitaciones from './components/sections/Habitaciones'
import Experiencias from './components/sections/Experiencias'
import Ubicacion from './components/sections/Ubicacion'
import Voluntariado from './components/sections/Voluntariado'
import Reviews from './components/sections/Reviews'
import Entrada from './components/Entrada'
import { useState } from 'react'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Transition from './components/animations/Transitions'
import { Toaster } from 'sonner'

function App() {
	const [into, setInto] = useState(true)
	const location = useLocation()

	if (!into) return <Entrada onClick={() => setInto(true)} />

	return (
		<>
			<Toaster
				richColors
				position='top-center'
			/>
			<AnimatePresence mode='wait'>
				<ScrollToTop />
				<Header />
				<Routes
					location={location}
					key={location.pathname}>
					<Route
						index
						element={
							<Transition>
								<main>
									<Banner />
									<Bienvenida />
									<Amenidades />
									<Habitaciones />
									<Experiencias />
									<Reviews />
									<Ubicacion />
									<Voluntariado />
								</main>
							</Transition>
						}
					/>
				</Routes>
				<Footer />
			</AnimatePresence>
		</>
	)
}

export default App
