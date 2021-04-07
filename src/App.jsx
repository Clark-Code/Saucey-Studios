import React from 'react';
import HomeSection from './pages/HomeSection';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<HomeSection />
		</div>
	);
}

export default App;
