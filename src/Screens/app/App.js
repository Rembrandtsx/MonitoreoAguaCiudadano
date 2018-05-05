import React, { Component } from 'react';
import { bp, colors } from '../../theme';
import app_store from './images/app_store.svg';
import play_store from './images/google_play.png';
import pantallazo from './images/pantallazo.png';
import Footer from '../../components/footer/Footer';

class App extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div>
				<div className="detail">
					<div className="description">
						Por medio de esta aplicación el usuario va poder tomar las mediciones y registrarlas en la
						plataforma, así como visualizar las variables medidas.
						<br />
						<br />
						<center>
							<img className="" src={pantallazo} />
						</center>
					</div>
					<div className="description">
						<p>
							Certificado de Registro del software de la referencia ante la Dirección Nacional de Derecho
							de Autor, el cual quedó bajo Libro- Tomo- Partida 13-66-58 de fecha 21-feb-2018.
						</p>
						<div className="logo">
							<img className="logos" src={play_store} />
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
								/* margin-bottom: 10rem; */
							}

							@media ${bp_medium} {
								padding: 3rem;
							}

							@media ${bp_small} {
								flex-direction: column;
							}
						}

						.title {
							font-weight: bold;
							font-style: italic;
						}

						.description {
							font-size: 1.4rem;
							background-color: #fff;
							box-shadow: ${shadow_light};
							padding: 3rem;
							padding: 4.5rem;
							color: black;
							&:not(:last-child) {
								margin-bottom: 5rem;
							}

							@media ${bp_medium} {
								padding: 2rem;
								margin-bottom: 3rem;
							}

							@media ${bp_small} {
								margin-right: 0;
							}
						}

						.logos {
							text-align: center;
							width: 300px;
						}

						.logo {
							text-align: center;
						}
					`}</style>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
