import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { bp, colors } from '../../theme';
import santurban from './comunidadesGen/santurban.JPG';
import teusaca from './comunidadesGen/tuesaca.jpg';
import amazonas from './comunidadesGen/amazonas.jpg';
import boyaca from './comunidadesGen/boyaca.jpg';
import baru from './comunidadesGen/baru.jpg';
import eje from './comunidadesGen/eje.jpg';
import uniandes from './comunidadesGen/uniandes.png';

class Comunidades extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description">
					<h1>Comunidades</h1>
					<div className="indice">
						<h3>Índice</h3>
						<ul>
							<li><a href="#santurban">Santurban</a></li>
							<li><a href="#teusaca">Teusacá</a></li>
							<li><a href="#amazonas">Amazonas</a></li>
							<li><a href="#baru">Barú</a></li>
							<li><a href="#uniandes">Uniandes</a></li>
							<li><a href="#eje-ambiental">Eje Ambiental</a></li>
							<li><a href="#boyaca-samaca">Boyacá - Samacá</a></li>
						</ul>
					</div>
					<div className="contenido">
						<div id="santurban">
							<Link to="/comunidades-santurban">
								<div className="image-container">
									<img src={santurban} />
									<div className="after">Santurban</div>
								</div>
							</Link>
						</div>

						<div id="teusaca">
							<Link to="/comunidades-teusaca">
								<div className="image-container">
									<img src={teusaca} />
									<div className="after">Teusacá</div>
								</div>
							</Link>
						</div>
						<div id="amazonas">
							<Link to="/comunidades-amazonas">
								<div className="image-container">
									<img src={amazonas} />
									<div className="after">Amazonas</div>
								</div></Link>
						</div>
						<div id="baru">
							<Link to="/comunidades-baru">
								<div className="image-container">
									<img src={baru} />
									<div className="after">Barú</div>
								</div>
							</Link>
						</div>
						<div id="uniandes">
							<Link to="/comunidades-uniandes">
							<div className="image-container">
									<img src={uniandes} />
									<div className="after">Uniandes</div>
								</div>
								</Link>
						</div>
						<div id="eje-ambiental">
							<Link to="/comunidades-eje-ambiental">
							<div className="image-container">
									<img src={eje} />
									<div className="after">Eje Ambiental</div>
								</div></Link>
						</div>
						<div id="boyaca-samaca"> 
							<Link to="/comunidades-boyaca">
								<div className="image-container">
									<img src={boyaca} />
									<div className="after">Boyacá - Samacá</div>
								</div>
							</Link>
						</div>
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
					.indice{
						margin-left: 5%;
					}
					.indice ul{
						margin-left: 2em;
					}
					.contenido > div {
						margin-top:5vh;
					}
					.description {
						font-size: 1.4rem;
						background-color: #fff;
						box-shadow: ${shadow_light};
						padding: 3rem;
						padding: 4.5rem;

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
				`}</style>
			</div>
		);
	}
}

export default Comunidades;
