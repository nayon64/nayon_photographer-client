
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCart from '../Shared/Service.Cart/ServiceCart';

const Services = () => {
	const [services, setServices] = useState([])


	useEffect(() => {
		
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.log(err));
	}, []);
	


	return (
    <div className="container mx-auto">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-purple-600 text-center">
        My Services
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;