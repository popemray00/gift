import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
         <h1>Welcome to Feelin Lucky</h1>
         <button><Link to="/Instructions">Check out the Instructions </Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
