import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Project = () => (
	<header class={style.header}>
		<link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css" />
		<script src="/node_modules/material-design-lite/material.min.js" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
		<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
			Button
		</button>
	</header>
);

export default Project;
