import Button from '../shared components/Button';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../services/firebase/AuthenicationService';
import Icon from '../shared components/Icon';
import { PostsList } from './PostsList';
export default function Home() {
	const navigate = useNavigate();
	const userAuth = useUserAuth();

	const signOutHandler = (event) => {
		event.preventDefault();
		userAuth.logOut();
		navigate('/login');
	};
	const signInHandler = (event) => {
		event.preventDefault();
		navigate('/login');
	};
	return (
		<>
			<div className="container-row bg-grey-200">
				<h3 className="text-grey-500">PostBoard</h3>
				<div style={{ marginLeft: 'auto' }}>
					{!userAuth.user ? (
						<div className="container-row">
							<Icon url="icons/icons8-avatar-24.png" name="delete" />
							<p className="text-grey-500">Gust user</p>
							<Button
								classname="button-text bg-blue-200 text-grey-500"
								clickHandler={signInHandler}
							>
								Sign In
							</Button>
						</div>
					) : (
						<div className="container-row">
							<Icon url="icons/icons8-avatar-24.png" name="delete" />
							<p className="text-grey-500">{userAuth.user.email}</p>
							<Button
								classname="button-text bg-blue-200 text-grey-500"
								clickHandler={signOutHandler}
							>
								Sign out
							</Button>
						</div>
					)}
				</div>
			</div>
			<PostsList />
		</>
	);
}
