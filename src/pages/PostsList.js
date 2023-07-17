import { useEffect, useState } from 'react';
import { readPosts } from '../services/post/PostsService';
import Button from '../shared components/Button';
import { PostCard } from '../components/PostCard';
import { useNavigate } from 'react-router-dom';

export const PostsList = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const postsData = await readPosts();
				setPosts(postsData);
			} catch (error) {
				console.log('Error fetching posts: ', error);
			}
		};
		fetchPosts();
	}, []);

	const showPostHandler = (id) => {
		console.log(id);
		navigate(`/post/${id}`);
	};

	return (
		<div className="container">
			{posts.length === 0 ? (
				<p className="text-grey-200">Loading posts...</p>
			) : (
				<div className="container-column">
					{posts.map((post) => (
						<Button
							classname="button-contained"
							key={post.id}
							clickHandler={() => {
								showPostHandler(post.id);
							}}
						>
							<PostCard
								title={post.data.title}
								author={post.data.author}
								description={post.data.description.slice(0, 200) + '...'}
								editable={false}
							></PostCard>
						</Button>
					))}
				</div>
			)}
		</div>
	);
};
