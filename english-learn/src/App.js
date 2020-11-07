import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Library';
import Training from './Components/Training';
import Learn from './Components/Learn';

const App = () => {
  let score = '0';
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Score score={score} />
        <Nav />
        <Route path='/library' component={Library} />
        <Route path='/training' component={Training} />
        <Route path='/learn' component={Learn} />
      </div>
    </BrowserRouter>
  );
};

export default App;