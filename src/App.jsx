import Banner from './components/sections/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Bienvenida from './components/sections/Bienvenida'
import Amenidades from './components/sections/Amenidades'

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Bienvenida />
				<Amenidades />
			</main>
			<Footer />
		</>
	)
}

export default App
