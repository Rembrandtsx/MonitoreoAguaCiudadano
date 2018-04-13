import React, { Component } from 'react';
import { colors } from '../../theme';
import logo from './logo-andes-inverted.svg';

class Footer extends Component {
	render() {
		const { color_grey_dark_1 } = colors;

		return (
			<div className="footer">
				<div className="container">
					<img className="logo_uniandes_inverted" src={logo} alt="" />
				</div>
				<style jsx>{`
					.footer {
						background-color: ${color_grey_dark_1};
						height: 15rem;
					}

					.container {
						padding: 2rem;
						display: flex;
						justify-content: space-around;
					}

					.logo_uniandes_inverted {
						width: 200px;
					}
				`}</style>
			</div>
		);
	}
}

export default Footer;
