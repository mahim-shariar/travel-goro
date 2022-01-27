import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import Init from "../../fireBase/firebase.init";

Init()

const useFIrebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({}); //for useEffect
                setError("");
                console.log("logout seccess!");
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        fetch(`http://localhost:8888/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    return {
        user,
        error,
        logOut,
        signInWithGoogle,
        setUser,
        setIsLoading,
        isLoading,
        setError,
    }
}

export default useFIrebase
