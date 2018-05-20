import React, { Component } from 'react';
import { bp, colors } from '../../../../theme';
import us_aid from '../us_aid.png';
import foro_nacional_por_colombia from '../foro_nacional_por_colombia.png';

class Patrocinadores extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div>
				<div className="detail">
					<div className="description">
						<h3>Patrocinadores:</h3>
						<div className="patrocinadores">
							<div className="img_container">
								<img src={us_aid} alt="" className="patrocinador us_aid" />
							</div>
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

					.imagen {
						margin: 0 auto;
						max-width: 900px;
						max-height: 600px;
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
						width: 15rem;
						height: auto;
						max-height: 10rem;
					}

					.img_container {
						display: flex;
						flex-direction: column;
						justify-content: center;
					}

					.us_aid {
						width: 43rem;
					}
				`}</style>
			</div>
		);
	}
}

export default Patrocinadores;
