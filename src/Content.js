import React, { Component } from 'react';
import Router from './Router';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import { colors, bp } from './theme';

class Content extends Component {
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
					<nav className="navbar navbar-inverse" role="navigation">
						<div className="container-fluid">
							{/* <!-- Brand and toggle get grouped for better mobile display --> */}
							<div className="navbar-header">
								<button
									type="button"
									className="navbar-toggle"
									data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar" />
									<span className="icon-bar" />
									<span className="icon-bar" />
								</button>
								{/* <a className="navbar-brand" href="#">
									Brand
								</a> */}
							</div>

							{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav">
									<li className="">
										<a href="#">INICIO</a>
									</li>
									<li className="dropdown active">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">
											COMUNIDADES <b className="caret" />
										</a>
										<ul className="dropdown-menu multi-level">
											<li className="dropdown-submenu">
												<a href="#">TEUSACA</a>
												<ul className="dropdown-menu">
													<li>
														<a href="">Mapa</a>
													</li>
													<li>
														<a href="">Actividades</a>
													</li>
													<li>
														<a href="">Colaboradores</a>
													</li>
													<li>
														<a href="">Patrocinadores</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="#">SANTURBAN</a>
											</li>
											<li>
												<a href="#">LETICIA</a>
											</li>
											{/* <li className="divider" />
											<li>
												<a href="#">Separated link</a>
											</li>
											<li className="divider" />
											<li>
												<a href="#">One more separated link</a>
											</li> */}
										</ul>
									</li>
									<li>
										<a href="#">SONDA DE AGUA</a>
									</li>
									<li>
										<a href="#">CARGAR DATOS</a>
									</li>
									<li>
										<a href="#">APP MÓVIL</a>
									</li>
									<li>
										<a href="#">MULTIMEDIA</a>
									</li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li>
										<a href="#">CONTÁCTANOS</a>
									</li>
									{/* <li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">
											Dropdown <b className="caret" />
										</a>
										<ul className="dropdown-menu">
											<li>
												<a href="#">Action</a>
											</li>
											<li>
												<a href="#">Another action</a>
											</li>
											<li>
												<a href="#">Something else here</a>
											</li>
											<li className="divider" />
											<li>
												<a href="#">Separated link</a>
											</li>
										</ul>
									</li> */}
								</ul>
							</div>
						</div>
					</nav>
					<Router>{/* <Sidebar /> */}</Router>
				</div>
				<style jsx>{`
					.container {
						max-width: 125rem;
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
						flex-direction: column;
						@media ${bp_medium} {
							flex-direction: column;
						}
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

					/* Bootstrap nav */
					.navbar-default .navbar-nav > li.dropdown:hover > a,
					.navbar-default .navbar-nav > li.dropdown:hover > a:hover,
					.navbar-default .navbar-nav > li.dropdown:hover > a:focus {
						background-color: rgb(231, 231, 231);
						color: rgb(85, 85, 85);
					}
					li.dropdown:hover > .dropdown-menu {
						display: block;
					}

					.dropdown-submenu {
						position: relative;
					}

					.dropdown-submenu > .dropdown-menu {
						top: 0;
						left: 100%;
						margin-top: -6px;
						margin-left: -1px;
						-webkit-border-radius: 0 6px 6px 6px;
						-moz-border-radius: 0 6px 6px;
						border-radius: 0 6px 6px 6px;
					}

					.dropdown-submenu:hover > .dropdown-menu {
						display: block;
					}

					.dropdown-submenu > a:after {
						display: block;
						content: ' ';
						float: right;
						width: 0;
						height: 0;
						border-color: transparent;
						border-style: solid;
						border-width: 5px 0 5px 5px;
						border-left-color: #ccc;
						margin-top: 5px;
						margin-right: -10px;
					}

					.dropdown-submenu:hover > a:after {
						border-left-color: #fff;
					}

					.dropdown-submenu.pull-left {
						float: none;
					}

					.dropdown-submenu.pull-left > .dropdown-menu {
						left: -100%;
						margin-left: 10px;
						-webkit-border-radius: 6px 0 6px 6px;
						-moz-border-radius: 6px 0 6px 6px;
						border-radius: 6px 0 6px 6px;
					}
				`}</style>
			</div>
		);
	}
}

export default Content;
