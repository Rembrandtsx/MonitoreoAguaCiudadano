import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Screens/home/Home';
import About from './Screens/about/About';
import Subir from './Screens/subir/Subir';

ReactGA.initialize('UA-000000000-0');

const Router = ({ children }) => (
	<BrowserRouter>
		<GAListener>
			{children}
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/subir" component={Subir} />
				</Switch>
			</main>
			<style jsx>{`
				.main {
					background: #fff;
					flex: 1;
				}
			`}</style>
		</GAListener>
	</BrowserRouter>
);

export default Router;

// Helper Google Analytics class:
class GAListener extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount() {
		this.sendPageView(this.context.router.history.location);
		this.context.router.history.listen(this.sendPageView);
	}

	sendPageView(location) {
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname);
	}
	render() {
		return this.props.children;
	}
}
