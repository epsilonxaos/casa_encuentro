import Banner from './components/sections/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Bienvenida from './components/sections/Bienvenida'

function App() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Bienvenida />
			</main>
			<Footer />
		</>
	)
}

export default App
