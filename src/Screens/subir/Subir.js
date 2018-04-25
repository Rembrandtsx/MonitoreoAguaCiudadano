import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import XLSX from 'xlsx';
import axios from 'axios';

import { ROOT_URL } from '../../components/home/mapa_poligono/Mapa';
import captura from './captura.png';
import Footer from '../../components/footer/Footer';

let dropzoneRef;
class Subir extends Component {
	state = {
		errores: [],
		exitos: []
	};

	onDrop = (acceptedFile, rejectedFile) => {
		// Bind local function:
		var subirDatos = this.subirDatos;
		// Read file:
		var file = acceptedFile[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			try {
				var wb = XLSX.read(data, { type: 'binary' });
				// Take only first sheet:
				var sheet_1 = wb.Sheets[wb.SheetNames[0]];
				var ws_json = XLSX.utils.sheet_to_json(sheet_1);
				ws_json = ws_json.map(dato => {
					// Se pueden datos en español
					if (dato.longitud) {
						dato.longitude = dato.longitud;
					}
					if (dato.latitud) {
						dato.latitude = dato.latitud;
					}
					if (dato.conductividad) {
						dato.conduct = dato.conductividad;
					}
					if (dato.temperatura) {
						dato.temp = dato.temperatura;
					}
					if (dato.hora_y_fecha) {
						dato.timestamp = dato.hora_y_fecha;
					}
					return dato;
				});
				subirDatos(ws_json);
			} catch (e) {
				console.log(e);
			}
		};
		reader.readAsBinaryString(file);
	};

	subirDatos = ws_json => {
		this.setState({ errores: [], exitos: [] });
		ws_json.forEach(dato => {
			axios
				.post(`${ROOT_URL}/registros`, dato)
				.then(res => {
					res.data.row_num = dato.__rowNum__;
					this.setState({ exitos: this.state.exitos.concat(res.data) });
				})
				.catch(err => {
					err.response.data.row_num = dato.__rowNum__;
					this.setState({
						errores: this.state.errores.concat(err.response.data)
					});
				});
		});
	};

	render() {
		return (
			<div>
				<div className="subir">
					<div className="instrucciones">
						<p>
							Aqui podrás subir datos manualmente desde un CSV. Si tienes los datos en un excel, lo mejor
							sera guardar la hoja como un CSV.
						</p>
						<p>
							Los datos en el CSV deben tener exactamente el siguiente formato (incluyento los nombres en
							la primera fila):
						</p>
						<img src={captura} className="captura" />
					</div>
					<div className="dropzone">
						<Dropzone
							accept=".csv"
							onDrop={this.onDrop}
							multiple={false}
							ref={node => {
								dropzoneRef = node;
							}}>
							<p className="instrucciones_dropzone">
								Arrastra el archivo CSV de los datos o haz click aquí
							</p>
						</Dropzone>
						<div className="boton_manual">
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									dropzoneRef.open();
								}}>
								Subir archivo CSV
							</button>
						</div>
					</div>

					<div className="errores">
						<div>
							{this.state.errores.length > 0 && `Se encontraron ${this.state.errores.length} errores:`}
						</div>
						{this.state.errores.map(error => {
							return (
								<div key={error.row_num}>
									<span className="error fa fa-exclamation" />
									Ocurrió un error subiendo el dato en la fila: {error.row_num + 1}. El error fue:{' '}
									<i className="error">{error.err}</i>
								</div>
							);
						})}
					</div>
					<div className="exitos">
						<div>
							{this.state.exitos.length > 0 && `Se subieron ${this.state.exitos.length} registros:`}
						</div>
						{this.state.exitos.map(exito => {
							return (
								<div key={exito.row_num}>
									<span className="exito fa fa-check" />
									Registro de la fila: {exito.row_num + 1} subido exitosamente
								</div>
							);
						})}
					</div>
					<style jsx>{`
						.subir {
							padding: 20px;
						}
						.instrucciones,
						.instrucciones_dropzone {
							font-size: 1.6em;
						}

						.captura {
							max-width: 800px;
						}

						.dropzone {
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							margin-top: 20px;
						}

						.boton_manual {
							margin-top: 10px;
						}

						.error {
							color: red;
							padding-right: 5px;
						}

						.exito {
							color: green;
							padding-right: 5px;
						}
					`}</style>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Subir;
