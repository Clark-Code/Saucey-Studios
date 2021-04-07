import React from 'react';
import styled from 'styled-components';
//router
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<MainNav>
			<h1>
				<Link id="logo" to="/">
					Saucey Studios
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">About Us</Link>
				</li>
				<li>
					<Link to="/work">Our Work</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
			</ul>
		</MainNav>
	);
};

//styled-components

const MainNav = styled.nav`
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	#logo {
		font-family: 'Lobster', sans-serif;
		font-size: 1.5rem;
		font-weight: lighter;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
`;

export default Nav;
