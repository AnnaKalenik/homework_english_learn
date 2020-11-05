import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Page from './Components/Page';

const App = () => {
  let score = '0';
  return (
      <div className="app-wrapper">
          <Nav />
          <Score score={score} />
          <Page />
      </div>
  );
};

export default App;