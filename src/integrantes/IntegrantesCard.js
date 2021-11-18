import React from 'react';

const IntegrantesCard = props => {
    return (
        <div className='card'>
            <img src={props.imgSource} alt={props.name} />
            <div className='box-1'>
                <div className='card-info'>
                    <h2>{props.cartera}</h2>
                    <h3>{props.name}</h3>
                    <h4>Suplente:</h4>
                </div>
                <div className='card-suplente'>
                    <h3>{props.suplente}</h3>
                    <img className='suplente-image' src={props.imgSuplenteSource} alt={props.suplente} />
                </div>
            </div>
        </div>
    )
}

export default IntegrantesCard;