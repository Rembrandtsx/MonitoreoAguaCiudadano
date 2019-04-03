import React, { Component } from "react";
import Slider from "react-slick";

import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";
import bath from "./bath.png";
import colciencias from "./colciencias.png";
import newton from "./newton.png";
import uniandes from '../comunidadesGen/logo-uniandes.png'

import one from "./images/1.jpg";
import two from "./images/2.jpg";
import three from "./images/3.jpg";
import four from "./images/4.jpg";
import five from "./images/5.jpg";
import six from "./images/6.jpg";
import seven from "./images/7.jpg";
import eight from "./images/8.jpg";
import nine from "./images/9.jpg";
import ten from "./images/10.jpg";
import eleven from "./images/11.jpg";
import twelve from "./images/12.jpg";
import thirteen from "./images/13.jpg";
import fourteen from "./images/14.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Proyecto3 extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const {
      color_primary,
      color_primary_light,
      color_grey_light_1,
      color_grey_light_2,
      shadow_light
    } = colors;
    const settings = {
      lazyLoad: true,
      dots: true,
      fade: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: true
    };
    return (
      <div className="detail">
        <div className="description">
        <h2>Amazonas</h2>
          <Mapa region={3} />
        
          <h3>Monitoreo de agua en comunidades vulnerables de Colombia</h3>
          <p>
          En el año 2017 en una colaboración entre Bath University y la universidad de los andes apoyo una misión en Leticia y sus alrededores para el monitoreo de agua en comunidades usando Sensoagua V3 que adicional a los 4 parámetros que puede medir Sensoagua V2 este tiene la la deteccipón de Hg. Las actividades desarrolladas fueron: 
          </p>
          <ul>
            <li>
            Taller de organizaciones Sinchi, parques Nacionales, SENA y Representantes de Bath Univesity y Universidad de los Andes 
            </li>
            <li>
            Taller de organizaciones Sinchi, parques Nacionales, SENA y Representantes de Bath Univesity y Universidad de los Andes 
            </li>
            <li>
            Taller de organizaciones Sinchi, parques Nacionales, SENA y Representantes de Bath Univesity y Universidad de los Andes 
            </li>
          </ul>
      
          <Carousel >
            <div>
              <img src={one} className="imagen" />
            </div>
            <div>
              <img src={two} className="imagen" />
            </div>
           
            <div>
              <img src={four} className="imagen" />
            </div>
            <div>
              <img src={five} className="imagen" />
            </div>
            <div>
              <img src={six} className="imagen" />
            </div>
            <div>
              <img src={seven} className="imagen" />
            </div>
            <div>
              <img src={eight} className="imagen" />
            </div>
            <div>
              <img src={nine} className="imagen" />
            </div>
            <div>
              <img src={ten} className="imagen" />
            </div>
            <div>
              <img src={eleven} className="imagen" />
            </div>
            <div>
              <img src={twelve} className="imagen" />
            </div>
            <div>
              <img src={thirteen} className="imagen" />
            </div>
            <div>
              <img src={fourteen} className="imagen" />
            </div>
          </Carousel>
          <h3>Patrocinadores y Colaboradores</h3>
          <div className="patrocinadores">
            <div className="img_container">
              <img src={bath} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={colciencias} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={newton} alt="" className="patrocinador" />
            </div>
            <div className="img_container">
              <img src={uniandes} alt="" className="patrocinador" />
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
          p{
            text-align: justify;
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

export default Proyecto3;
