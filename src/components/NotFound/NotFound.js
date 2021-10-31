import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='App' >
            <img className='img-fluid mx-auto '  src='https://www.elegantthemes.com/blog/wp-content/uploads/2021/06/shutterstock_1075475231.jpg' alt="" />
            <Link to='/home' className='btn btn-danger' > Go Back </Link>
        </div>
    );
};

export default NotFound;