import React, { Component } from 'react';
import { withHooksHOC } from '../HOC/withHooksHOC ';
import Button from '../shared components/Button';
import PropTypes from 'prop-types';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	signOutHandler = (event) => {
		event.preventDefault();
		this.props.userAuth.logOut();
		this.props.navigate('/');
	};
	render() {
		return (
			<div className="container bg-grey-200">
				<h3 className="text-grey-500">Profile</h3>
				<h5 className="text-grey-500">{this.props.userAuth.user.email}</h5>
				<div style={{ marginLeft: 'auto' }}>
					<Button
						classname="button-contained bg-blue-200 text-grey-500"
						clickHandler={this.signOutHandler}
					>
						Sign out
					</Button>
				</div>
			</div>
		);
	}
}

export default withHooksHOC(Home);
Home.propTypes = {
	navigate: PropTypes.any,
	userAuth: PropTypes.any,
};
