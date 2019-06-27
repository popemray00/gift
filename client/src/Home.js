import React from 'react';
import WinningNumber from './WinningNumber'
import Prize from './Prize'
import NumberGenerator from './NumberGenerator'

class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
         <h1>Luck Gifter</h1>
         <WinningNumber />
         <Prize />
         <NumberGenerator />
        </div>
      </div>
    );
  }
}

export default Home;
