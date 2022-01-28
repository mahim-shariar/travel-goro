import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
        <Container>
            <div className="row mx-auto" >
                <div>
                    <h1 className='fw-bold my-5 '>Experience of <span className='t-color' > Our Travelers </span></h1>
                </div>
                {
                    services.map(service => <Service key={service._id}
                        service={service} ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;