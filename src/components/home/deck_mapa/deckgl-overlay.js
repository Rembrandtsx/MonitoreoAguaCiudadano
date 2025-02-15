import React, { Component } from 'react';
import DeckGL, { IconLayer, WebMercatorViewport } from 'deck.gl';
import rbush from 'rbush';

import image from './data/icon-atlas.png';
const ICON_SIZE = 60;

function getIconName(size) {
	if (size === 0) {
		return '';
	}
	if (size < 10) {
		return `marker-${size}`;
	}
	if (size < 100) {
		return `marker-${Math.floor(size / 10)}0`;
	}
	return 'marker-100';
}

function getIconSize(size) {
	return Math.min(100, size) / 100 * 0.5 + 0.5;
}

export default class DeckGLOverlay extends Component {
	static get defaultViewport() {
		return {
			longitude: -74.063644,
			latitude: 4.624335,
			zoom: 4,
			// maxZoom: 20,
			pitch: 0,
			bearing: 0
		};
	}

	constructor(props) {
		super(props);

		// build spatial index
		this._tree = rbush(9, ['.x', '.y', '.x', '.y']);
		this.state = {
			x: 0,
			y: 0,
			hoveredItems: null,
			expanded: false
		};

		this._updateCluster(props);
	}

	componentWillReceiveProps(nextProps) {
		const { viewport } = nextProps;
		const oldViewport = this.props.viewport;

		if (
			nextProps.data !== this.props.data ||
			viewport.width !== oldViewport.width ||
			viewport.height !== oldViewport.height
		) {
			this._updateCluster(nextProps);
		}
	}

	// Compute icon clusters
	// We use the projected positions instead of longitude and latitude to build
	// the spatial index, because this particular dataset is distributed all over
	// the world, we can't use some fixed deltaLon and deltaLat
	_updateCluster({ data, viewport }) {
		if (!data) {
			return;
		}

		const tree = this._tree;

		const transform = new WebMercatorViewport({
			...viewport,
			zoom: 0
		});

		data.forEach(p => {
			const screenCoords = transform.project(p.coordinates);
			p.x = screenCoords[0];
			p.y = screenCoords[1];
			p.zoomLevels = [];
		});

		tree.clear();
		tree.load(data);

		for (let z = 0; z <= 20; z++) {
			const radius = ICON_SIZE / 2 / Math.pow(2, z);

			data.forEach(p => {
				if (p.zoomLevels[z] === undefined) {
					// this point does not belong to a cluster
					const { x, y } = p;

					// find all points within radius that do not belong to a cluster
					const neighbors = tree
						.search({
							minX: x - radius,
							minY: y - radius,
							maxX: x + radius,
							maxY: y + radius
						})
						.filter(neighbor => neighbor.zoomLevels[z] === undefined);

					// only show the center point at this zoom level
					neighbors.forEach(neighbor => {
						if (neighbor === p) {
							p.zoomLevels[z] = {
								neighbors_length: neighbors.length,
								icon: getIconName(neighbors.length),
								size: getIconSize(neighbors.length),
								points: neighbors
							};
						} else {
							neighbor.zoomLevels[z] = null;
						}
					});
				}
			});
		}
	}

	// Queremos mostrar la visualizacion y que quepa en la panatalla, por ende nos movemos 200px abajo del punto donde hizo click para que quepan:
	// Sacamos las coordenadas y las convertimos en pixeles, restamos 200 en Y y las volvemos a convertir a coordenadas.
	relocate = value => {
		const oldViewport = this.props.viewport;
		const transform = new WebMercatorViewport({
			...oldViewport
			// zoom: 0
		});
		const screenCoords = transform.project(value.object.coordinates);
		const longLat = transform.unproject([screenCoords[0], screenCoords[1] - 200]);
		value.newCoords = longLat;
		return value;
	};

	render() {
		const { viewport, data, iconAtlas, iconMapping, showCluster } = this.props;

		if (!data || !iconMapping) {
			return null;
		}

		const z = Math.floor(viewport.zoom);
		const size = showCluster ? 1 : Math.min(Math.pow(1.5, viewport.zoom - 10), 1);
		const updateTrigger = z * showCluster;

		const layer = new IconLayer({
			id: 'icon',
			data,
			pickable: this.props.onHover || this.props.onClick,
			iconAtlas,
			sizeScale: 400,
			iconMapping,
			// sizeScale: ICON_SIZE * size * window.devicePixelRatio,
			getPosition: d => d.coordinates,
			getIcon: d => (showCluster ? d.zoomLevels[z] && d.zoomLevels[z].icon : 'marker'),
			getSize: d => (showCluster ? d.zoomLevels[z] && d.zoomLevels[z].size : 1),
			onHover: this.props.onHover,
			onClick: value => {
				this.props.onClick(this.relocate(value));
			},
			updateTriggers: {
				getIcon: updateTrigger,
				getSize: updateTrigger
			}
		});

		return <DeckGL {...viewport} layers={[layer]} />;
	}
}
