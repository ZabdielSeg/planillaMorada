import React from "react";
import IntegrantesCard from "./IntegrantesCard";

const AllIntegrantesCards = () => {
    return (
        <div id='Integrantes'>
            <h2 className='carteras'>Carteras</h2>
            <div className='AllIntegrantesCardDiv'>
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637092573/Henri.jpg' name='Henri Villegas' cartera='Secretaría General' suplente='Y. Saray Araujo' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637191525/Saray.jpg' />
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637092572/rosalia.jpg' name='Rosalía Castelán' cartera='Secretaría de Organización' suplente='Laura I. Meza' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637191598/LauraItzel.jpg' />
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637092573/Albania.jpg' name='Albania López' cartera='Secretaría de Trabajo y Conflictos' suplente='JuanFra Román' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637188817/JuanFra.jpg' />
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637092573/Yuriana.jpg' name='Yuriana Sánchez' cartera='Secretaría de Promoción y Actualización' suplente='Luisa M. Villalobos' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637187560/LuisaMaria.jpg' />
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637095847/Yuliana.jpg' name='Claudia Y. Millán' cartera='Secretaría de Finanzas' suplente='M. Rosario Escobar' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637187481/Rosario.jpg' />
                <IntegrantesCard name='Itzel D. Anrubio' imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637182445/Dariela.jpg'  cartera='Secretaría de Créditos y Vivienda' suplente='J. César de la Cruz' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637187289/JulioC%C3%A9sar.jpg' />
                <IntegrantesCard imgSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637092573/Benjamin.jpg' name='Benjamín García' cartera='Stría. de Previsión y Asistencia Social' suplente='Jesús Quinto' imgSuplenteSource='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1637187412/Quinto.jpg' />
            </div>
        </div>
    )
}

export default AllIntegrantesCards;