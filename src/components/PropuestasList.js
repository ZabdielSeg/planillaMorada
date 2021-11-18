import React from 'react';

const PropuestasList = () => {
    const escSecTec4 = 'de la Esc. Sec. Tec. 4';
    return (
        <div id='Propuestas'>
            <h2 className='propuestas-title'>Algunas de nuestras propuestas son:</h2>
            <ul>
                <li>Defender los intereses y derechos en materia laboral ante el órgano correspondiente a través del diálogo y negociación colectiva, así como mantener la dignificación de todo el personal {escSecTec4}.</li>
                <li>Transmitir información oportuna a toda la base magisterial referente e cursos de actualización, capacitación, superación profesional, de evaluación y estímulos al servicio de trabajores de la educación.</li>
                <li>Servir de enlace permanente entre los órganos de gobierno del Sindicato y todos los compañeros del plantel.</li>
                <li>Convocar a todos los compañeros para celebrar reuniones de trabajo en grado de unidad y sana relación, para tomar decisiones colectivas.</li>
                <li>Difundir oportunamente los lineamientos, acuerdos, normas y todos aquellos comunicados del Servicio Profesional Docente.</li>
                <li>Promover la participación del personal de actividades culturales, recreativas y deportivas que promueva el SNTE</li>
            </ul>
        </div>
    )
}

export default PropuestasList;