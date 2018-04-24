import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { colors, bp } from '../../theme';

class Sidebar extends Component {
	render() {
		const { pathname } = this.props.location;
		const { color_grey_dark_1, color_primary, color_primary_light, color_grey_light_1 } = colors;
		const { bp_medium, bp_small } = bp;
		return (
			<nav className="sidebar">
				<ul className="side-nav">
					<li className={`side-nav__item ${pathname === '/' && 'side-nav__item--active'}`}>
						<Link to="/" className="side-nav__link">
							<span>Introducción</span>
						</Link>
					</li>
					<li
						className={`side-nav__item subir_datos ${pathname === '/subir' &&
							'side-nav__item--active'}`}>
						<Link to="/subir" className="side-nav__link">
							<span>Subir Datos</span>
						</Link>
					</li>
					{/* <li className={`side-nav__item ${pathname === '/informacion' && 'side-nav__item--active'}`}>
						<Link to="/informacion" className="side-nav__link">
							<span>Informacion</span>
						</Link>
					</li> */}
					<li className={`side-nav__item ${pathname === '/el-proyecto' && 'side-nav__item--active'}`}>
						<Link to="/el-proyecto" className="side-nav__link">
							<span>El Proyecto</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/equipo' && 'side-nav__item--active'}`}>
						<Link to="/equipo" className="side-nav__link">
							<span>Equipo de Medición</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/app' && 'side-nav__item--active'}`}>
						<Link to="/app" className="side-nav__link">
							<span>App</span>
						</Link>
					</li>
					<li className={`side-nav__item ${pathname === '/contacto' && 'side-nav__item--active'}`}>
						<Link to="/contacto" className="side-nav__link">
							<span>Contacto</span>
						</Link>
					</li>
				</ul>
				<style jsx global>{`
					.sidebar {
						background-color: ${color_grey_dark_1};
						display: flex;
						flex-direction: row;
						justify-content: center;
					}

					.subir_datos {
						@media ${bp_medium} {
							display: none;
						}
					}

					.side-nav {
						font-size: 1.4rem;
						list-style: none;
						margin-top: 1rem;
						margin-bottom: 1rem;
						display: flex;
						justify-content: center;

						@media ${bp_medium} {
							display: flex;
							margin: 0;
						}

						&__item {
							position: relative;
							&:not(:last-child) {
								margin-right: 1rem;
								@media ${bp_medium} {
									margin: 0;
								}
							}

							@media ${bp_medium} {
								font-size: 1.8em;
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

export default withRouter(Sidebar);
