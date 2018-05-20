import React, { Component } from 'react';
import { bp, colors } from '../../../../theme';
import progresaresp from '../progresaresp.png';

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
								<img src={progresaresp} alt="" className="patrocinador" />
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
				`}</style>
			</div>
		);
	}
}

export default Patrocinadores;
