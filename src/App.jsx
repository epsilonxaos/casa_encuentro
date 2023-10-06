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

function App() {
	const [into, setInto] = useState(false)

	if (!into) return <Entrada onClick={() => setInto(true)} />

	return (
		<>
			<Header />
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
			<Footer />
		</>
	)
}

export default App
