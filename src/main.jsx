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
import './css/reservationPlugin.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
