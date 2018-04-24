import React, { Component } from 'react';
import { bp, colors } from '../../theme';
import sistema from './images/sistema.png';
import componentes from './images/componentes.png';
import pdf from './manual.pdf';
import Footer from '../../components/footer/Footer';

class Equipo extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div>
				<div className="detail">
					<div className="description">
						<h1>Monitoreo de agua en comunidades vulnerables de Colombia</h1>

						<p>
							Con el prop&oacute;sito de poder desarrollar un sistema de monitoreo de calidad del agua se
							plante&oacute; un diagrama general del sistema de monitoreo en el cual se integran todos
							los sub-sistemas que lo deben componer. Este sistema se ha venido implementando en
							diferente proyectos desarrollados en compa&ntilde;&iacute;a con la Universidad de los
							Andes, donde se han desarrollado diferentes plataformas para la visualizaci&oacute;n de las
							mediciones <a href="http://www.santurbanvisible.org/el-proyecto.html">Santurban visible</a>{' '}
							y{' '}
							<a href="http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/">
								La gran cuenca del rio Teusac&aacute;
							</a>.
						</p>
						<img src={sistema} className="sistema" />
						<p>
							<strong>Sub-sistema de sensores:</strong> El sistema de sensores est&aacute; integrado por
							los sensores accesibles, confiables y de bajo costo que ser&aacute;n empleados para
							realizar mediciones sobre la calidad del agua en la cuenca del r&iacute;o. Esto involucra
							la geolocalizaci&oacute;n y transmisi&oacute;n de la informaci&oacute;n generada.
						</p>
						<p>
							<strong>Sub-sistema de usuarios (comunidad de usuarios del sistema):</strong> Lo integran
							los ciudadanos, habitantes o no de la cuenca, con inter&eacute;s de contribuir con tiempo y
							esfuerzo a la generaci&oacute;n y recolecci&oacute;n de informaci&oacute;n sobre el uso de
							los recursos en el territorio&mdash; iniciando con la calidad del agua. Son tambi&eacute;n
							usuarios del sistema aquellos actores que compartan informaci&oacute;n relevante, primaria
							o secundaria sobre la cuenca, as&iacute; como tambi&eacute;n todos aquellos que deseen
							hacer uso de esta informaci&oacute;n para las discusiones p&uacute;blicas y los procesos de
							toma de decisiones relacionados con el manejo de la cuenca.
						</p>
						<p>
							<strong>Sub-sistema de informaci&oacute;n:</strong> El sistema de informaci&oacute;n lo
							integran soluciones de software para transmitir, recolectar y almacenar la
							informaci&oacute;n generada, permitiendo que &eacute;sta sea usada y compartida con el
							&aacute;nimo de crear visibilidad en torno al conjunto de par&aacute;metros que
							caracterizan el nivel de calidad del agua en la cuenca.
						</p>
						<p>
							Se espera que &eacute;sta sea una plataforma desde la cual sea posible visualizar la
							informaci&oacute;n generada por los sensores en mapas, de modo tal que sea posible rastrear
							el origen de los impactos y afectaciones sobre la cuenca de los r&iacute;os analizados y,
							en lo posible, comparar la informaci&oacute;n generada a trav&eacute;s de estos
							dispositivos con la informaci&oacute;n generada por el monitoreo de las redes de otras
							organizaciones, estatales y no estatales, que hacen monitoreo a la calidad del agua
						</p>
						<p>
							<strong>Subsistema de Sensores</strong>
						</p>
						<p>
							Es un dispositivo que est&aacute; en capacidad de realizar mediciones de cuatro variables
							que nos sirven para conocer la calidad del agua. El funcionamiento del dispositivo se
							divide en dos partes. Tiene una parte hardware y otro software.
						</p>
						<p>
							En la parte hardware encontramos la instrumentaci&oacute;n necesaria para poder realizar
							mediciones de temperatura, conductividad, pH y Ox&iacute;geno disuelto. Dentro de los
							sensores que se est&aacute;n utilizando encontramos tres sensores comerciales y uno
							dise&ntilde;ado y desarrollado en la Universidad de los Andes. El sensor que se
							desarroll&oacute; y dise&ntilde;o en la universidad es el sensor de conductividad donde
							partiendo del modelo de placas paralelas de un capacitor que dependiendo de
							diel&eacute;ctrico que se encuentre entre las placas la respuesta del sensor va ser
							diferente. Para la comunicaci&oacute;n con la interfaz de usuario se tiene un m&oacute;dulo
							bluetooth.
						</p>
						<p>
							En la parte Software se desarroll&oacute; la interfaz del usuario, para esto se
							utiliz&oacute; Android Studio el cual es un entorno de desarrollo integrado para la
							plataforma Android. En esta plataforma se desarroll&oacute; un App con la cual se realiza
							la adquisici&oacute;n de los datos. Dentro de las caracter&iacute;sticas que se encuentran
							en la aplicaci&oacute;n se puede obtener la localizaci&oacute;n geogr&aacute;fica y
							visualizarla en un mapa. Para poder comunicarse con la parte hardware de la sonda se
							utiliza comunicaci&oacute;n bluetooth con la cual se env&iacute;an diferentes comandos que
							nos permiten obtener las mediciones de cada uno de los par&aacute;metros a medir, esta
							aplicaci&oacute;n tambi&eacute;n est&aacute; en capacidad de realizar la calibraci&oacute;n
							de los sensores. Con la aplicaci&oacute;n se pueden enviar los datos medidos por SMS, por
							correo electr&oacute;nico, o por web servicie esto en busca de poder registrar la
							medici&oacute;n en la plataforma de visualizaci&oacute;n. En la plataforma se registran las
							mediciones realizadas con la posici&oacute;n donde se realiz&oacute; la medici&oacute;n.
							&nbsp;
						</p>
						<p>En el siguiente diagrama se muestra una descripci&oacute;n grafica del dispositivo:</p>
						<img src={componentes} className="componentes" />
						<p>Componentes de la Sonda</p>
						<p>Sensor de pH</p>
						<ul>
							<li>Rango de medici&oacute;n 1 a 14.000.</li>
							<li>Temperatura de operaci&oacute;n 1&deg;C a 99&deg;C.</li>
							<li>Resoluci&oacute;n &plusmn;1</li>
							<li>Precisi&oacute;n en (&plusmn;0,02).</li>
							<li>Tiempo de respuesta 95% en 1 segundo.</li>
							<li>Voltaje de operaci&oacute;n 3.3V a 5V</li>
							<li>Dimensiones 12mm X 150mm.</li>
							<li>Conector BNC.</li>
							<li>
								Distribuido por: <a href="http://www.atlas-scientific.com/">Atlas Scientific</a>
							</li>
						</ul>
						<p>Sensor de Ox&iacute;geno Disuelto</p>
						<ul>
							<li>Rengo de 0 a 100mg/L</li>
							<li>Temperatura m&aacute;xima de operaci&oacute;n 50&deg;C</li>
							<li>Resoluci&oacute;n &plusmn;1</li>
							<li>Presi&oacute;n m&aacute;xima de operaci&oacute;n 690kPA (100PSI)</li>
							<li>Voltaje de operaci&oacute;n 3.3V a 5V.</li>
							<li>Dimensiones 16.5mm X 116mm.</li>
							<li>Conector BNC.</li>
							<li>
								Distribuido por: <a href="http://www.atlas-scientific.com/">Atlas Scientific</a>
							</li>
						</ul>
						<p>Sensor de temperatura</p>
						<ul>
							<li>Rengo de operaci&oacute;n -55&deg;C a 125&deg;C.</li>
							<li>Volteje de operaci&oacute;n 3V a 5.5V.</li>
							<li>Resoluci&oacute;n &plusmn;0.5</li>
							<li>Tubo en acero inoxidable de 6mm de di&aacute;metro por 35mm de largo.</li>
							<li>Di&aacute;metro del cable 4mm.</li>
							<li>Longitud del cable 90cm.</li>
							<li>
								Distribuido por:{' '}
								<a href="http://www.didacticaselectronicas.com/">I+D Electr&oacute;nica</a>
							</li>
						</ul>
						<p>&nbsp;</p>
						<p>Sensor de Conductividad</p>
						<ul>
							<li>Rango de medici&oacute;n de 10&micro;S/cm a 73mS/cm</li>
							<li>Resoluci&oacute;n &plusmn;0.5</li>
							<li>Temperatura de operaci&oacute;n 0-70&deg;C</li>
							<li>Dimensiones 100mm X 150mm</li>
							<li>Conector Jack.</li>
						</ul>
					</div>

					<div className="description">
						<center>
							<a href={pdf}>
								<button className="btn btn-primary">Ver manual</button>
							</a>
						</center>
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

						p,
						h1 {
							margin-bottom: 15px;
						}

						.title {
							font-weight: bold;
							font-style: italic;
						}

						.sistema {
							max-width: 100%;
						}

						.componentes {
							max-width: 100%;
						}

						.description {
							width: 100%;
							margin: 0 auto;
							font-size: 1.4rem;
							background-color: #fff;
							box-shadow: ${shadow_light};
							padding: 3rem;
							padding: 4.5rem;
							max-width: 70%;
							margin-left: 15%;

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
				<Footer />
			</div>
		);
	}
}

export default Equipo;
