import React, { Component } from "react";
import Slider from "react-slick";

import { bp, colors } from "../../../../theme";
import one from "../images/1.JPG";
import two from "../images/2.JPG";
import three from "../images/3.JPG";
import four from "../images/4.jpg";
import five from "../images/5.JPG";
import six from "../images/6.jpg";
import seven from "../images/7.JPG";
import eight from "../images/8.JPG";
import nine from "../images/9.jpg";
import ten from "../images/10.jpg";
import eleven from "../images/11.jpg";
import twelve from "../images/12.jpg";

class Actividades extends Component {
  render() {
    const { bp_large, bp_medium, bp_small } = bp;
    const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
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
      <div>
        <div className="detail">
          <div className="description">
            <h3>
              Acción colectiva para la transformación de conflictos
              socio-ambientales en ecosistemas de páramo: Piloto en la subcuenca
              del río Suratá
            </h3>
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
                subcuenca, de algunos parámetros de la calidad del agua en
                puntos estratégicos de monitoreo seleccionados.
              </li>
            </ul>
            Para más información consultar:{" "}
            <a href="http://www.santurbanvisible.org/">
              http://www.santurbanvisible.org
            </a>
            <div className="description">
              <Slider {...settings}>
                <div>
                  <img src={one} className="imagen" />
                </div>
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
              </Slider>
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

export default Actividades;
