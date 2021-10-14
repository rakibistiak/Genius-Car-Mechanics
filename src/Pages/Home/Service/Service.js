import React from 'react';
import './Service.css';
import {Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
const Service = ({ service }) => {
    // const {service} = props;
    const { id,name, price, description, img } = service;
    const history = useHistory()
    const handleService = ()=>{
        history.push(`/booking/${id}`)
    };
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Button variant='info' onClick={handleService}> Book  <span className='text-white'>{name.toLowerCase()}</span></Button>
        </div>
    );
};

export default Service;