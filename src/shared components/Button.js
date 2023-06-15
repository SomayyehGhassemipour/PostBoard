import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
	render() {
		return (
			<button
				className={this.props.classname}
				form={this.props.form}
				onClick={this.props.clickHandler}
			>
				{this.props.children}
			</button>
		);
	}
}

Button.propTypes = {
	classname: PropTypes.string.isRequired,
	form: PropTypes.string,
	children: PropTypes.node.isRequired,
	clickHandler: PropTypes.func.isRequired,
};
