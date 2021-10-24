import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Successfully Deleted");
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            });
    }

    return (
        <div className="service">
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <div className="pb-3">
                        <h3>Service Name: {service.name}</h3>
                        <h5>Price: {service.price}</h5>
                        <p className="px-3">{service.description}</p>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;