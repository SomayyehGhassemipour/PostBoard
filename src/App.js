import './App.scss';
import Authenication from './pages/Authenication';
import { UserAuthContextProvider } from './services/firebase/authContext';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<UserAuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Authenication />} />
				</Routes>
			</BrowserRouter>
		</UserAuthContextProvider>
	);
}

export default App;
