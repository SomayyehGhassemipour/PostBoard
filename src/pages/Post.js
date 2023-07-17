import { useState, useEffect } from 'react';
// import Icon from '../shared components/Icon';
// import Button from '../shared components/Button';
import { useParams } from 'react-router-dom';
import { readPost } from '../services/post/PostService';
import { PostCard } from '../components/PostCard';

export const Post = () => {
	const [postData, setPost] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		const fetchPosts = async (id) => {
			try {
				const postData = await readPost(id);
				setPost(postData);
			} catch (error) {
				console.log('Error fetching posts: ', error);
			}
		};
		fetchPosts(id);
	}, []);

	return (
		<div className="container">
			{postData.length === 0 ? (
				<p className="text-grey-200">Loading ...</p>
			) : (
				<PostCard
					id={id}
					title={postData.title}
					author={postData.author}
					description={postData.description}
					editBottons={true}
				/>
			)}
		</div>
	);
};
