import Banner from './components/sections/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Bienvenida from './components/sections/Bienvenida'
import Amenidades from './components/sections/Amenidades'
import Habitaciones from './components/sections/Habitaciones'
import Experiencias from './components/sections/Experiencias'
import Ubicacion from './components/sections/Ubicacion'
import Voluntariado from './components/sections/Voluntariado'

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Bienvenida />
				<Amenidades />
				<Habitaciones />
				<Experiencias />
				<Ubicacion />
				<Voluntariado />
			</main>
			<Footer />
		</>
	)
}

export default App
