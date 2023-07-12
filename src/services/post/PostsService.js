import { db } from '../firebase/config';
import { getDocs, collection } from 'firebase/firestore';

// read all posts
export const readPosts = async () => {
	const postRef = collection(db, 'posts');
	try {
		const postSnap = await getDocs(postRef);
		const posts = postSnap.docs.map((doc) => ({
			data: doc.data(),
			id: doc.id,
		}));
		return posts;
	} catch (error) {
		return { error: error.message };
	}
};
