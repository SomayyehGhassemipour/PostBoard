import './App.scss';
import Authenication from './pages/Authenication';
import { UserAuthContextProvider } from './services/firebase/AuthenicationService';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Post } from './pages/Post';

function App() {
	return (
		<UserAuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Authenication />} />
					<Route path="/post/:id" element={<Post />} />
				</Routes>
			</BrowserRouter>
		</UserAuthContextProvider>
	);
}

export default App;
