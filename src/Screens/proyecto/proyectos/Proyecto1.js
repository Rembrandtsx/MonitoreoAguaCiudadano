import React, { Component } from 'react';
import Mapa from '../../../components/home/deck_mapa/mapa';
import { bp, colors } from '../../../theme';

class Proyecto1 extends Component {
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
				<div className="description">Logo de foro nacional por colombia y USAID</div>
				<div className="description">
					<Mapa />
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
				`}</style>
			</div>
		);
	}
}

export default Proyecto1;
