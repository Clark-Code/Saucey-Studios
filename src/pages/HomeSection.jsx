import React, { Fragment } from 'react';
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const Home = () => {
	return (
		<Fragment>
			<HomeSection />
			<ServicesSection />
			<FaqSection />
		</Fragment>
	);
};

export default Home;
