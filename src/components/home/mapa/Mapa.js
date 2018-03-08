import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxdraw from '@mapbox/mapbox-gl-draw';
import axios from 'axios';
import { pointsWithinPolygon } from '@turf/turf';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken =
	'pk.eyJ1IjoiZmFiaW9lc3Bpbm9zYSIsImEiOiJjaWVtMGJ4a28wMDdnNHFrbjY1OWtxbXN6In0.nSjm5Xx8l3Hg4JqTjkdm0w';

class App2 extends Component {
	componentDidMount() {
		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [-74.063644, 4.624335],
			zoom: 8
		});

		this.draw = new mapboxdraw({
			displayControlsDefault: false,
			controls: {
				polygon: true,
				trash: true
			}
		});

		this.map.addControl(this.draw);

		this.map.on('load', () => {
			axios.get('http://localhost:8000/registros_geo').then(res => {
				this.markers = res.data.features;
				res.data.features.forEach(marker => {
					this.tooltipContainer = document.createElement('div');
					this.tooltipContainer.className = 'marker';
					new mapboxgl.Marker(this.tooltipContainer)
						.setLngLat(marker.geometry.coordinates)
						.setPopup(
							new mapboxgl.Popup({ offset: 25 }) // add popups
								.setHTML(
									'<h3>' +
										'Este dato fue tomado en: ' +
										marker.properties.timestamp +
										'</h3>' +
										'<p>' +
										'date: ' +
										marker.properties.date +
										'</p>' +
										'<p>' +
										'time: ' +
										marker.properties.time +
										'</p>' +
										'<p>' +
										'temp: ' +
										marker.properties.temp +
										'</p>' +
										'<p>' +
										'conduct: ' +
										marker.properties.conduct +
										'</p>' +
										'<p>' +
										'batterie_level: ' +
										marker.properties.batterie_level +
										'</p>' +
										'<p>' +
										'simId: ' +
										marker.properties.id_celular +
										'</p>'
								)
						)
						.addTo(this.map);
				});
			});
		});
		this.map.on('draw.create', this.showSelectedPoints);
		this.map.on('draw.update', this.showSelectedPoints);
	}

	showSelectedPoints = e => {
		const data = this.draw.getAll();
		const points = {
			type: 'FeatureCollection',
			features: this.markers
		};
		let ptsWithin;
		if (data.features.length > 0) {
			ptsWithin = pointsWithinPolygon(points, data);
			console.log(ptsWithin);
		}
	};

	render() {
		const style = {
			position: 'absolute',
			top: 0,
			bottom: 0,
			width: '50%',
			height: '50%'
		};
		return (
			<div>
				<div style={style} ref={el => (this.mapContainer = el)} />
				<div>
					<button
						onClick={() => {
							console.log('hola');
						}}>
						Calcular
					</button>
				</div>
			</div>
		);
	}
}

export default App2;
