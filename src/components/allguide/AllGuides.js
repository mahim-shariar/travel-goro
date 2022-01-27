import React, { useEffect, useState } from 'react';
import TopGuide from '../TopGuide/TopGuide';
import './AllGuides.css'

const AllGuides = () => {

    let [guide, setGuide] = useState([]);
    useEffect(() => {
        fetch('https://thawing-woodland-53152.herokuapp.com/guide')
            .then(res => res.json())
            .then(data => setGuide(data))
    }, [])
    return (
        <div className='container'>
            <div className='row justify-content-center content '>
                <h1 className='my-5' > Our top Tour Guide </h1>
                {
                    guide.map(tour => <TopGuide key={tour._id} guide={tour} ></TopGuide>)
                }
            </div>
        </div>
    );
};

export default AllGuides;