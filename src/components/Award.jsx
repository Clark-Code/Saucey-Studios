import React from 'react';
import styled from 'styled-components';

const Award = ({ title, description }) => {
	return (
		<Awards>
			<h3>{title}</h3>
			<div className="Line"></div>
			<p>{description}</p>
		</Awards>
	);
};

//styled-components

const Awards = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.Line {
		width: 100%;
		background: #23d997;
		height: 0.3rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

export default Award;
