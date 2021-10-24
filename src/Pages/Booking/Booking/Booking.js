import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return (
        <div>
            <h1>Details of: {service.name}</h1>
            <p><small>Booking Id: {serviceId}</small></p>
            <img src={service.img} alt="" />
            <h4>Price: {service.price}</h4>
            <p>Description: {service.description}</p>
        </div>
    );
};

export default Booking;