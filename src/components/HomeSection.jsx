import React, { Fragment } from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';

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
					<button>Contact Us</button>
				</Description>

				<Image>
					<img src={home1} alt="guy with camera" />
				</Image>
			</About>
		</Fragment>
	);
};

export default HomeSection;
