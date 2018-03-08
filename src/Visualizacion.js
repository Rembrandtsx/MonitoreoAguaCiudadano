import React, { Component } from 'react';
import * as d3 from 'd3';

let g = null;
class Visualizacion extends Component {
	componentDidMount() {
		g = d3.select('#viz1');
	}

	shouldComponentUpdate(props) {
		this.renderViz(props);
		return false;
	}

	renderViz = props => {};

	render() {
		return (
			<svg>
				<g id="viz1" className="visualizacion" />
			</svg>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(Visualizacion);
