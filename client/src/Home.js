import React from 'react';
import Prize from './Prize'
import NumberGenerator from './NumberGenerator'

class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
         <h1>Luck Gifter</h1>
         <Prize />
         <NumberGenerator />
        </div>
      </div>
    );
  }
}

export default Home;
