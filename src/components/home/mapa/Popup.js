import React from 'react';
export default marker => {
	return (
		<div>
			<h3>Este dato fue tomado en: {marker.properties.timestamp}</h3>
			<p>time: {marker.properties.time}</p>
			<p>temp: {marker.properties.temp}</p>
			<p>conduct: {marker.properties.conduct}</p>
			<p>batterie_level: {marker.properties.batterie_level}</p>
			<p>simId: {marker.properties.id_celular}</p>
		</div>
	);
};
