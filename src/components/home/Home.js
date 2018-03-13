import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mapa from './mapa/Mapa';
import Visualizacion from './visualizacion/Visualizacion';

class Home extends Component {
	render() {
		const { aviso } = this.props;
		return (
			<div>
				<div className="contenido">
					<Mapa />
					<Visualizacion />
				</div>
				<div>{aviso && 'Selecciona mas de un punto en la grafica usando el poligono'}</div>
				<style jsx>{`
					.contenido {
						display: flex;
					}
				`}</style>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		aviso: state.marcadores.aviso_seleccionar_mas_marcadores
	};
};

export default connect(mapStateToProps)(Home);
