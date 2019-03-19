import React, { Component } from 'react';

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
			</div>
		);
	}
}

export default EquipoTrabajo;
