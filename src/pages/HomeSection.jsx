import React, { Fragment } from 'react';
import HomeSection from '../components/HomeSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//framer-motion
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<Fragment>
			<motion.div>
				<HomeSection />
				<ServicesSection />
				<FaqSection />
			</motion.div>
		</Fragment>
	);
};

export default Home;
