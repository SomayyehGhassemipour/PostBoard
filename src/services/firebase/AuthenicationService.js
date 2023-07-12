import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
// import auth from './config';
import { db, auth } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const userAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	const logIn = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			return true;
		} catch (error) {
			return { error: error.message };
		}
	};

	const signUp = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				email: user.email,
			});
			return true;
		} catch (error) {
			return { error: error.message };
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
			return true;
		} catch (error) {
			return false;
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
