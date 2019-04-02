import React, { Component } from "react";

import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";
import uniandes from '../comunidadesGen/logo-uniandes.png'
import mapa from '../comunidadesGen/mapa.png';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Proyecto4 extends Component {
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
        <h2>Uniandes</h2>
        
        <div className="image-container">
									<img src={mapa} />
									<div className="after">PROXIMAMENTE</div>
				</div>
          <h3>Monitoreo de agua en comunidades vulnerables de Colombia</h3>
      
      
          <Carousel >
            
          </Carousel>
          <h3>Patrocinadores y Colaboradores</h3>
          <div className="patrocinadores">
            {
              			 <div className="img_container">
                     <img src={uniandes} alt="" className="patrocinador" />
                   </div>
            }
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

export default Proyecto4;
