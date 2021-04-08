import styled from 'styled-components';

//styled-components

export const About = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 1300px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`;

export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1300px) {
		padding: 0%;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;

export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export const Hide = styled.div`
	overflow: hidden;
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

export const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;
