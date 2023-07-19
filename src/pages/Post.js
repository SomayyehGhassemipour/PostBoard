import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readPost } from '../services/post/PostService';
import Button from '../shared components/Button';
import Icon from '../shared components/Icon';
import { deletePost } from '../services/post/PostService';
import { useNavigate } from 'react-router-dom';
import { PostCard } from '../components/PostCard';

export const Post = () => {
	const navigate = useNavigate();

	const [postData, setPost] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		const fetchPosts = async (id) => {
			try {
				const postData = await readPost(id);
				setPost(postData);
			} catch (error) {
				console.log('Error in fetching posts: ', error);
			}
		};
		fetchPosts(id);
	}, []);

	const deleteHandler = async () => {
		const confirmBox = window.confirm(
			'Do you really want to delete this Post?'
		);
		if (confirmBox === true) {
			try {
				await deletePost(id);
				navigate('/home');
			} catch (error) {
				console.log('Error in deleting post: ', error);
			}
		}
	};
	return (
		<div className="container">
			<div className="card" style={{ width: '800px' }}>
				<div className="container-row">
					<div style={{ marginLeft: 'auto' }}>
						<Button
							classname="button-contained"
							clickHandler={() => {
								navigate(`/update-post/${id}`);
							}}
						>
							<Icon url="/icons/icons8-edit-24.png" name="edit" />
						</Button>
						<Button classname="button-contained" clickHandler={deleteHandler}>
							<Icon url="/icons/icons8-delete-24.png" name="delete" />
						</Button>
					</div>
				</div>
				{postData.length === 0 ? (
					<p className="text-grey-200">Loading ...</p>
				) : (
					<PostCard
						id={id}
						title={postData.title}
						author={postData.author}
						description={postData.description}
					></PostCard>
				)}
			</div>
		</div>
	);
};
