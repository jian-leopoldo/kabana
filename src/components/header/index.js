import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header  class="mdl-layout__header" >
		<div class="mdl-layout__header-row">
			<span class="mdl-layout__title">Fixed drawer layout demo</span>
		</div>
	</header>
);

export default Header;
