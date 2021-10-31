import React from 'react';
import './Guide.css' 

const Guide = (props) => {
    let {img,name,profession} = props.guide;
    return (
        <div className='ui-card m-40 '>
            <img src={img} alt="" />
            <div className='description'>
                <h3> {name} </h3>
                <p>{profession}</p>
                <button className='btn btn-style ' > Read
                More </button>
            </div>
        </div>
    );
};

export default Guide;