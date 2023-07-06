import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
	render() {
		return (
			<button
				className={this.props.classname}
				form={this.props.form}
				onClick={this.props.clickHandler}
				type={this.props.type}
			>
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	classname: PropTypes.string.isRequired,
	form: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	clickHandler: PropTypes.func,
};
