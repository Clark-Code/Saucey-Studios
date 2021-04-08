import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
//styled-components
import { About } from '../styles';
//framer-motion
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
	return (
		<Faq>
			<h2>
				Frequently asked <span>questions</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet consectetur.</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptatibus rerum suscipit fuga quia ab cumque.
						</p>
					</div>
				</Toggle>
				<Toggle title="Hours Of Operation">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet consectetur.</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptatibus rerum suscipit fuga quia ab cumque.
						</p>
					</div>
				</Toggle>
				<Toggle title="Payment Methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet consectetur.</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptatibus rerum suscipit fuga quia ab cumque.
						</p>
					</div>
				</Toggle>
				<Toggle title="What Products Do You Offer?">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet consectetur.</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptatibus rerum suscipit fuga quia ab cumque.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

//styled-components

const Faq = styled(About)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
	}
	p {
		padding: 1rem 0rem;
	}
`;

export default FaqSection;
