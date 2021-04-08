import React from 'react';
import { titleAnimation } from '../Animation';
//styled-components
import styled from 'styled-components';
//framer-motion
import { motion } from 'framer-motion';

const ContactUs = () => {
	return (
		<ContactStyle>
			<motion.div>
				<Title>
					<Hide>
						<motion.h2 variants={titleAnimation}>Contact Us</motion.h2>
					</Hide>
				</Title>
				<Social variants={titleAnimation}>
					<Circle />
					<h2>Send Us A Message</h2>
				</Social>
				<Social variants={titleAnimation}>
					<Circle />
					<h2>Check Out Our Facebook</h2>
				</Social>
				<Social variants={titleAnimation}>
					<Circle />
					<h2>Check Out Our Instagram</h2>
				</Social>
			</motion.div>
		</ContactStyle>
	);
};

const ContactStyle = styled.div`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: white;
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #23d997;
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
		color: white;
		font-size: 3rem;
	}
`;

export default ContactUs;
