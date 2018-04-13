import React, { Component } from 'react';
import MapGL, { Popup, FlyToInterpolator, LinearInterpolator } from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
import axios from 'axios';

import { json as requestJson } from 'd3-request';
import location from './data/location-icon-mapping.json';
import image from './data/location-icon-atlas.png';
// import image from './data/icon-atlas.png';
import Pop from '../mapa_poligono/Popup';

import Dimensions from 'react-dimensions';
import { ROOT_URL } from '../mapa_poligono/Mapa';

import '../mapa_poligono/custom-mapbox-css.css';

// Set your mapbox token here
const MAPBOX_TOKEN =
	'pk.eyJ1IjoiZmFiaW9lc3Bpbm9zYSIsImEiOiJjaWVtMGJ4a28wMDdnNHFrbjY1OWtxbXN6In0.nSjm5Xx8l3Hg4JqTjkdm0w'; // eslint-disable-line

// Source data CSV
const DATA_URL =
	'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/icon/meteorites.json'; // eslint-disable-line

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				...DeckGLOverlay.defaultViewport,
				width: this.props.containerWidth,
				height: 600
			},
			data: null,
			iconMapping: null,
			popup: null
		};

		axios.get(`${ROOT_URL}/registros_geo`).then(res => {
			res.data.features = res.data.features.map(actual => {
				let nuevo = { ...actual.properties, ...actual.geometry };
				return nuevo;
			});
			this.setState({ data: res.data.features });
			// this.props.dispatch({
			//   type: FETCH_MARKERS,
			//   payload: res.data.features
			// });
		});

		// requestJson(DATA_URL, (error, response) => {
		// 	if (!error) {
		// 		this.setState({ data: response });
		// 	}
		// });
	}

	componentDidMount() {
		window.addEventListener('resize', this._resize.bind(this));
		this._resize();
		this.setState({ iconMapping: location });

		// Hacer que el popup sea scrolliable
		this._handleScroll = this._handleScroll.bind(this);
		document.addEventListener('wheel', this._handleScroll);
	}

	// Hacer que el popup sea scrolliable
	componentWillUnmount() {
		document.removeEventListener('wheel', this._handleScroll);
		window.removeEventListener('resize', this._resize);
	}

	// Hacer que el popup sea scrolliable
	_handleScroll = function(e) {
		if (this.state.popup) {
			if (this.scrollableDiv.contains(e.target) && this.state.popup) {
				e.preventDefault();
				const dY = e.deltaY;
				this.scrollableDiv.scrollTop += dY;
			}
		}
	};

	_resize() {
		this._onViewportChange({
			width: this.props.containerWidth
		});
	}

	_onViewportChange(viewport) {
		this.setState({
			viewport: { ...this.state.viewport, ...viewport }
		});
	}

	render() {
		const { viewport, data, iconMapping, popup } = this.state;

		return (
			<div>
				<MapGL
					{...viewport}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					onViewportChange={this._onViewportChange.bind(this)}
					mapboxApiAccessToken={MAPBOX_TOKEN}>
					<DeckGLOverlay
						viewport={viewport}
						data={data}
						iconAtlas={image}
						iconMapping={iconMapping}
						showCluster={true}
						onHover={() => {}}
						onClick={value => {
							console.log(value);
							const { object } = value;
							this.setState({ popup: object });
							this.setState({
								viewport: {
									...this.state.viewport,
									longitude: value.newCoords[0],
									latitude: value.newCoords[1],
									transitionInterpolator: new LinearInterpolator(),
									transitionDuration: 700
								}
							});
						}}
					/>
					{popup && (
						<div style={{ overflowY: 'scroll' }}>
							<Popup
								anchor="bottom"
								tipSize={5}
								longitude={+popup.longitude}
								latitude={+popup.latitude}
								closeButton={true}
								closeOnClick={false}
								captureScroll={true}
								onClose={value => {
									this.setState({ popup: null });
								}}>
								<div ref={e => (this.scrollableDiv = e)} className="popup">
									<Pop close={() => this.setState({ popup: null })} {...popup} />
								</div>
							</Popup>
						</div>
					)}
				</MapGL>
				<style jsx>{`
					.popup {
						max-height: 420px;
						overflow-y: scroll;
					}
				`}</style>
			</div>
		);
	}
}

Root = Dimensions()(Root);
export default Root;
