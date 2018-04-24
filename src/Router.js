import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Screens/home/Home';
import Subir from './Screens/subir/Subir';
import About from './Screens/about/About';
import Equipo from './Screens/equipo/Equipo';
import Proyecto from './Screens/proyecto/Proyecto';
import App from './Screens/app/App';
import Contacto from './Screens/contacto/Contacto';

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
					<Route path="/el-proyecto" component={Proyecto} />
					<Route path="/equipo" component={Equipo} />
					<Route path="/app" component={App} />
					<Route path="/contacto" component={Contacto} />
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
