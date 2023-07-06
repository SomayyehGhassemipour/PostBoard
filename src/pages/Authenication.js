import React, { Component } from 'react';
import Button from '../shared components/Button';
import Input from '../shared components/Input';
import PropTypes from 'prop-types';
import { withHooksHOC } from '../HOC/withHooksHOC ';

const inputs = [
	{
		id: '1',
		name: 'email',
		label: 'Email',
		element: 'input',
		type: 'email',
		placeholder: 'Email',
	},
	{
		id: '2',
		name: 'password',
		label: 'Password',
		placeholder: 'Password',
		type: 'password',
		element: 'input',
	},
];

class Authenication extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	changeHandler = (event) => {
		const field = event.target.name;
		this.setState({ [field]: event.target.value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		await this.props.userAuth
			.logIn(this.state.email, this.state.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				this.props.navigate('/home');
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<h1>LOGIN</h1>
					</div>
					<div className="card-body">
						<form id="form" onSubmit={this.handleSubmit}>
							{inputs.map((input) => (
								<Input
									key={input.id}
									name={input.name}
									label={input.label}
									placeholder={input.placeholder}
									type={input.type}
									element={input.element}
									value={this.state[`${input.name}`]}
									onchangeHandler={this.changeHandler}
								/>
							))}
						</form>
					</div>
					<div className="card-footer">
						<Button
							classname="button-contained bg-blue-200 text-grey-500"
							form="form"
							type="submit"
						>
							Sign In
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default withHooksHOC(Authenication);
Authenication.propTypes = {
	navigate: PropTypes.any,
	userAuth: PropTypes.any,
};
