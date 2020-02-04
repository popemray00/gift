import React from 'react';
import Prize from './Prize'
import NumberGenerator from './NumberGenerator'

class Game extends React.Component {

  render() {
    return (
      <div>
        <div>
         <h1>Let's get started</h1>
         <Prize />
         <NumberGenerator />
        </div>
      </div>
    );
  }
}

export default Game;