import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UIservice.css'


const UIservice = () => {
    let [pro, setPro] = useState({})
    let { id } = useParams();
    let { name, img, days, place, price } = pro;
    useEffect(() => {
        fetch(`https://thawing-woodland-53152.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setPro(data))
    }, [id])

    let handlePlaceOrder = () => {
        axios.post('https://thawing-woodland-53152.herokuapp.com/orders', pro)
            .then(res => {
                if (res.data.insertedId) {
                    alert('this product has is added')
                }
                else {
                    alert('this product is added')
                }
            })
    }
    return (
        <div className='margin' >
            <div className='my-5' >
                <h1 className='text-tr text-center my-5 ' > <span className='t-color' > Place </span>  Order </h1>
            </div>
            <div className='ui-card mx-auto  '>
                <img src={img} alt="" />
                <div className='description'>
                    <h3> {name} </h3>
                    <h5> {place} </h5>
                    <h6> Days : {days} </h6>
                    <p>${price}</p>
                    <button className='btn btn-style nav-link mx-auto' onClick={handlePlaceOrder}> place Order </button>
                </div>
            </div>
        </div>
    );
};

export default UIservice;