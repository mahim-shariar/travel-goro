import React from 'react';

const TopGuide = (props) => {
    let { img, name, profession } = props.guide;
    return (
        <div className='mb-4 col-lg-4 col-md-6 d-flex justify-content-center ' >
            <div className='ui-card'>
                <img src={img} alt="" />
                <div className='description'>
                    <h3> {name} </h3>
                    <p>{profession}</p>
                    <button className='btn btn-style' > Read
                        More </button>
                </div>
            </div>
        </div>
    );
};

export default TopGuide;