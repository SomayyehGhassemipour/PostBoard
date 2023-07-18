import { useEffect } from 'react';
import { useUserAuth } from '../services/firebase/AuthenicationService';
import { useNavigate } from 'react-router-dom';
import Button from '../shared components/Button';
import Icon from '../shared components/Icon';

export const Navbar = () => {
	const userAuth = useUserAuth();
	const navigate = useNavigate();
	console.log(userAuth.user);

	useEffect(() => {
		if (userAuth.user) navigate('/home');
	}, []);

	const signOutHandler = (event) => {
		event.preventDefault();
		userAuth.logOut();
		navigate('/login');
	};
	const signInHandler = (event) => {
		event.preventDefault();
		navigate('/login');
	};
	const currentPage = '/login' === window.location.pathname;

	return (
		<div className="container-row bg-grey-200">
			<Button
				classname="button-contained text-grey-500"
				clickHandler={() => {
					navigate('/home');
				}}
			>
				PostBoard
			</Button>
			<div style={{ marginLeft: 'auto' }}>
				{!userAuth.user ? (
					<div className="container-row">
						<Icon url="icons/icons8-avatar-24.png" name="delete" />
						<p className="text-grey-500">Gust user</p>
						{currentPage === '/login' && (
							<Button
								classname="button-text bg-blue-200 text-grey-500"
								clickHandler={signInHandler}
							>
								Sign In
							</Button>
						)}
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
	);
};
