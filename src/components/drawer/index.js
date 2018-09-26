import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Drawer = () => (
	<div class="mdl-layout__drawer">
		<span class="mdl-layout__title">Material Design Lite</span>
		<nav class="mdl-navigation">
			<a class="mdl-navigation__link" href="#">Hello</a>
			<a class="mdl-navigation__link" href="#">World.</a>
			<a class="mdl-navigation__link" href="#">How</a>
			<a class="mdl-navigation__link" href="#">Are</a>
			<a class="mdl-navigation__link" href="#">You?</a>
			<Link class="mdl-navigation__link" activeClassName={style.active} href="/">Home</Link>
			<Link class="mdl-navigation__link" activeClassName={style.active} href="/profile">Me</Link>
			<Link class="mdl-navigation__link" activeClassName={style.active} href="/project">Projects</Link>
			<Link class="mdl-navigation__link" activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</div>
);

export default Drawer;
