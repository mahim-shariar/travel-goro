
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import Init from '../../fireBase/firebase.init';

Init();
let UseFirebase = () =>{
    let [user,setUser] = useState()
    let auth = getAuth()
    let handleGoogleSignIN = () =>{
        const Googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,Googleprovider)
        .then(result =>{
            setUser(result.user)
        })
    }
    return{
       handleGoogleSignIN,
       user,
    }
}

export default UseFirebase;