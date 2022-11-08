import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
	const [services,setServices]=useState([])


	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setServices(data)
			})
		.catch(err=>console.log(err))
		
	},[])
	return (
		<div className='container mx-auto'>
			<h1 className='text-2xl font-bold text-purple-600 text-center'>My Services</h1>
			<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0'>
				{services.map(service => <ServiceCart
					key={service._id}
					service={service}
				></ServiceCart>)}
			</div>
		</div>
	);
};

export default Services;