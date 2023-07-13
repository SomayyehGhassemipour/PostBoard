import { useEffect, useState } from 'react';
import { readPosts } from '../services/post/PostsService';
import Button from '../shared components/Button';
import Icon from '../shared components/Icon';

export const PostsList = () => {
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

	return (
		<>
			{/* <div className="container-row bg-grey-200" style={{ padding: '1rem' }}>
				<h3 className="text-grey-500">Posts</h3>
				<div style={{ marginLeft: 'auto' }}>
					<Button classname="button-text bg-blue-200 text-grey-500 ">
						+ Add new post
					</Button>
				</div>
			</div> */}
			<div className="container">
				{posts.length === 0 ? (
					<p className="text-grey-200">Loading posts...</p>
				) : (
					<div className="container-column">
						{posts.map((post, index) => (
							<Button classname="button-contained" key={index}>
								<li className="card">
									<div className="container-row">
										<h4>{post.title}</h4>
									</div>
									<div className="container-row">
										<Icon url="icons/icons8-avatar-24.png" name="delete" />
										<p>{post.author}</p>
									</div>
									<div
										className=" bg-grey-200"
										style={{ borderRadius: '0.5rem' }}
									>
										<p style={{ padding: '0.5rem' }}>
											{post.description.slice(0, 200) + '...'}
										</p>
									</div>
								</li>
							</Button>
						))}
					</div>
				)}
			</div>
		</>
	);
};
