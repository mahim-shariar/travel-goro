import React from 'react';
import UseFirebase from '../hooks/UseFirebase';
import './SignIn.css'

const SignIn = () => {
    let {handleGoogleSignIN,user } = UseFirebase()
    console.log(user);

    return (
        <div className='w-50 mx-auto contaniner border p-5 mt-5 ' >
            <div>
                <h1 className="text-color " > Login  </h1>
            </div>
            <button className='btn mx-auto btn-color ' onClick={handleGoogleSignIN} > <img className="img-fluid"  src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" /></button>
        </div>
    );
};

export default SignIn;