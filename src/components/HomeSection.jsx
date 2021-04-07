import React, { Fragment } from 'react';
//images
import home1 from '../img/home1.png';
//styled-components
import { About, Description, Image, Hide } from '../styles';
//router
import { Link } from 'react-router-dom';
//framer-motion
import { motion } from 'framer-motion';
import { titleAnimation, container, fade, button, image } from '../Animation';

const HomeSection = () => {
	return (
		<Fragment>
			<About>
				<Description>
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="title"
					>
						<Hide>
							<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
						</Hide>
						<Hide>
							<motion.h2 variants={titleAnimation}>
								your <span>dreams</span>
							</motion.h2>
						</Hide>
						<Hide>
							<motion.h2 variants={titleAnimation}>come true.</motion.h2>
						</Hide>

						<motion.p variants={fade}>
							Contact us about any Photography or Cinematography ideas that you
							have
						</motion.p>
						<Link to="/contact">
							<motion.button variants={button}>Contact Us</motion.button>
						</Link>
					</motion.div>
				</Description>
				<Image>
					<motion.img
						variants={image}
						initial="hidden"
						animate="show"
						src={home1}
						alt="guy with camera"
					/>
				</Image>
			</About>
		</Fragment>
	);
};

export default HomeSection;
