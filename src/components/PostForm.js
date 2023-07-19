import React from 'react';
import Input from '../shared components/Input';
import PropTypes from 'prop-types';
import Icon from '../shared components/Icon';

export const PostForm = (props) => {
	return (
		<form action="submit">
			<div className="container-row">
				<Input
					name="title"
					type="text"
					element="input"
					value={props.title}
					label="Title"
					onchangeHandler={props.changeHandler}
				/>
			</div>
			<div className="container-row">
				<Icon url="/icons/icons8-avatar-24.png" name="author" />
				<p>{props.author}</p>
			</div>
			<div className="container-row">
				<Input
					name="description"
					type="text"
					element="textarea"
					value={props.description}
					label="Description"
					onchangeHandler={props.changeHandler}
				/>
			</div>
		</form>
	);
};
PostForm.propTypes = {
	title: PropTypes.string,
	changeHandler: PropTypes.func,
	description: PropTypes.string,
	author: PropTypes.string,
	saveHandler: PropTypes.func,
};
