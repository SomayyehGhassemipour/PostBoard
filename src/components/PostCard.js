import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Icon from '../shared components/Icon';
import Button from '../shared components/Button';
import Input from '../shared components/Input';
import { deletePost, updatePost } from '../services/post/PostService';
import { useNavigate } from 'react-router-dom';

export const PostCard = (props) => {
	const navigate = useNavigate();

	const [postData, setPostData] = useState({
		title: '',
		author: '',
		description: '',
	});
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		setPostData({
			title: props.title,
			author: props.author,
			description: props.description,
		});
	}, []);
	const changeHandler = (event) => {
		let { name, value } = event.target;
		setPostData({ ...postData, [name]: value });
	};

	const saveHandler = async () => {
		setEditMode(false);
		try {
			await updatePost(props.id, postData);
		} catch (error) {
			console.log('Error updating post: ', error);
		}
	};
	const deleteHandler = async () => {
		const confirmBox = window.confirm(
			'Do you really want to delete this Crumb?'
		);
		if (confirmBox === true) {
			try {
				await deletePost(props.id);
				navigate('/home');
			} catch (error) {
				console.log('Error updating post: ', error);
			}
		}
	};
	return (
		<div className="card" style={{ width: '800px' }}>
			<div className="container-row">
				{editMode ? (
					<Input
						name="title"
						type="text"
						element="input"
						value={postData.title}
						label="Title"
						onchangeHandler={changeHandler}
					/>
				) : (
					<h4>{postData.title}</h4>
				)}
				{props.editBottons && (
					<div style={{ marginLeft: 'auto' }}>
						{!editMode && (
							<Button
								classname="button-contained"
								clickHandler={() => {
									setEditMode(true);
								}}
							>
								<Icon url="/icons/icons8-edit-24.png" name="edit" />
							</Button>
						)}
						<Button classname="button-contained" clickHandler={deleteHandler}>
							<Icon url="/icons/icons8-delete-24.png" name="delete" />
						</Button>
					</div>
				)}
			</div>

			<div className="container-row">
				<Icon url="/icons/icons8-avatar-24.png" name="author" />
				<p>{postData.author}</p>
			</div>

			{editMode ? (
				<div>
					<div className="container-row">
						<Input
							name="description"
							type="text"
							element="textarea"
							value={postData.description}
							label="Description"
							onchangeHandler={changeHandler}
						/>
					</div>
					<Button
						classname="button-text  bg-blue-200 text-grey-500"
						clickHandler={saveHandler}
					>
						Save
					</Button>
				</div>
			) : (
				<div className=" bg-grey-200" style={{ borderRadius: '0.5rem' }}>
					<p style={{ padding: '0.5rem' }}>{postData.description}</p>
				</div>
			)}
		</div>
	);
};
PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	editBottons: PropTypes.bool.isRequired,
};
