import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    let { name, price, days, img, place,_id } = props.service;
    // console.log(props.service);
    return (
        <div className='mb-4 col-lg-4 col-md-6 d-flex justify-content-center ' >
            <div className='ui-card'>
                <img src={img} alt="" />
                <div className='description'>
                    <h3> {name} </h3>
                    <h5> {place} </h5>
                    <h6> Days : {days} </h6>
                    <p>${price}</p>
                    <Link className='btn btn-style nav-link ' to={`/service/${_id}`} > Book </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;