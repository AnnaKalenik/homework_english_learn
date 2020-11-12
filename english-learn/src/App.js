import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Library';
import Training from './Components/Training';
import Learn from './Components/Learn';
import Game from './Components/Games/Game';

const App = () => {
	const [score, setScore] = useState(42);

	return (
    	<BrowserRouter>
    	  	<div className="app-wrapper">
    	  	  	<Nav />
				<Score score={score} />

    	  	  	<Route path='/library' component={Library} />
    	  	  	<Route path='/training' component={Training} />
    	  	  	<Route path='/learn' component={Learn} />
    	  	  	<Route path='/training/check-mode'>
					<Game setScore={setScore} score={score} />
				</Route>
    	  	</div>
    	</BrowserRouter>
	);
};

export default App;