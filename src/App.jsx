import React from 'react';
import HomeSection from './pages/HomeSection';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//router
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<HomeSection />
				</Route>
				<Route path="/Work" exact>
					<OurWork />
				</Route>
				<Route path="/work/:id" exact>
					<MovieDetail />
				</Route>
				<Route path="/Contact" exact>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
