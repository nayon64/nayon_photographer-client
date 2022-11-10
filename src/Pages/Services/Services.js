
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../context/AuthProvide';
import Loading from '../Shared/Loading/Loading';
import ServiceCart from '../Shared/Service.Cart/ServiceCart';

const Services = () => {
	const [services, setServices] = useState([])
    
	const { loading, setLoading } = useContext(AuthContext);

	useEffect(() => {
    setLoading(true);
    fetch(`https://nayon-photography-server.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, [setLoading]);
	


	return (
    <div className="container mx-auto">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-purple-600 text-center">
        My Services
      </h1>

		{loading && <Loading></Loading>}
			
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-4 px-4 md:px-0">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;