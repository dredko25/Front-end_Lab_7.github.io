import React from 'react';


export default function Card(props){
    return(
        <>
        {props.details.map((value, index) => (
            <div className='card hover-effect' key={index}>
                <div className='card-body'>
                    <img src={value.img} alt='SomeDish'/>
                    <h1>{value.title}</h1>
                    <p>{value.price}</p>
                </div>
            </div>
        ))}
        </>
        
    )
}