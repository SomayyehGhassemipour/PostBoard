import { db } from '../firebase/config';
import {
	collection,
	addDoc,
	getDoc,
	doc,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore';

//add a new post
export const addPost = async (newPost) => {
	try {
		const postRef = await addDoc(collection(db, 'posts'), newPost);
		return postRef.id;
	} catch (error) {
		return { error: error.message };
	}
};

// read a post by ID
export const readPost = async (postId) => {
	const postRef = doc(db, 'posts', postId);
	try {
		const postSnap = await getDoc(postRef);
		return postSnap.data();
	} catch (error) {
		return { error: error.message };
	}
};

//update a post
export const updatePost = async (postId, newData) => {
	const postRef = doc(db, 'posts', postId);
	try {
		await updateDoc(postRef, newData);
		return true;
	} catch (error) {
		return { error: error.message };
	}
};

//delete a post
export const deletePost = async (postId) => {
	const postRef = doc(db, 'posts', postId);
	try {
		await deleteDoc(postRef);
		return true;
	} catch (error) {
		return { error: error.message };
	}
};
