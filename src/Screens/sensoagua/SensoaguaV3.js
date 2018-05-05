import React, { Component } from 'react';
import { bp, colors } from '../../theme';
import sensoaguav3 from './sensoaguav3.png';

class SensoaguaV3 extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description">
					<h3>Sensoagua V1</h3>
					<p>
						<strong>Subsistema de Sensores</strong>
					</p>
					<p>
						Es un dispositivo que est&aacute; en capacidad de realizar mediciones de cuatro variables que
						nos sirven para conocer la calidad del agua. El funcionamiento del dispositivo se divide en
						dos partes. Tiene una parte hardware y otro software.
					</p>
					<p>
						En la parte hardware encontramos la instrumentaci&oacute;n necesaria para poder realizar
						mediciones de temperatura, conductividad, pH, Ox&iacute;geno disuelto y presencia de Hg.
						Dentro de los sensores que se est&aacute;n utilizando encontramos cuatro sensores comerciales
						y uno dise&ntilde;ado y desarrollado en la Universidad de los Andes. El sensor que se
						desarroll&oacute; y dise&ntilde;o en la universidad es el sensor de conductividad donde
						partiendo del modelo de placas paralelas de un capacitor que dependiendo de
						diel&eacute;ctrico que se encuentre entre las placas la respuesta del sensor va ser
						diferente. Para la comunicaci&oacute;n con la interfaz de usuario se tiene un m&oacute;dulo
						bluetooth.
					</p>
					<p>
						En la parte Software se desarroll&oacute; la interfaz del usuario, para esto se
						utiliz&oacute; Android Studio el cual es un entorno de desarrollo integrado para la
						plataforma Android. En esta plataforma se desarroll&oacute; un App con la cual se realiza la
						adquisici&oacute;n de los datos. Dentro de las caracter&iacute;sticas que se encuentran en la
						aplicaci&oacute;n se puede obtener la localizaci&oacute;n geogr&aacute;fica y visualizarla en
						un mapa. Para poder comunicarse con la parte hardware de la sonda se utiliza
						comunicaci&oacute;n bluetooth con la cual se env&iacute;an diferentes comandos que nos
						permiten obtener las mediciones de cada uno de los par&aacute;metros a medir, esta
						aplicaci&oacute;n tambi&eacute;n est&aacute; en capacidad de realizar la calibraci&oacute;n
						de los sensores. Con la aplicaci&oacute;n se pueden enviar los datos medidos por SMS, por
						correo electr&oacute;nico, o por web servicie esto en busca de poder registrar la
						medici&oacute;n en la plataforma de visualizaci&oacute;n. En la plataforma se registran las
						mediciones realizadas con la posici&oacute;n donde se realiz&oacute; la
						medici&oacute;n.&nbsp;
					</p>
					<p>En el siguiente diagrama se muestra una descripci&oacute;n grafica del dispositivo:</p>
					<center>
						<img src={sensoaguav3} />
					</center>
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

export default SensoaguaV3;
