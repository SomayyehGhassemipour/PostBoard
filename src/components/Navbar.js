import { useEffect } from 'react';
import { useUserAuth } from '../services/firebase/AuthenicationService';
import { useNavigate } from 'react-router-dom';
import Button from '../shared components/Button';
import Icon from '../shared components/Icon';

export const Navbar = () => {
	const userAuth = useUserAuth();
	const navigate = useNavigate();
	const currentPage = '/login' === window.location.pathname;
	const currentUser = !userAuth.user ? 'Guest User' : userAuth.user.email;
	console.log(currentUser);
	useEffect(() => {
		if (userAuth.user) navigate('/home');
	}, []);

	const signOutHandler = (event) => {
		event.preventDefault();
		userAuth.logOut();
		navigate('/login');
	};

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
				<div className="container-row">
					<Icon url="icons/icons8-avatar-24.png" name="delete" />
					<p className="text-grey-500">{currentUser}</p>
					{!currentPage && (
						<Button
							classname="button-text bg-blue-200 text-grey-500"
							clickHandler={signOutHandler}
						>
							Sign Out
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
