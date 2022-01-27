import React, { useEffect, useState } from 'react';
import './MyOrder.css'

const MyOrder = () => {

    let [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://thawing-woodland-53152.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id =>{
        fetch(`https://thawing-woodland-53152.herokuapp.com/orders/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            // if(data.deletedCount>0){
            //     alert('delete sucssesfully');
            //     const remainingOrder = orders.filter(order=>order._id !== id )
            //     setOrders(remainingOrder)
            // }
            console.log(data);
        })
    }

    return (
        <div className='container margin ' >
            <div className='row justify-content-center'>
                <h1 className='text-tr my-5 t-color text-center'> Manege My Order  </h1>
                {
                    orders.map(order =>
                        <div className='mb-4 col-lg-4 col-md-6' key={order._id}>
                            <div className='ui-card mx-auto  '>
                                <img src={order.img} alt="" />
                                <div className='description'>
                                    <h3> {order.name} </h3>
                                    <h5> {order.place} </h5>
                                    <h6> Days : {order.days} </h6>
                                    <p>${order.price}</p>
                                    <button onClick={() => handleDelete(order._id) } className='btn btn-danger  btn-style nav-link mx-auto'> cancel </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrder;