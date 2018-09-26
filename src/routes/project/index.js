import { h, Component } from 'preact';
import ProjectList from '../../components/projectList';


export default class Project extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div>
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col">Content</div>
					<div class="mdl-cell mdl-cell--4-col">goes</div>
					<div class="mdl-cell mdl-cell--4-col">here</div>
				</div>
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--4-col">
						<div class="demo-card-wide mdl-card mdl-shadow--2dp">
							<div class="mdl-card__title">
								<h2 class="mdl-card__title-text">Welcome</h2>
							</div>
							<div class="mdl-card__supporting-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Mauris sagittis pellentesque lacus eleifend lacinia...
							</div>
							<div class="mdl-card__actions mdl-card--border">
								<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
								Get Started
								</a>
							</div>
							<div class="mdl-card__menu">
								<button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
									<i class="material-icons">share</i>
								</button>
							</div>
						</div>
					</div>
					<div class="mdl-cell mdl-cell--4-col">4</div>
					<div class="mdl-cell mdl-cell--4-col">4</div>
				</div>
				
				<button class="mdl-button mdl-js-button mdl-button--fab" disabled>
					<i class="material-icons">add</i>
				</button>
			</div>
		);
	}
}
