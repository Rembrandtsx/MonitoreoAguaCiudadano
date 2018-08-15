import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import XLSX from 'xlsx';
import axios from 'axios';

import { ROOT_URL } from '../../components/home/mapa_poligono/Mapa';
import { bp, colors } from '../../theme';

import captura from './captura.png';
import Footer from '../../components/footer/Footer';
import plantilla from './plantilla.csv';

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
                var wb = XLSX.read(data, { type: 'binary', raw: true });
                // Take only first sheet:
                console.log(wb);
                var sheet_1 = wb.Sheets[wb.SheetNames[0]];
                var ws_json = XLSX.utils.sheet_to_json(sheet_1);
                console.log(ws_json);
                ws_json = ws_json.map(dato => {
                    // Se pueden datos en español
                    console.log(dato);
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
                    if (dato.fecha_y_hora) {
                        dato.timestamp = dato.fecha_y_hora;
                    }
                    return dato;
                });
                if (ws_json.length > 0) {
                    subirDatos(ws_json);
                } else {
                    alert('No hay datos en el CSV');
                }
            } catch (e) {
                console.log(e);
            }
        };
        reader.readAsBinaryString(file);
    };

    subirDatos = ws_json => {
        this.setState({ errores: [], exitos: [] });
        ws_json.forEach(dato => {
            console.log(dato);
            axios
                .post(`${ROOT_URL}/registros`, dato)
                .then(res => {
                    res.data.row_num = dato.__rowNum__;
                    this.setState({
                        exitos: this.state.exitos.concat(res.data)
                    });
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
        const { bp_large, bp_medium, bp_small } = bp;
        const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;

        return (
            <div>
                <div className="subir">
                    <div className="description">
                        <div className="instrucciones">
                            <p>
                                Aqui podrás subir datos manualmente desde un
                                archivo Excel en formato CSV. Los datos deben
                                tener el formato que aparece en este ejemplo:
                            </p>
                            <img src={captura} className="captura" />
                            <p>
                                Puede descargar{' '}
                                <a href={plantilla}>esta plantilla</a> como
                                ejemplo
                            </p>
                        </div>
                        <div className="dropzone">
                            <Dropzone
                                accept=".csv"
                                onDrop={this.onDrop}
                                multiple={false}
                                ref={node => {
                                    dropzoneRef = node;
                                }}
                            >
                                <p className="instrucciones_dropzone">
                                    Arrastra el archivo CSV de los datos o haz
                                    click aquí
                                </p>
                            </Dropzone>
                            <div className="boton_manual">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        dropzoneRef.open();
                                    }}
                                >
                                    Subir archivo CSV
                                </button>
                            </div>
                        </div>

                        <div className="errores">
                            <div>
                                {this.state.errores.length > 0 &&
                                    `Se encontraron ${
                                        this.state.errores.length
                                    } errores:`}
                            </div>
                            {this.state.errores.map(error => {
                                return (
                                    <div key={error.row_num}>
                                        <span className="error fa fa-exclamation" />
                                        Ocurrió un error subiendo el dato en la
                                        fila: {error.row_num + 1}. El error fue:{' '}
                                        <i className="error">{error.err}</i>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="exitos">
                            <div>
                                {this.state.exitos.length > 0 &&
                                    `Se subieron ${
                                        this.state.exitos.length
                                    } registros:`}
                            </div>
                            {this.state.exitos.map(exito => {
                                return (
                                    <div key={exito.row_num}>
                                        <span className="exito fa fa-check" />
                                        Registro de la fila: {exito.row_num +
                                            1}{' '}
                                        subido exitosamente
                                    </div>
                                );
                            })}
                        </div>
                        <p>Los parametros tienen la siguiente explicación:</p>
                        <ul className="indent">
                            <li>
                                fecha_y_hora: La fecha y hora en la cual fue
                                tomado el dato, en el formato exacto "DD/MM/AAAA
                                HH:mm:ss"
                            </li>
                            <li>
                                longitud: La longitud de la ubicación en donde
                                fue tomado el dato
                            </li>
                            <li>
                                latitud: La latitud de la ubicación en donde fue
                                tomado el dato
                            </li>
                            <li>
                                imei: El código único que referencia al celular
                                que tomo el dato
                            </li>
                            <li>hg: Mercurio (adimensional)</li>
                            <li>temperatura: Temp (°C)</li>
                            <li>conductividad: Conductividad (uS/cm)</li>
                            <li>od: Oxígeno disuelto (mg/L)</li>
                            <li>pH: pH (adimensional)</li>
                            <li>
                                region: La región a la cual pertenecen los
                                datos:
                                <ul className="indent">
                                    <li>1: Santurban</li>
                                    <li>2: Teusaca</li>
                                    <li>3: Amazonas</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <style jsx>{`
                        .subir {
                            padding: 20px;
                            color: black;
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

                        .indent {
                            margin-left: 30px;
                        }

                        .description {
                            font-size: 1.4rem;
                            background-color: #fff;
                            box-shadow: ${shadow_light};
                            padding: 3rem;
                            padding: 4.5rem;

                            &:not(:last-child) {
                                margin-bottom: 5rem;
                            }

                            @media ${bp_medium} {
                                padding: 2rem;
                                margin-bottom: 3rem;
                            }

                            @media ${bp_small} {
                                margin-right: 0;
                            }
                        }
                    `}</style>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Subir;
