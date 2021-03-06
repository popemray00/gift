import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Instructions from './Instructions';
import Game from './Game';

function App() {
  return (
    <Router>
        <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/instructions" component={Instructions} />
            <Route exact path="/game" component={Game} />
        </div>
    </Router>
  );
}

export default App;
