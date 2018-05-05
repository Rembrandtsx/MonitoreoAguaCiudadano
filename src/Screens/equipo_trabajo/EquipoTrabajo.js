import React, { Component } from 'react';

import { bp, colors } from '../../theme';

class EquipoTrabajo extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div>
				<div className="detail">
					<div className="description">
						<h1>Equipo de trabajo</h1>
						<p>UNIANDES</p>
						<ul>
							<li>Juan Camilo C&aacute;rdenas</li>
							<li>Felipe Mu&ntilde;oz</li>
							<li>Johana Husserl</li>
							<li>Alba &Aacute;vila</li>
							<li>Jaime Andr&eacute;s Per&eacute;z</li>
							<li>Sebasti&aacute;n Ar&eacute;valo</li>
						</ul>
						<p>INTERNACIONALES</p>
						<ul>
							<li>Don Blair</li>
							<li>Mirella Di Lorenzo</li>
							<li>Elena Bernalte</li>
							<li>Pedro Estrela</li>
							<li>Jannis Wenk</li>
						</ul>
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

export default EquipoTrabajo;
