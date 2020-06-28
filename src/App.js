/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './pages/mainPage/main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<div style={{ backgroundColor: this.props.dark ? '#18191A' : '' }}>
				<header>
					<Main />
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dark: state.dark,
	};
};

export default connect(mapStateToProps)(App);
