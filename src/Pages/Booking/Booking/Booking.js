import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {Button} from 'react-bootstrap';
const ServiceDetail = () => {
    const {serviceId} = useParams();
    const history = useHistory()
    const handleGoBack = ()=>{
        history.push('/home')
    };
    const [services,setServices] = useState([]);
    const [singleService,setSingleService] = useState([]);
    useEffect(()=>{
    fetch('/services.json')
    .then(response => response.json())
    .then(data => setServices(data))
    },[]);
    useEffect(()=>{
        if(services.length){
            const singleService = services.find(service => service.id === parseInt(serviceId));
            setSingleService(singleService);
        }
        
    },[services,serviceId]);
    const { name, price, description, img } = singleService;
    return (
        <div className='mt-5'>
            <img src={img} alt={name +' Service image'} />
            <h4> {name} </h4>
            <h5>{price}</h5>
            <p>{description}</p>
            <Button variant='info' onClick={handleGoBack}>Go Back</Button>
        </div>
    );
};

export default ServiceDetail;