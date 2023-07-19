import { useEffect, useState } from 'react';
import { PostForm } from '../components/PostForm';
import { useUserAuth } from '../services/firebase/AuthenicationService';
import Button from '../shared components/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { readPost, updatePost } from '../services/post/PostService';

export const UpdatePost = () => {
	const userAuth = useUserAuth();
	const navigate = useNavigate();

	let { id } = useParams();

	const [postData, setPostData] = useState({
		title: '',
		author: '',
		description: '',
	});

	useEffect(() => {
		const fetchPosts = async (id) => {
			try {
				const post = await readPost(id);
				setPostData(post);
			} catch (error) {
				console.log('Error fetching posts: ', error);
			}
		};
		fetchPosts(id);
	}, []);

	const saveHandler = async () => {
		try {
			await updatePost(id, postData);
		} catch (error) {
			console.log('Error in updating post: ', error);
		}
		navigate(`/post/${id}`);
	};

	const changeHandler = (event) => {
		let { name, value } = event.target;
		setPostData({ ...postData, [name]: value });
	};

	return (
		<div className="container">
			<div className="card" style={{ width: '800px' }}>
				<PostForm
					title={postData.title}
					author={userAuth.user.email}
					description={postData.description}
					changeHandler={changeHandler}
				/>
				<div className="container-row">
					<Button
						classname="button-text  bg-blue-200 text-grey-500"
						clickHandler={saveHandler}
					>
						Save
					</Button>
					<Button
						classname="button-text  bg-blue-200 text-grey-500"
						clickHandler={() => navigate(`/post/${id}`)}
					>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};
