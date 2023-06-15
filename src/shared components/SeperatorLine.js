import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SeperatorLine extends Component {
	render() {
		return (
			<>
				{this.props.type === 'c' ? (
					<div className={this.props.type + '-line'} />
				) : this.props.content ? (
					<div className="row">
						<div className={this.props.type + '-half-line'} />
						<p className="text-grey-300">{this.props.content}</p>
						<div className={this.props.type + '-half-line'} />
					</div>
				) : (
					<div className="line" />
				)}
			</>
		);
	}
}

SeperatorLine.propTypes = {
	type: PropTypes.string.isRequired,
	content: PropTypes.string,
};
