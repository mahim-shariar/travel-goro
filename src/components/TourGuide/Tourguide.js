import React, { useEffect, useState } from 'react';
import Guide from '../guide/Guide';
import './Tourguide.css';

const Tourguide = () => {
    let [guide, setGuide] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/tourguide')
            .then(res => res.json())
            .then(data => setGuide(data))
    }, [])
    return (
        <div className='container'>
            <div className='row justify-content-center '>
                <h1 className='my-5' > Our top Tour Guide </h1>
                {
                    guide.map(tour => <Guide key={tour._id} guide={tour} ></Guide>)
                }
            </div>
        </div>
    );
};

export default Tourguide;