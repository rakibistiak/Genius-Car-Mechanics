import React from 'react';
import {Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const {signInUsingGoogle,setIsLoading} = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();
    const handleGoogleSignIn = () =>{
        signInUsingGoogle()
        .then(userCredential=>{
            history.push(redirect_url);
        })
        .finally(()=> setIsLoading(false) )
    }
    return (
        <div>
            <h4> Please Log in</h4>
            <Button onClick={handleGoogleSignIn} variant='info'> Google Sign in</Button>
        </div>
    );
};

export default Login;