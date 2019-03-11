import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bp, colors } from '../../theme';
// import MapaPoligono from '../../components/home/mapa_poligono/Mapa';
// import Mapa from '../../components/home/mapa/mapa';
// import Visualizacion from '../../components/home/visualizacion/Visualizacion';
import Mapa from '../../components/home/deck_mapa/mapa';

import Footer from '../../components/footer/Footer';

class Content extends Component {
    render() {
        const { bp_large, bp_medium, bp_small } = bp;
        const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
        const height = this.props.aviso ? '60rem' : '120rem';
        return (
            <div>
                <div className="detail">
                    <div className="description">
                        <h1>Monitoreo de Agua en Colombia</h1>
                        Desarrollar una herramienta que nos permita conocer las
                        condiciones de calidad del agua en comunidades
                        vulnerables. Con esta herramienta se busca poder
                        monitorear las cuencas hidrográficas permitiéndonos
                        generar alertas tempranas ante posibles fuentes de
                        contaminación en las cuencas.
                    </div>
                    <div className="description">
                        <div className="map_container">
                            <Mapa />
                            <div className="perimetro">
                                <p className="texto_perimetro">
                                    Si desea seleccionar cierto perimetro para
                                    visualizarlo,{' '}
                                    <Link to="/perimetro">
                                        haga click aquí.
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <center>
                           <h3>
                            Equipo de trabajo 
                           </h3>
                           <h5>
                            Uniandes
                           </h5>
                           Juan Camilo Cárdenas- facultad de Economía 
<br></br>
 

Felipe Muñoz- Departamento de Ingeniería Química 

 <br></br>

Johana Husserl- Departamento Civil y Ambiental 

 <br></br>

Alba Ávila-  Departamento de Ingeniería Eléctrica y Electrónica 

 
<br></br>
Jaime Andrés Peréz- Departamento de Ingeniería Eléctrica y Electrónica 

 <br></br>

Sebastián Arévalo- Departamento de Ingeniería Eléctrica y Electrónica <br></br>
<br></br>

<h5>
                            Internacionales
                           </h5>
                           2017-2019 

 

Bath University, UK 
<br></br>
Funding Newton Institutional Links-2017 
<br></br>
Mirella Di Lorenzo,  Department of Chemical Engineering 
<br></br>
 

Elena Bernalte, Department of Chemical Engineering 
<br></br>
 

Pedro Estrela,  Department of Electronic & Electrical Engineering 

 <br></br>

Jannis Wenk,  Department of Chemical Engineering 

 

 <br></br>

2013-2105 
<br></br>
Donald Blair- PublicLab y MIT Media Lab 

 <br></br>

 

 
                        </center>
                    </div>
                    <style jsx>{`
                        h1 {
                            margin-top: 0;
                        }
                        .detail {
                            font-size: 1.4rem;
                            display: flex;
                            flex-direction: column;
                            padding: 4.5rem;
                            background-color: ${color_grey_light_1};
                            border-bottom: 1px solid ${color_grey_light_2};

                            &:not(:last-child) {
                                /* margin-bottom: 10rem; */
                            }

                            @media ${bp_medium} {
                                padding: 3rem;
                            }

                            @media ${bp_small} {
                                flex-direction: column;
                            }
                        }

                        .title {
                            font-weight: bold;
                            font-style: italic;
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

                        .map_container {
                            transition: height 4s;
                            height: ${height};
                        }

                        .patrocinadores {
                            display: flex;
                            justify-content: space-around;

                            @media ${bp_large} {
                                flex-direction: column;
                                align-items: center;
                            }
                        }

                        .patrocinador {
                            width: 20rem;
                            height: auto;
                        }

                        .img_container {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }

                        .video_container {
                            display: flex;
                            justify-content: center;
                        }

                        .perimetro {
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 5px;
                        }

                        .video {
                            height: 600px;
                            width: 80%;

                            @media ${bp_medium} {
                                width: 100%;
                            }
                        }
                    `}</style>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        aviso: state.marcadores.aviso_seleccionar_mas_marcadores
    };
};

export default connect(mapStateToProps)(Content);
