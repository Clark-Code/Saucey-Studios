import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../MovieState';
import Award from '../components/Award';
//framer-motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	//use effect
	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
	}, [movies, url]);

	return (
		<Fragment>
			<motion.div variants={pageAnimation} initial="hidden" animate="show">
				{movie && (
					<Details>
						<HeadLine>
							<h2>{movie.title}</h2>
							<img src={movie.mainImg} alt="movie" />
						</HeadLine>
						<Awards>
							{movie.awards.map((award) => (
								<Award
									title={award.title}
									description={award.description}
									key={award.title}
								/>
							))}
						</Awards>
						<ImageDisplay>
							<img src={movie.secondaryImg} alt="movie" />
						</ImageDisplay>
					</Details>
				)}
			</motion.div>
		</Fragment>
	);
};

//styled-components

const Details = styled.div`
	color: white;
`;

const HeadLine = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	img {
		width: 100%;
		height: 90vh;
		object-fit: cover;
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default MovieDetail;
