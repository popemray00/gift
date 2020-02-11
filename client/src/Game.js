import React from 'react';
import Prize from './Prize';
import NumberGenerator from './NumberGenerator';
import { Link } from 'react-router-dom';

class Game extends React.Component {

  render() {
    return (
      <div>
        <div>
         <h1>Let's get started</h1>
         <Prize />
         <NumberGenerator />
        </div>
        <div>
            <button className='butt'><Link to="/">HOME</Link></button>
            <button className='butt'><Link to="/Instructions">Check out the Instructions </Link></button>
        </div>
      </div>
    );
  }
}

export default Game;