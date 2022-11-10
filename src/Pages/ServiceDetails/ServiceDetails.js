
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ServiceReview from './ServiceReview';
import ServiceSection from './ServiceSection';

const ServiceDetails = () => {
	const [service, setService] = useState({})
	const id = useParams().id
	

	useEffect(() => {
		fetch(`https://nayon-photography-server.vercel.app/service/${id}`)
			.then(res => res.json())
			.then(data => {
				setService(data)
		})
	},[id])
	
	return (
    <div className="container mx-auto">
      <Helmet>
        <title>Service-details</title>
      </Helmet>
      <ServiceSection service={service}></ServiceSection>
      <ServiceReview service={service}></ServiceReview>
    </div>
  );
};

export default ServiceDetails;