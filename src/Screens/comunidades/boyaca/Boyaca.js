import React, { Component } from "react";
import Slider from "react-slick";

import Mapa from "../../../components/home/deck_mapa/mapa";
import { bp, colors } from "../../../theme";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mapa from "../comunidadesGen/mapa.png";
import img1 from "./Boyaca- Samaca/img1.jpg";
import img2 from "./Boyaca- Samaca/img2.jpg";
import img3 from "./Boyaca- Samaca/img3.jpg";
import img4 from "./Boyaca- Samaca/img4.jpg";
import img5 from "./Boyaca- Samaca/img5.jpg";
import img6 from "./Boyaca- Samaca/img6.jpg";
import img7 from "./Boyaca- Samaca/img7.png";
import img8 from "./Boyaca- Samaca/santotomas.jpeg";
import img9 from "./Boyaca- Samaca/minciencias.png";
import img10 from "./Boyaca- Samaca/boyacagob.png";
import img11 from "./Boyaca- Samaca/decreto.jpeg";

import uniandes from "../comunidadesGen/logo-uniandes.png";

class Proyecto7 extends Component {
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
          <h2>Boyacá - Samacá</h2>

          <div className="image-container">
            <img src={mapa} />
            <div className="after">PROXIMAMENTE</div>
          </div>
          <h3>Monitoreo de agua en comunidades vulnerables de Colombia</h3>

          <Carousel>
            <div>
              <img src={img1} className="imagen" />
            </div>
            <div>
              <img src={img2} className="imagen" />
            </div>

            <div>
              <img src={img3} className="imagen" />
            </div>
            <div>
              <img src={img4} className="imagen" />
            </div>
            <div>
              <img src={img5} className="imagen" />
            </div>
            <div>
              <img src={img6} className="imagen" />
            </div>
          </Carousel>

          <div>
            <h3 className="centered">
              Plataforma Comunitaria para el monitoreo en la calidad del agua en
              la región de Samacá – Boyacá
            </h3>
            <p>
              Según datos recogidos en el Esquema de Ordenamiento Territorial,
              para el periodo 2015- 2027 del municipio (Samacá, 2016), la
              actividad económica que más genera fuentes de empleo es la minería
              de carbón y coquización; con una participación de alrededor del
              35% de la población involucrada directamente en estas actividades.
              Así mismo, asociado a estas actividades de extracción, transporte
              y coquización de este mineral, se han reportado impactos y
              deterioros ambientales en los enclaves mineros, que a su vez se
              han traducido en un deterioro de la salud de los habitantes que se
              dedican específicamente a esta actividad (Acosta Bueno, 2016).
              Dentro de este contexto, se enmarca la necesidad desarrollar una
              red ciudadana de monitoreo de bajo costo, portátil y fácil de
              usar, con el cual se pueda definir un mapa de riesgo de la calidad
              del agua que facilite a las comunidades, autoridades locales,
              departamentales y nacionales la realización de un diagnóstico
              basado en datos obtenidos en campo, sobre de los impactos
              ambientales de la minería del carbón en las comunidades
              circundantes acorde a los criterios recogidos (ver Tabla 1) en el
              decreto 475 de 1998.
            </p>
            <img src={img11} className="tabla" />
            <p className="centered">
              <b>Decreto 1075 - 2015. </b>
              <a href="https://www.lexbase.co/files/lexbase/D1075de2015.pdf">
                https://www.lexbase.co/files/lexbase/D1075de2015.pdf{" "}
              </a>
            </p>
            <p>
              El resultado es que el municipio de Samacá (Boyacá) presenta unos
              ecosistemas vulnerables los cuales están bajo amenaza crítica al
              igual que la salud de las comunidades locales que dependen en sus
              recursos de agua. La implementación de sistema detección y
              monitoreo de contaminantes es primordial para la calidad del agua.
              Tales sistemas pueden ayudar al diagnóstico de la fuente de
              contaminación y que posteriormente pueden ser usados en
              estrategias de prevención y gestión. Durante la propuesta
              proyecto, se desarrollarán sistemas de detección asequibles para
              detección en el sitio y en tiempo real de contaminantes en el agua
              según las normas técnicas dispuestas en el “Decreto 475 de 1998
              sobre la calidad de agua potable en Colombia”. (Barrera Niño,
              2017). El actor en el proyecto es el ciudadano quien al estar
              afectado se apropia de un problema constructivamente a través de
              tecnologías de monitoreo que le permiten visualizarlo y generar el
              soporte necesario para llegar a las autoridades.
              <br />
              Debido a la multidisciplinariedad del proyecto, se establece una
              colaboración entre la <b>Universidad Santo Tomás</b>, Seccional
              Tunja <b> (USTA)</b>, la <b>Universidad de Los Andes (UA) </b> y
              la empresa <b> Germán Franco Carbón SAS (GFC) </b>. Los
              investigadores de Universidad Santo Tomás, Seccional Tunja
              aportarán su experiencia en tecnologías de detección y control en
              la calidad del agua, regulación y tratamiento. Los investigadores
              de Universidad de Los Andes contribuirán con experiencia en
              electrónica, nanofabricación incluidas tecnologías lab-on-a-chip,
              y facilitará la creación de estaciones de muestreo de campo que
              serán utilizados en el proyecto y la empresa{" "}
              <b>Germán Franco Carbón SAS (GFC)</b>, cuya actividad principal es
              la de generar productos a base de carbón, contribuirá en la
              verificación y evaluación del impacto de sus desechos, generando
              recomendaciones conjuntas sobre el uso y gestiones de riesgo en
              agua dentro de la temática de emergencias y desastres que
              comprometan el medio ambiente y recurso humano.
            </p>
          </div>

          <div>
            <h2 className="centered">
              Noticias
            </h2>
            <center>

            <h4>Video</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XW1o6Fwjtpk?start=4340" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br></br>
            <h4>Visibilidad del proyecto en las universidades</h4>
            <a href="https://electrica.uniandes.edu.co/en/home-ingles/9-espanol/departamento/noticias/671-uniandes-presente-en-taller-de-socializacion-en-samaca-boyaca ">https://electrica.uniandes.edu.co/en/home-ingles/9-espanol/departamento/noticias/671-uniandes-presente-en-taller-de-socializacion-en-samaca-boyaca</a>
            <br>
            </br>    
            <h4>Seminario</h4>
            <a href="https://iee.uniandes.edu.co/es/home/9-espanol/departamento/noticias/674-uniandes-organizo-seminario-sobre-los-avances-de-proyecto-">https://iee.uniandes.edu.co/es/home/9-espanol/departamento/noticias/674-uniandes-organizo-seminario-sobre-los-avances-de-proyecto-</a>
            </center>
          
          
          
          </div>

          <h3>Patrocinadores y Colaboradores</h3>
          <div className="patrocinadores">
          <div className="img_container">
              <div className="patrocinador">
                <img src={img10} alt="" />
                <p className="centered">
                  <a href="https://www.boyaca.gov.co/">
                    https://www.boyaca.gov.co/
                  </a>
                </p>
              </div>
            </div>
            <div className="img_container">
              <div className="patrocinador">
                <img src={img9} alt="" />
                <p className="centered">
                  <a href="https://minciencias.gov.co/">
                  https://minciencias.gov.co/
                  </a>
                </p>
              </div>
            </div>
            <div className="img_container">
              <div className="patrocinador">
                <img src={img8} alt="" />
                <p className="centered">
                  <a href="https://www.ustatunja.edu.co/">
                  https://www.ustatunja.edu.co/
                  </a>
                </p>
              </div>
            </div>
            <div className="img_container">
              <div className="patrocinador">
                <img src={uniandes} alt="" />
                <p className="centered">
                  <a href="https://uniandes.edu.co/">
                    https://uniandes.edu.co/
                  </a>
                </p>
              </div>
            </div>
            <div className="img_container">
              <div className="patrocinador">
                <img src={img7} alt="" />
                <p className="centered">
                  <a href="https://www.germanfranco.com.co/ ">
                    https://www.germanfranco.com.co/{" "}
                  </a>
                </p>
              </div>
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
            .centered {
              text-align: center;
            }
            @media ${bp_medium} {
              padding: 3rem;
            }

            @media ${bp_small} {
              flex-direction: column;
            }
          }
          .tabla {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
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
            flex-direction: row;
            flex-wrap: wrap;
            @media ${bp_large} {
              flex-direction: column;
              align-items: center;
            }
          }
          
          .patrocinador img {
            width: 20rem;
            height: auto;
          }

          .img_container {
            width: 25%;
            margin: 0 2.5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          p {
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

export default Proyecto7;
