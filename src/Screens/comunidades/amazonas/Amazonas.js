import React, { Component } from "react";
import Slider from "react-slick";

import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";
import bath from "./bath.png";
import colciencias from "./colciencias.png";
import newton from "./newton.png";

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
          <Mapa region={3} />
        </div>
        <div className="description">
          <p>Monitoreo de agua en comunidades vulnerables de Colombia</p>
          <p>
            Desarrollar una herramienta que nos permita conocer las condiciones
            de calidad del agua en comunidades vulnerables. Con esta herramienta
            se busca poder monitorear las cuencas hidrográficas permitiéndonos
            generar alertas tempranas ante posibles fuentes de contaminación en
            las cuencas. El desarrollo del proyecto se realiza con colaboración
            de la universidad de Bath del Reino Unido donde por medio de
            diferentes tecnologías se quiere conocer el estado del agua.
          </p>
          <ul>
            <li>
              Talleres con la comunidad para mostrar la importancia del cuidado
              y monitoreo de la cuenca.
            </li>
          </ul>
        </div>
        <div className="description" >
          <Slider {...settings} style={{maxHeight: '50vh'}} >
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
            <div>
              <img src={thirteen} className="imagen" />
            </div>
            <div>
              <img src={fourteen} className="imagen" />
            </div>
          </Slider>
        </div>
        <div className="description">
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
