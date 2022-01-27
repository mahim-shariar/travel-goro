import React, { useEffect, useState } from 'react';
import Guide from '../guide/Guide';
import './Tourguide.css';

const Tourguide = () => {
    let [guide, setGuide] = useState([]);
    useEffect(() => {
        fetch('https://thawing-woodland-53152.herokuapp.com/tourguide')
            .then(res => res.json())
            .then(data => setGuide(data))
    }, [])
    return (
        <div className='container mar-top '>
            <div className='row justify-content-center '>
                <div className='text-tr' >
                    <h1 className='my-5 text-center ' > Our top <span className='t-color' > Tour Guide </span> </h1>
                </div>
                {
                    guide.map(tour => <Guide key={tour._id} guide={tour} ></Guide>)
                }
            </div>
        </div>
    );
};

export default Tourguide;