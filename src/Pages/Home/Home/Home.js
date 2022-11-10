import React from 'react';
import { Helmet } from 'react-helmet-async';

import About from '../About/About';
import Banner from '../Banner/Banner';
import Exprerience from '../Exprerience/Exprerience';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {
	return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <Exprerience></Exprerience>
      <About></About>
    </div>
  );
};

export default Home;