import './App.scss';
import Authenication from './pages/Authenication';
import { UserAuthContextProvider } from './services/firebase/AuthenicationService';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Post } from './pages/Post';
import { Navbar } from './components/Navbar';
import { CreatePost } from './pages/CreatePost';
import { UpdatePost } from './pages/UpdatePost';

function App() {
	return (
		<UserAuthContextProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Authenication />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/new-post-form" element={<CreatePost />} />
					<Route path="/update-post/:id" element={<UpdatePost />} />
				</Routes>
			</BrowserRouter>
		</UserAuthContextProvider>
	);
}

export default App;
