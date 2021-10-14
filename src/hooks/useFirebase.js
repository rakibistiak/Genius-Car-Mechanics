import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/firebase/firebase.init";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () =>{
    const auth = getAuth();
    const [user,setUser] = useState({});
    const [error,setError] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const signInUsingGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    };
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,loggeduser=>{
            if(loggeduser){
                setUser(loggeduser)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return  ()=> unsubscribed;
    },[auth])
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }
    return {
        user,
        error,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }
};
export default useFirebase;