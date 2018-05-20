import React, { Component } from "react";
import Slider from "react-slick";

import { bp, colors } from "../../../../theme";

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
            <h3>La Gran Cuenca del R&iacute;o Teusac&aacute;</h3>
            <p>
              Es un proyecto que viene siendo impulsado por el acueducto
              Progresar E.S.P donde por medio de diferentes actividades busca
              que la comunidad se empodere y tome parte activa del manejo del
              agua.&nbsp; Dentro estas actividades han desarrollado una
              plataforma virtual donde registran las mediciones de calidad del
              agua que se realizan con los sensores que se desarrollaron en
              compa&ntilde;&iacute;a con la Universidad de los Andes.
            </p>
            <p>
              Para conocer informaci&oacute;n del proyecto puede consultar la
              p&aacute;gina:
            </p>
            <p>
              <a href="http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/">
                http://progresaresp.com/mapa-monitoreo-y-sistema-de-alertas-tempranas/
              </a>
            </p>
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

          .imagen {
            margin: 0 auto;
            max-width: 900px;
            max-height: 600px;
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
    );
  }
}

export default Actividades;
