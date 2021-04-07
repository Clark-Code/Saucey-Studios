import React, { Fragment } from 'react';
import OurWork from '../components/OurWork';
//framer-motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

const Work = () => {
	return (
		<Fragment>
			<motion.div variants={pageAnimation} initial="hidden" animate="show">
				<OurWork />
			</motion.div>
		</Fragment>
	);
};

export default Work;
