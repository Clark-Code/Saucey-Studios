import React from 'react';
import styled from 'styled-components';
//router
import { Link } from 'react-router-dom';
//images
import athlete from '../img/athlete1.png';
import driver from '../img/driver1.png';
import couple from '../img/couple1.png';

const OurWork = () => {
	return (
		<Work>
			<Movie>
				<h2>Fight Night</h2>
				<div className="line"></div>
				<Link to="/work/fight-night">
					<img src={athlete} alt="athlete" />
				</Link>
			</Movie>
			<Movie>
				<h2>The Race</h2>
				<div className="line"></div>
				<Link to="/work/the-race">
					<img src={driver} alt="driver" />
				</Link>
			</Movie>
			<Movie>
				<h2>Summer Days</h2>
				<div className="line"></div>
				<Link to="/work/summer-days">
					<img src={couple} alt="couple" />
				</Link>
			</Movie>
		</Work>
	);
};

//styled-components

const Work = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
	}
`;

const Movie = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default OurWork;
