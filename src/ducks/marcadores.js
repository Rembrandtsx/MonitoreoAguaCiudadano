import axios from 'axios';

const ROOT_URL =
	process.env.NODE_ENV === 'production'
		? 'http://electroagua_api.fabioespinosa.com'
		: 'http://localhost:5030';

export const FETCH_MARKERS = 'FETCH_MARKERS';
const FILTER_MARKERS = 'FILTER_MARKERS';
const AVISO_SELECCIONAR_MAS_MARCADORES = 'AVISO_SELECCIONAR_MAS_MARCADORES';
const QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES = 'QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES';

export const fetchMarkers = () => dispatch => {
	axios.get(`${ROOT_URL}/registros_geo`).then(res => {
		dispatch({
			type: FETCH_MARKERS,
			payload: res.data.features
		});
	});
};

export const filterMarkers = filteredMarkers => {
	return {
		type: FILTER_MARKERS,
		payload: filteredMarkers
	};
};

export const avisoSeleccionarMarcadores = () => {
	return {
		type: AVISO_SELECCIONAR_MAS_MARCADORES
	};
};

export const quitarAvisoSeleccionarMarcadores = () => {
	return {
		type: QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES
	};
};

const INITIAL_STATE = {
	original_markers: [],
	filtered_markers: [],
	aviso_seleccionar_mas_marcadores: true
};

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_MARKERS:
			return { ...state, original_markers: payload };
		case FILTER_MARKERS:
			return { ...state, filtered_markers: payload };
		case AVISO_SELECCIONAR_MAS_MARCADORES:
			return { ...state, aviso_seleccionar_mas_marcadores: true };
		case QUITAR_AVISO_SELECCIONAR_MAS_MARCADORES:
			return { ...state, aviso_seleccionar_mas_marcadores: false };
		default:
			return state;
	}
};
