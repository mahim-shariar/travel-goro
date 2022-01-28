import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    let [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://thawing-woodland-53152.herokuapp.com/ticket')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container' >
            <div className="row" >
                <div className='' >
                    <h1 className='fw-bold my-5 '>Experience of <span className='t-color' > Our Travelers </span></h1>
                </div>
                {
                    services.map(service => <Service key={service._id}
                        service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;