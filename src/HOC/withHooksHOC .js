import React from 'react';
import { useUserAuth } from '../services/firebase/authContext';
import { useNavigate } from 'react-router-dom';

export const withHooksHOC = (WrappedComponent) => {
	// eslint-disable-next-line react/display-name
	return (props) => {
		const auth = useUserAuth();
		const navigate = useNavigate();
		return <WrappedComponent userAuth={auth} navigate={navigate} {...props} />;
	};
};
