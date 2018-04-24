import React, { Component } from 'react';
import {
	ResponsiveContainer,
	Bar,
	BarChart,
	Sector,
	ComposedChart,
	Cell,
	LineChart,
	Line,
	Label,
	XAxis,
	YAxis,
	CartesianGrid,
	ScatterChart,
	Scatter,
	Pie,
	PieChart,
	Tooltip,
	Legend
} from 'recharts';
import { bp } from '../../../theme';

const COLORS_PIE = ['#bdc3c7', '#e74c3c'];

const tooltip = props => {
	const { active } = props;

	if (active) {
		const { payload, label } = props;
		if (payload.length > 0) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`Fecha: ${props.label}`}</p>
					<p className="label key">{`${payload[0].dataKey}: ${Math.round(payload[0].value * 100) /
						100}`}</p>
					<p className="label">{`Promedio calculado con: ${
						payload[0].payload.items
					} datos registrados este dia`}</p>
					<style jsx>{`
						.key {
							color: ${payload[0].color};
						}

						.custom-tooltip {
							border: 0.5px solid grey;
							background-color: #fff;
							padding: 5px;
						}
					`}</style>
				</div>
			);
		}
		return null;
	}

	return null;
};

const legend = props => {
	return (
		<div>
			<strong>{props.titulo}</strong>
			<style jsx>{`
				strong {
					margin-bottom: 10px;
				}
			`}</style>
		</div>
	);
};

const renderActiveShapePie = props => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';
	return (
		<g>
			<text x={cx} y={cy - 20} dy={8} textAnchor="middle" fill={fill}>
				<tspan x={cx} dy="1.2em">
					Conductividad en:{' '}
				</tspan>
				<tspan x={cx} dy="1.2em">{`${payload.name}`}</tspan>
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill="#333">{`${value.toFixed(2)} µS/cm`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`Promedio calculado con ${payload.items} datos`}
			</text>
		</g>
	);
};

class Popup extends Component {
	render() {
		const {
			timestamp,
			id_celular,
			hg,
			temp,
			conduct,
			od,
			pH,
			data,
			cantidad,
			original_data
		} = this.props;

		const { bp_small, bp_medium } = bp;

		const pie_data = [{ name: 'Complete', conduct: 100 }, data[data.length - 2]];

		return (
			<div className="marcador">
				<h3>Graficando {cantidad} datos en 5 gráficas:</h3>
				<br />
				<ResponsiveContainer height={400} width="100%">
					<PieChart width={700}>
						<Pie
							data={pie_data}
							dataKey="conduct"
							cx={200}
							cy={200}
							startAngle={90}
							endAngle={450}
							innerRadius={70}
							outerRadius={90}
							paddingAngle={4}
							fill="#82ca9d"
							activeIndex={1}
							activeShape={renderActiveShapePie}
							isAnimationActive={false}>
							{pie_data.map((entry, index) => <Cell key={index} fill={COLORS_PIE[index]} />)}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<ResponsiveContainer height={500} width="100%">
					<BarChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'Conductividad (µS/cm)', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="Conductividad" />
						<Bar connectNulls={true} type="linear" dataKey="conduct" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
				{/* El siguiente es de prueba: */}
				<ResponsiveContainer height={500} width="100%">
					<ComposedChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'Conductividad (µS/cm)', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="Conductividad" />
						<Bar connectNulls={true} type="linear" dataKey="conduct" fill="#8884d8" />
						<Line connectNulls={true} type="linear" dataKey="conduct" stroke="#8884d8" />
					</ComposedChart>
				</ResponsiveContainer>
				<ResponsiveContainer height={500} width="100%">
					<ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<YAxis
							dataKey={'conduct'}
							label={{ value: 'Conductividad (µS/cm)', angle: -90, position: 'insideLeft' }}
						/>
						<XAxis dataKey={'x'}>
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						{/* <Tooltip content={tooltip} /> */}
						{/* <Legend verticalAlign="top" content={legend} titulo="Conductividad" /> */}
						<Scatter name="Conductividad" data={original_data} fill="#8884d8" />
					</ScatterChart>
				</ResponsiveContainer>

				<ResponsiveContainer height={500} width="100%">
					<LineChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="Temperatura" />
						<Line connectNulls={true} type="monotone" dataKey="temp" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>

				<ResponsiveContainer height={500} width="100%">
					<LineChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'pH', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="pH" />
						<Line connectNulls={true} type="monotone" dataKey="pH" stroke="#8884d8" />
					</LineChart>
				</ResponsiveContainer>
				<ResponsiveContainer height={500} width="100%">
					<LineChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'Oxígeno Disuelto (mg/L)', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="Oxigeno Disuelto" />
						<Line connectNulls={true} type="monotone" dataKey="od" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
				<ResponsiveContainer height={500} width="100%">
					<LineChart
						// width={600}
						height={300}
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
						<XAxis dataKey="name">
							<Label value="Dia" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis label={{ value: 'hg', angle: -90, position: 'insideLeft' }} />
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<Tooltip content={tooltip} />
						<Legend verticalAlign="top" content={legend} titulo="hg" />
						<Line connectNulls={true} type="monotone" dataKey="hg" stroke="#8884d8" />
					</LineChart>
				</ResponsiveContainer>
				<button
					className="btn btn-default cerrrar"
					onClick={evt => {
						this.props.close();
					}}>
					Cerrar
				</button>

				<style jsx>{`
					.cerrar {
						margin-top: 30px;
					}

					.marcador {
						width: 700px;
						@media ${bp_medium} {
							font-size: 0.9em;
							width: 400px;
						}
						@media ${bp_small} {
							font-size: 0.9em;
							width: 200px;
						}
					}
				`}</style>
				<style jsx global>{`
					.recharts-cartesian-axis-tick-value {
						font-size: 0.75em;
					}
				`}</style>
			</div>
		);
	}
}

export default Popup;
