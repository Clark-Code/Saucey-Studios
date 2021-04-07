import React, { Fragment } from 'react';
//images
import home1 from '../img/home1.png';
//styled-components
import { About, Description, Image, Hide } from '../styles';
//router
import { Link } from 'react-router-dom';

const HomeSection = () => {
	return (
		<Fragment>
			<About>
				<Description>
					<div className="title">
						<Hide>
							<h2>We work to make</h2>
						</Hide>
					</div>
					<div className="title">
						<Hide>
							<h2>
								your <span>dreams</span>
							</h2>
						</Hide>
					</div>
					<div className="title">
						<Hide>
							<h2>come true.</h2>
						</Hide>
					</div>
					<p>
						Contact us about any Photography or Cinematography ideas that you
						have
					</p>
					<Link to="/contact">
						<button>Contact Us</button>
					</Link>
				</Description>

				<Image>
					<img src={home1} alt="guy with camera" />
				</Image>
			</About>
		</Fragment>
	);
};

export default HomeSection;
