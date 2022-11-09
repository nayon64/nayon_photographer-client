import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from '../../Shared/Service.Cart/ServiceCart';

const ServicesSection = () => {
	const [services, setServices] = useState([])
	console.log(services)
	useEffect(() => {
		fetch(`http://localhost:5000/services?size=${3}`)
			.then(res => res.json())
			.then(data => {
				setServices(data)
				console.log(data)
			})
	},[])
	return (
    <div className="border-t-2 mt-10 flex flex-col items-center">
      <h2 className="text-center text-xl my-3  font-bold md:text-3xl text-purple-600">
        My Services
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
      <Link  to="/services">
        <button className='text-base my-4 text-white bg-green-600 hover:bg-green-400 duration-300 transition-all py-1 px-2 rounded-md'>See All</button>
      </Link>
    </div>
  );
};

export default ServicesSection;