import React, { Component } from 'react';

import { bp, colors } from '../../theme';

import Footer from '../../components/footer/Footer';

class Multimedia extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div className="detail">
				<div className="description">
					<h2>MULTIMEDIA</h2>
				</div>
				<div className="description">
					<div className="description video_container">
						<iframe className="video" height="100%" src="https://www.youtube.com/embed/BqPtlJSoGrQ" />
					</div>
				</div>
				<div className="description">
					<div className="description video_container">
						<iframe className="video" height="100%" src="https://www.youtube.com/embed/IonNAynjKoI" />
					</div>
				</div>
				<div className="description">
					<h3>NOTAS DE PRENSA</h3>
					<a href="	https://www.elespectador.com/noticias/medio-ambiente/comunidad-mide-calidad-del-agua-santurban-articulo-643140">
						{' '}
						https://www.elespectador.com/noticias/medio-ambiente/comunidad-mide-calidad-del-agua-santurban-articulo-643140
					</a>
				</div>
				<Footer />
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
						height: 600px;
						width: 80%;

						@media ${bp_medium} {
							width: 100%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Multimedia;
