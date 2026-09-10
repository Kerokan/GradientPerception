import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GradientTest from './pages/GradientTest';
import GradientResult from './pages/GradientResult';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/gradient/:gradientName' element={<GradientTest />} />
				<Route
					path='/gradient/:gradientName/result/:threshold'
					element={<GradientResult />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
