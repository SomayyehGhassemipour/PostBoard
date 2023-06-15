import React, { Component } from 'react';
import Button from '../shared components/Button';
import Input from '../shared components/Input';

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
export default class Authenication extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header">
						<h1>LOGIN</h1>
					</div>
					<div className="card-body">
						{inputs.map((input) => (
							<Input
								key={input.id}
								name={input.name}
								label={input.label}
								placeholder={input.placeholder}
								type={input.type}
								element={input.element}
							/>
						))}
					</div>
					<div className="card-footer">
						<Button classname="button-contained bg-blue-200 text-grey-400">
							Sign In
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
