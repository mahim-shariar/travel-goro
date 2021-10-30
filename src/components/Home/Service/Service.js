import React from 'react';
import './Service.css'
// import { Link } from 'react-router-dom';

const Service = (props) => {
    let { name, price, days, img, place } = props.service;
    console.log(props.service);
    return (
        <div className='mb-4 col-lg-4 col-md-6' >
            <div className='ui-card'>
                <img src={img} alt="" />
                <div className='description'>
                    <h3> {name} </h3>
                    <h5> {place} </h5>
                    <h6> Days : {days} </h6>
                    <p>${price}</p>
                    <button className='btn btn-style ' > Read
                        More </button>
                </div>
            </div>
        </div>
    );
};

export default Service;