import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Head from 'preact-head';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Head>
					<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css"/>
					<script src="/node_modules/material-design-lite/material.min.js"/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
				</Head>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
