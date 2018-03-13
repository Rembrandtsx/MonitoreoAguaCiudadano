import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Gallery from '../../components/gallery/Gallery';
import Content from './content/Content';
import { colors, bp } from '../../theme';

class Home extends Component {
	render() {
		const {
			color_grey_dark_2,
			color_primary_light,
			color_primary_dark,
			color_grey_light_1,
			shadow_dark
		} = colors;
		const { bp_medium, bp_large, bp_largest } = bp;
		return (
			<div className="container">
				<Header title="Electroagua" />
				<div className="content">
					<Sidebar />
					<main className="main">
						<Gallery />
						<Content />
					</main>
				</div>
				<style jsx>{`
					.container {
						max-width: 120rem;
						margin: 8rem auto;
						background-color: ${color_grey_light_1};
						box-shadow: ${shadow_dark};
						padding: 0;
						min-height: 50rem;

						@media ${bp_largest} {
							margin: 0;
							max-width: 100%;
							width: 100%;
						}
					}

					.content {
						display: flex;
						@media ${bp_medium} {
							flex-direction: column;
						}
					}

					.main {
						background: #fff;
						flex: 1;
					}
				`}</style>
				<style jsx global>{`
					* {
						margin: 0;
						padding: 0;
					}

					*,
					*::before,
					*::after {
						box-sizing: inherit;
					}

					html {
						box-sizing: border-box;
						font-size: 62.5%; // 1rem = 10px;

						@media ${bp_large} {
							font-size: 50%;
						}
					}

					body {
						font-family: 'Open sans', sans-serif;
						font-weight: 400;
						line-height: 1.6;
						color: ${color_grey_dark_2};
						background-image: linear-gradient(
							to right bottom,
							${color_primary_light},
							${color_primary_dark}
						);
						background-size: cover;
						background-repeat: no-repeat;
						min-height: 100vh;
					}
				`}</style>
			</div>
		);
	}
}

export default Home;
