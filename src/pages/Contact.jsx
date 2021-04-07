import React, { Fragment } from 'react';
import ContactUs from '../components/Contact';
//framer-motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

const Contact = () => {
	return (
		<Fragment>
			<motion.div variants={pageAnimation} initial="hidden" animate="show">
				<ContactUs />
			</motion.div>
		</Fragment>
	);
};

export default Contact;
