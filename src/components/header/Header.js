import React, { Component } from 'react';
import { colors, bp } from '../../theme';

class Header extends Component {
	render() {
		const { color_grey_light_2 } = colors;
		const { bp_smallest } = bp;
		return (
			<header className="header">
				<div>Aqui va posiblemente un logo</div>

				<h1>Electroagua</h1>

				<img src="img/andesIcon.png" alt="Universidad de los Andes" className="logo" />
				<style jsx>{`
					.header {
						font-size: 1.4rem;
						height: 7rem;
						background-color: #fff;
						border-bottom: 1px solid ${color_grey_light_2};
						display: flex;
						justify-content: space-between;
						align-items: center;

						@media ${bp_smallest} {
							flex-wrap: wrap;
							align-content: space-around;
							height: 11rem;
						}
					}
				`}</style>
			</header>
		);
	}
}

export default Header;
