import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
	render() {
		return (
			<div className="field">
				{this.props.label && <label>{this.props.label}</label>}
				{this.props.element === 'input' ? (
					<input
						name={this.props.name}
						type={this.props.type}
						placeholder={this.props.placeholder}
					/>
				) : (
					<textarea
						name={this.props.name}
						rows="4"
						placeholder={this.props.placeholder}
					/>
				)}
			</div>
		);
	}
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	element: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};
