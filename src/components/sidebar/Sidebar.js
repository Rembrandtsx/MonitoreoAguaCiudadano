import React, { Component } from 'react';
import { colors, bp } from '../../theme';

class Sidebar extends Component {
	render() {
		const { color_grey_dark_1, color_primary, color_primary_light, color_grey_light_1 } = colors;
		const { bp_medium, bp_small } = bp;
		return (
			<nav className="sidebar">
				<ul className="side-nav">
					<li className="side-nav__item side-nav__item--active">
						<a href="#" className="side-nav__link">
							<svg className="side-nav__icon">
								<use xlinkHref="img/sprite.svg#icon-home" />
							</svg>
							<span>Introducción</span>
						</a>
					</li>
					<li className="side-nav__item">
						<a href="#" className="side-nav__link">
							<svg className="side-nav__icon">
								<use xlinkHref="img/sprite.svg#icon-map" />
							</svg>
							<span>Mapa</span>
						</a>
					</li>
					<li className="side-nav__item">
						<a href="#" className="side-nav__link">
							<svg className="side-nav__icon">
								<use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />
							</svg>
							<span>Informacion 1</span>
						</a>
					</li>
					<li className="side-nav__item">
						<a href="#" className="side-nav__link">
							<svg className="side-nav__icon">
								<use xlinkHref="img/sprite.svg#icon-key" />
							</svg>
							<span>Informacion 2</span>
						</a>
					</li>
				</ul>
				<style jsx>{`
					.sidebar {
						background-color: ${color_grey_dark_1};
						flex: 0 0 18%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}

					.side-nav {
						font-size: 1.4rem;
						list-style: none;
						margin-top: 3.5rem;

						@media ${bp_medium} {
							display: flex;
							margin: 0;
						}

						&__item {
							position: relative;

							&:not(:last-child) {
								margin-bottom: 0.5rem;
								@media ${bp_medium} {
									margin: 0;
								}
							}

							@media ${bp_medium} {
								flex: 1;
							}
						}

						&__item::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							height: 100%;
							width: 3px;
							background-color: ${color_primary};
							transform: scaleY(0);
							transform-origin: center;
							transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.2s;
						}

						&__item:hover::before,
						&__item--active::before {
							transform: scaleY(1);
							width: 100%;
						}

						&__item:active::before {
							background-color: ${color_primary_light};
						}

						&__link:link,
						&__link:visited {
							color: ${color_grey_light_1};
							text-decoration: none;
							text-transform: uppercase;
							display: block;
							padding: 1.5rem 3rem;
							display: flex;
							align-items: center;
							position: relative;
							z-index: 100;

							@media ${bp_medium} {
								justify-content: center;
								padding: 2rem;
							}

							@media ${bp_small} {
								flex-direction: column;
								padding: 1.5rem 0.5rem;
							}
						}

						&__icon {
							width: 1.75rem;
							height: 1.75rem;
							margin-right: 2rem;
							fill: currentColor;
							@media ${bp_small} {
								margin-right: 0;
								width: 1.5rem;
								height: 1.5rem;
								margin-bottom: 0.7rem;
							}
						}
					}
				`}</style>
			</nav>
		);
	}
}

export default Sidebar;
