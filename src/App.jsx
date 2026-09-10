import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GradientTest from './pages/GradientTest';
import GradientResult from './pages/GradientResult';
import './App.css';

function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Routes>
				<Route path='/' element={<Home />} />
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
