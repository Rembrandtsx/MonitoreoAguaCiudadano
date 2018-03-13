import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bp, colors } from '../../../theme';
import Mapa from '../../../components/home/mapa/Mapa';
import Visualizacion from '../../../components/home/visualizacion/Visualizacion';

class Content extends Component {
	render() {
		const { bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		const height = this.props.aviso ? '60rem' : '120rem';
		return (
			<div className="detail">
				<div className="description">
					<p className="paragraph">Aqui va la introducción al proyecto.</p>
				</div>
				<div className="description">
					<p className="paragraph">Mapbox. Con los datos que me mando Sebastian hoy Lunes:</p>
					<div className="map_container">
						<Mapa />
						<Visualizacion />
					</div>
				</div>
				<style jsx>{`
					.detail {
						font-size: 1.4rem;
						display: flex;
						flex-direction: column;
						padding: 4.5rem;
						background-color: ${color_grey_light_1};
						border-bottom: 1px solid ${color_grey_light_2};

						&:not(:last-child) {
							margin-bottom: 10rem;
						}

						@media ${bp_medium} {
							padding: 3rem;
						}

						@media ${bp_small} {
							flex-direction: column;
						}
					}

					.description {
						font-size: 1.4rem;
						background-color: #fff;
						box-shadow: ${shadow_light};
						padding: 3rem;
						margin-right: 4.5rem;
						padding: 4.5rem;

						&:not(:last-child) {
							margin-bottom: 5rem;
						}

						@media ${bp_medium} {
							padding: 2rem;
							margin-right: 3rem;
							margin-bottom: 3rem;
						}

						@media ${bp_small} {
							margin-right: 0;
						}
					}

					.map_container {
						transition: height 4s;
						height: ${height};
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

export default connect(mapStateToProps)(Content);
