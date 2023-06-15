import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
	render() {
		return <img src={this.props.url} alt={this.props.name} />;
	}
}

Icon.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
