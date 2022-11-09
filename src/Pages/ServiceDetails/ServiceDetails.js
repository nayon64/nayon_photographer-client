import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceReview from './ServiceReview';
import ServiceSection from './ServiceSection';

const ServiceDetails = ({ id }) => {
	const service = useLoaderData()
	console.log(service)
	
	return (
		<div className='container mx-auto'>
			<ServiceSection service={service}></ServiceSection>
			<ServiceReview></ServiceReview>
		</div>
  );
};

export default ServiceDetails;