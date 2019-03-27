import React, { Component } from "react";
import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";
import Slider from "react-slick";

import us_aid from "./us_aid.png";
import foro_nacional_por_colombia from "./foro_nacional_por_colombia.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "./images/1.JPG";
import two from "./images/2.JPG";
import three from "./images/3.JPG";
import four from "./images/4.jpg";
import five from "./images/5.JPG";
import six from "./images/6.jpg";
import seven from "./images/7.JPG";
import eight from "./images/8.JPG";
import nine from "./images/9.jpg";
import ten from "./images/10.jpg";
import eleven from "./images/11.jpg";
import twelve from "./images/12.jpg";
import thirteen from "./images/13.jpg";
import fourteen from "./images/14.jpg";
import fifteen from "./images/15.jpg";
import sixteen from "./images/16.jpg";
import seventeen from "./images/17.jpg";
import eightteen from "./images/18.jpg";
import nineteen from "./images/19.JPG";
import twenty from "./images/20.JPG";
import twentyone from "./images/21.JPG";
import twentytwo from "./images/22.JPG";
import twentythree from "./images/23.JPG";
import twentyfour from "./images/24.JPG";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Santurban extends Component {
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
      slidesToScroll: 1
    };
    return (
      <div className="detail">
        <div className="description">
          <h2>Santurban</h2>
          <Mapa region={1} />
        <div style={{height:'5vh'}}></div>
        <Carousel >
     
            <div>
              <img src={two} className="imagen" />
            </div>
            <div>
              <img src={three} className="imagen" />
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
            <div>
              <img src={fifteen} className="imagen" />
            </div>
            <div>
              <img src={sixteen} className="imagen" />
            </div>
            <div>
              <img src={seventeen} className="imagen" />
            </div>
            <div>
              <img src={eightteen} className="imagen" />
            </div>
            <div>
              <img src={nineteen} className="imagen" />
            </div>
            <div>
              <img src={twenty} className="imagen" />
            </div>
            <div>
              <img src={twentyone} className="imagen" />
            </div>
      
            <div>
              <img src={twentythree} className="imagen" />
            </div>
         
            </Carousel>


        
      
          <h4 style={{marginTop:'2vh'}}>
            Acción colectiva para la transformación de conflictos
            socio-ambientales en ecosistemas de páramo: Piloto en la subcuenca
            del río Suratá
          </h4>
          <p>En  febrero del 2015 ha febrero del 2016 se trabajó con un grupo en las cuencas de los  ríos Suratá, en Santander, y Zulia y Pamplonita en Norte de Santander,asociadas al Complejo de Páramos Jurisdicciones Santurbán Berlín (CPJSB). Santurban  donde un grupo de la Universidad de los Andes conformado por Juan Camilo Cardenas, Juan Felipe Ortiz, Sebastián Arévalo, Johan De Aguas, Yaddi Miranda, Jorge Rincón, Daniel Rivera y Carlos Sánchez. Realizaron un proceso participativo con el propósito de apoyar la construcción de acuerdos colectivos y un sistema de monitoreo ciudadano para el manejo sostenible de las cuencas.</p>
          <ul>
            <li>
              Talleres comunitarios para la construcción participativa de
              acuerdos colectivos desde las instituciones, enmarcados en las
              dimensiones local y regional, para el manejo integral de los
              recursos de la subcuenca.
            </li>
            <li>
              Uso de juegos económicos como herramienta metodológica para
              generar discusiones y reflexiones en torno a las implicaciones y
              retos de las actividades económicas en la subcuenca y a los
              incentivos económicos para el cambio tecnológico.
            </li>
            <li>
              Jornadas de medición, en conjunto con los habitantes de la
              subcuenca, de algunos parámetros de la calidad del agua en puntos
              estratégicos de monitoreo seleccionados.
            </li>
          </ul>
        
       
          <div className="patrocinadores" style={{marginTop:'2vh'}}>
            <div className="img_container">
              <img src={us_aid} alt="" className="patrocinador us_aid" />
            </div>
            <div className="img_container">
              <img
                src={foro_nacional_por_colombia}
                alt=""
                className="patrocinador"
              />
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
          p{
            text-align: justify;
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

          .imagen {
            margin: 0 auto;
            max-width: 900px;
            max-height: 600px;
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
            width: 15rem;
            height: auto;
            max-height: 10rem;
          }

          .img_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .us_aid {
            width: 43rem;
          }

          .video_container {
            display: flex;
            justify-content: center;
          }

          .video {
            height: 600px;
            width: 80%;

            @media ${bp_medium} {
              width: 100%;
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

export default Santurban;
