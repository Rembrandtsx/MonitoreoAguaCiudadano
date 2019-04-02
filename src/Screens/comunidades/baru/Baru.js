import React, { Component } from "react";
import Slider from "react-slick";

import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";


import imageBaru from "./img/Imagen baru.jpg"

import corpAutonoma from "./img/Colaboradores_patrocinadores/corpautonoma.jpg"
import eafit from "./img/Colaboradores_patrocinadores/EAFIT.png"
import fundahernan from "./img/Colaboradores_patrocinadores/fundahernan.jpeg"
import idrc from "./img/Colaboradores_patrocinadores/idrc.png"
import UCartagena from "./img/Colaboradores_patrocinadores/UCartagena.jpg"
import uniandes from "../comunidadesGen/logo-uniandes.png"

class Proyecto6 extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const {
      color_primary,
      color_primary_light,
      color_grey_light_1,
      color_grey_light_2,
      shadow_light
    } = colors;
    return (
      <div className="detail">
        <div className="description">
          <h2>Barú</h2>
          <Mapa />
          <p>
            Por medio de diferentes actividades se pretende desarrollar un proceso
             de empoderamiento comunitario para el desarrollo de una red de
              monitoreo y seguimiento de la calidad de agua para consumo humano.
               Esta actividad  es parte del proyecto BASIC-Cartagena:
                "Interacciones entre cuenca, mar y comunidades".
                 El objetivo general de BASIC es generar herramientas de adaptación
                  para el manejo integrado de los recursos hídricos en la zona costera
                   dude Cartagena (Colombia), hacia la reducción de riesgos de
                    contaminación, la conservación de servicios ecosistémicos y la 
                    adaptación al cambio climático.
            Web del proyecto:<a href="http://www.basic-cartagena.org"  >http://www.basic-cartagena.org  </a> </p>

            <div className=" video_container">
            <iframe className="video" src="https://www.youtube.com/embed/4b8hYMY0-5E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>



          <img src={imageBaru} />
          <h3>Patrocinadores y Colaboradores</h3>
          <div className="patrocinadores">
            <div className="img_container">
              <img src={corpAutonoma} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={eafit} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={uniandes} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={fundahernan} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={idrc} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={UCartagena} alt="" className="patrocinador" />
            </div>
          </div>
        </div>

        <style jsx>{`
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
          .description *{
            padding-top:1em;
          }
          p{
            text-align: justify;
          }
          .patrocinadores {
            display: flex;
            justify-content: space-around;
            flex-wrap:wrap;
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
          .lista{
            list-style: none;
          }
          
          .video_container {
            display: flex;
            justify-content: center;
          }

          .video {
            
            width: 100%;
            min-height: 70vh;
            @media ${bp_medium} {
              width: 100%;
              min-height: 30vh;
            }
          }

        `}</style>
        <style jsx global>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default Proyecto6;
