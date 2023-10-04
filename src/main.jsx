//* General
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//* i18n
import './lang/i18n'
//* Styles
import './fonts/fonts.css'
import './css/tailwind.css'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
