import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './SignIn.css'

const SignIn = () => {
    let {user,signInWithGoogle,setUser,setIsLoading} = useAuth();

    let location = useLocation();
    let history = useHistory()

    let redirect_uri = location.state?.form || '/';
    
    let handleGoogleSignIN = ()=>{
        signInWithGoogle()
        .then(res =>{
            setUser(res.user)
            history.push(redirect_uri)
        })
        .finally(()=> setIsLoading(false))

    }

    return (
        <div className='p-5 mx-auto mt-5 border w-50 contaniner App ' >
                <h1 className='text-center '>Login</h1>            
                <button className='btn' onClick={handleGoogleSignIN} > <img className="img-fluid"  src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" /></button>
                <h1> {user.email} </h1>
        </div>
    );
};

export default SignIn;