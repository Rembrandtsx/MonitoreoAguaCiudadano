import React, { Component } from 'react';
import alba from './Equipo de trabajo/Alba-Avila.jpg';
import lorenzo from './Equipo de trabajo/Di_lorenzo.jpg';
import elena from './Equipo de trabajo/Elena_Bernalte.jpg';
import felipe from './Equipo de trabajo/Felipe_Muñoz.jpg';
import husserl from './Equipo de trabajo/Husserl-Johanna.png';
import jaime from './Equipo de trabajo/Jaime_PEREZ.jpg';
import jannis from './Equipo de trabajo/Jannis_Wenk.jpg';
import jose from './Equipo de trabajo/Jose_Lopez.jpg';
import juan from './Equipo de trabajo/Juan_Cardenas.JPG';
import pedro from './Equipo de trabajo/Pedro_Estrela.jpg';
import sebastian from './Equipo de trabajo/Sebastian_arevalo.jpg';

import { bp, colors } from '../../theme';

class EquipoTrabajo extends Component {
	render() {
		const { bp_large, bp_medium, bp_small } = bp;
		const { color_grey_light_1, color_grey_light_2, shadow_light } = colors;
		return (
			<div>
				<div className="detail">
					<div className="description">
						<center>
							<h2>
								Equipo de trabajo
                           </h2>
							<h3>
								Uniandes
                           </h3>
						   
						   <a href="https://academia.uniandes.edu.co/AcademyCv/jccarden ">Juan Camilo Cárdenas </a>
							- facultad de Economía <br></br>
							<img src={juan} className="people"></img>
<br></br>


							<a href="https://academia.uniandes.edu.co/AcademyCv/fmunoz ">Felipe Muñoz</a>  - Departamento de Ingeniería Química<br></br>
							<img src={felipe} className="people"></img>
 <br></br>

							<a href="https://academia.uniandes.edu.co/AcademyCv/jhusserl ">Johana Husserl</a> - Departamento Civil y Ambiental<br></br>
							<img src={husserl} className="people"></img>
 <br></br>
							<a href="https://academia.uniandes.edu.co/AcademyCv/a-avila ">Alba Ávila</a>
							 -  Departamento de Ingeniería Eléctrica y Electrónica<br></br>
							<img src={alba} className="people"></img>

<br></br>
							Jaime Andrés Peréz- Departamento de Ingeniería Eléctrica y Electrónica<br></br>
							<img src={jaime} className="people"></img>
 <br></br>

							Sebastián Arévalo- Departamento de Ingeniería Eléctrica y Electrónica <br></br>
							<img src={sebastian} className="people"></img>
							<br></br>
							Carlos Alejandro Jimenez- Departamento de Ingeniería Eléctrica y Electrónica 
							<br></br>
							Jose David Lopez Rivas - Facultad de Economía 
							<br></br>
							<img src={jose} className="people"></img>
							<br></br>
							<h3>
								Internacionales
                           </h3>
						   <b><h4>2017-2019



Bath University, UK</h4></b>
<br></br>
<h5>Funding Newton Institutional Links-2017</h5>
							
<br></br>
							<a href="https://researchportal.bath.ac.uk/en/persons/mirella-di-lorenzo ">Mirella Di Lorenzo</a>
							,  Department of Chemical Engineering<br></br>
							<img src={lorenzo} className="people"></img>
<br></br>

							<a href="https://www.researchgate.net/profile/Elena_Bernalte_Morgado ">Elena Bernalte</a>
							, Department of Chemical Engineering<br></br>
							<img src={elena} className="people"></img>
<br></br>

							<a href="https://researchportal.bath.ac.uk/en/persons/pedro-estrela ">Pedro Estrela</a>
							,  Department of Electronic & Electrical Engineering<br></br>
							<img src={pedro} className="people"></img>
 <br></br>
							<a href="https://researchportal.bath.ac.uk/en/persons/jannis-wenk ">Jannis Wenk</a>
							,  Department of Chemical Engineering<br></br>
							<img src={jannis} className="people"></img>


 <br></br>

							<h5>2013-2015</h5>
<br></br>
							<a href="https://nautiluslive.org/people/donald-blair ">Donald Blair</a>
							 - PublicLab y MIT Media Lab<br></br>

 <br></br>




						</center>
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
					.people{
						max-height: 15vh;
					}
				`}</style>
			</div>
		);
	}
}

export default EquipoTrabajo;
