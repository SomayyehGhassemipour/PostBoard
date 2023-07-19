import { useState } from 'react';
import { PostForm } from '../components/PostForm';
import { useUserAuth } from '../services/firebase/AuthenicationService';
import Button from '../shared components/Button';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../services/post/PostService';

export const CreatePost = () => {
	const userAuth = useUserAuth();
	const navigate = useNavigate();

	const [newPostData, setNewPostData] = useState({
		title: '',
		author: 'altan@gmail.com',
		description: '',
	});
	const changeHandler = (event) => {
		let { name, value } = event.target;
		setNewPostData({ ...newPostData, [name]: value });
	};

	const saveHandler = async () => {
		try {
			await addPost(newPostData);
		} catch (error) {
			console.log('Error in adding post: ', error);
		}
		navigate(`/home`);
	};
	return (
		<div className="container">
			<div className="card" style={{ width: '800px' }}>
				<PostForm author={userAuth.user.email} changeHandler={changeHandler} />
				<div className="container-row">
					<Button
						classname="button-text  bg-blue-200 text-grey-500"
						clickHandler={saveHandler}
					>
						Save
					</Button>
					<Button
						classname="button-text  bg-blue-200 text-grey-500"
						clickHandler={() => navigate('/home')}
					>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};
