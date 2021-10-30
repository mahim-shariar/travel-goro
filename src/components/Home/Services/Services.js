import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    let [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/ticket')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container' >
            <div className="row" >
                <h1 className='text-margin '>Experience of Our Travelers</h1>
                {
                    services.map(service => <Service key={service._id}
                        service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;