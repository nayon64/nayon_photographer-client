
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import ServiceReview from './ServiceReview';
import ServiceSection from './ServiceSection';

const ServiceDetails = () => {
	const [service, setService] = useState({})
	const id = useParams().id
	

	useEffect(() => {
		fetch(`http://localhost:5000/service/${id}`)
			.then(res => res.json())
			.then(data => {
				setService(data)
		})
	},[id])
	
	return (
    <div className="container mx-auto">
      <ServiceSection service={service}></ServiceSection>
      <ServiceReview service={service}></ServiceReview>
    </div>
  );
};

export default ServiceDetails;