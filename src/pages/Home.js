import Button from '../shared components/Button';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../services/firebase/AuthenicationService';

export default function Home() {
	const navigate = useNavigate();
	const userAuth = useUserAuth();

	const signOutHandler = (event) => {
		event.preventDefault();
		userAuth.logOut();
	};

	if (!userAuth.user) {
		navigate('/');
	} else
		return (
			<div className="container bg-grey-200">
				<h3 className="text-grey-500">Profile</h3>
				<h5 className="text-grey-500">{userAuth.user.email}</h5>
				<div style={{ marginLeft: 'auto' }}>
					<Button
						classname="button-contained bg-blue-200 text-grey-500"
						clickHandler={signOutHandler}
					>
						Sign out
					</Button>
				</div>
			</div>
		);
}
