import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './Screens/home/Home';
import Subir from './Screens/subir/Subir';
import About from './Screens/about/About';
import Equipo from './Screens/equipo/Equipo';
import EquipoTrabajo from './Screens/equipo_trabajo/EquipoTrabajo';
import Proyecto from './Screens/proyecto/Proyecto';
import App from './Screens/app/App';
import Multimedia from './Screens/multimedia/Multimedia';
import Contacto from './Screens/contacto/Contacto';

import Comunidades from './Screens/comunidades/Comunidades';
import Teusaca from './Screens/comunidades/teusaca/Teusaca';
import Santurban from './Screens/comunidades/santurban/Santurban';
import Amazonas from './Screens/comunidades/amazonas/Amazonas';

import SensoaguaV1 from './Screens/sensoagua/SensoaguaV1';
import SensoaguaV2 from './Screens/sensoagua/SensoaguaV2';
import SensoaguaV3 from './Screens/sensoagua/SensoaguaV3';

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
					<Route path="/equipo-de-trabajo" component={EquipoTrabajo} />
					<Route path="/equipo" component={Equipo} />
					<Route exact path="/comunidades-teusaca" component={Teusaca} />
					<Route exact path="/comunidades-santurban" component={Santurban} />
					<Route exact path="/comunidades-amazonas" component={Amazonas} />
					<Route path="/sensoagua-v1" component={SensoaguaV1} />
					<Route path="/sensoagua-v2" component={SensoaguaV2} />
					<Route path="/sensoagua-v3" component={SensoaguaV3} />
					<Route path="/comunidades" component={Comunidades} />
					<Route path="/app" component={App} />
					<Route path="/contacto" component={Contacto} />
					<Route path="/multimedia" component={Multimedia} />
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
