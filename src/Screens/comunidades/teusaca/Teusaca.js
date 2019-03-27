import React, { Component } from 'react';
import Mapa from '../../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../../theme';
import progresaresp from './progresaresp.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Teusaca extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const {
			color_primary,
			color_primary_light,
			color_grey_light_1,
			color_grey_light_2,
			shadow_light
		} = colors;
		return (
			<div className="detail">
				<div className="description">
					<h2>Teusacá</h2>
					<Mapa region={2} />
					<div style={{height:'5vh'}}></div>
					
					<p>La Gran Cuenca del Río Teusacá</p>
					<p>
					En el año 2016 la universidad de los Andes colaboró con el acueducto progresar para hacer varias actividades:
					</p>
					<p>
					Hackaton: el 22 de Julio del 2016,  20 representantes de colegios participaron de una jornada de identificación de contaminantes del rio para lo cual se hizo un recorrido en la calera por la ribera del río Teusaca, se trabajó con los colegios y grupo profesoral en  montar  los módulos de las sondas de dos parámetros identificados como Sensoagua V1 ( pH y conductividad), con los estudiantes se hicieron pruebas con diferentes tipos de agua y la comunidad quedo con las sondas de agua de dos parámetros montadas en esta jornada. 

					Monitoreo de río Teusaca: el acueducto tiene a su disposición 10 sondas de agua para que sus pobladores reporten datos de varios puntos del rio Teusaca. El acueducto genero su propia plataforma con la colaboración de ubilogica. La cual puede consultarse en <a href="http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/ ">http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/ </a>
					</p>
				
				<div className="video_container">
					<iframe className="video" height="100%" src="https://www.youtube.com/embed/BqPtlJSoGrQ" />
				</div>
				
					<div className="patrocinadores">
						<div className="img_container">
							<img src={progresaresp} alt="" className="patrocinador" />
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
					p{
						text-align: justify;
					}
					.patrocinadores {
						display: flex;
						justify-content: space-around;

						@media ${bp_large} {
							flex-direction: column;
							align-items: center;
						}
					}

					.patrocinador {
						width: 20rem;
						height: auto;
					}

					.img_container {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}

					.video_container {
						display: flex;
						justify-content: center;
					  }
			
					  .video {
						
						width: 100%;
						min-height: 70vh;
						@media ${bp_medium} {
						  width: 100%;
						  min-height: 30vh;
						}
					  }
				`}</style>
			</div>
		);
	}
}

export default Teusaca;
