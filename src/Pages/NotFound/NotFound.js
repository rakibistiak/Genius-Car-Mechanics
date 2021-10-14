import React from 'react';
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import notfound from '../../images/404.jpg';

const NotFound = () => {
    const history = useHistory();
    const handleGoHome =() =>{
        history.push('/home')
    };
    return (
        <div>
            <img src={notfound} alt="" /> <br />
            <Button className='mt-4 text-white' variant='info' onClick={handleGoHome}> Go Back </Button>
        </div>
    );
};

export default NotFound;