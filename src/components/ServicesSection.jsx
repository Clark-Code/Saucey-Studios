import React, { Fragment } from 'react';
//images
import clock from '../img/clock.svg';
import innovation from '../img/innovation.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
//styled-components
import { About, Description, Image, Cards, Card } from '../styles';

const ServicesSection = () => {
	return (
		<Fragment>
			<Services>
				<Description>
					<h2>
						High <span>quality</span> services
					</h2>
					<Cards>
						<Card>
							<div className="icon">
								<img src={clock} alt="clock" />
								<h3>Efficient</h3>
							</div>
							<p>Lorem ipsum dolor sit amet.</p>
						</Card>
						<Card>
							<div className="icon">
								<img src={innovation} alt="innovation" />
								<h3>Innovation</h3>
							</div>
							<p>Lorem ipsum dolor sit amet.</p>
						</Card>
						<Card>
							<div className="icon">
								<img src={money} alt="money" />
								<h3>Affordable</h3>
							</div>
							<p>Lorem ipsum dolor sit amet.</p>
						</Card>
						<Card>
							<div className="icon">
								<img src={teamwork} alt="teamwork" />
								<h3>Teamwork</h3>
							</div>
							<p>Lorem ipsum dolor sit amet.</p>
						</Card>
					</Cards>
				</Description>
				<Image>
					<img src={home2} alt="camera" />
				</Image>
			</Services>
		</Fragment>
	);
};

//styled-components

const Services = styled(About)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

export default ServicesSection;
