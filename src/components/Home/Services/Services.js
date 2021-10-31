import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    let [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shrieking-moonlight-70227.herokuapp.com/ticket')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container' >
            <div className="row" >
                <div className='text-tr' >
                    <h1 className='text-margin text-center '>Experience of <span className='t-color' > Our Travelers </span></h1>
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