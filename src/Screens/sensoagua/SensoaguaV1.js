import React, { Component } from 'react';
import { bp, colors } from '../../theme';

class SensoaguaV1 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description">
					<h3>Sensoagua V1</h3>
					<p>
						Es un dispositivo que est&aacute; en capacidad de realizar mediciones de temperatura y
						conductividad. Las mediciones que este registra son transmitidas por un m&oacute;dulo celular
						hacia el sub-sistema de informaci&oacute;n.
					</p>
					<p>&nbsp;</p>
					<p>
						El equipo puede ser utilizado en dos modos de operaci&oacute;n. Uno el cual puede ser ubicado
						en un punto determinado donde se quiere realizar la medici&oacute;n dej&aacute;ndolo por un
						tiempo indeterminado, en este modo de operaci&oacute;n se puede configurar el equipo para que
						tome las mediciones cada tiempo establecido por el usuario. En segundo modo de
						operaci&oacute;n el usuario puede realizar mediciones diferentes puntos. En este caso las
						mediciones se realizan de forma continua.
					</p>
				</div>
				<style jsx>{`
					h3 {
						margin-top: 0;
					}
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

export default SensoaguaV1;
