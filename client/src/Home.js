import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Home.css';

class Home extends React.Component {

  render() {
    return (
      <div className='all'>
        <div id='header' className='Jumbotron'>
          <h1>Welcome to Feelin Lucky</h1>
        </div>
        <div className='body'>
          <Button color="success"><Link className="buttext" to="/Game" >Just Play</Link></Button>{' '}
          <Button color="info"><Link className="buttext" to="/Instructions">Instructions</Link></Button>{' '}
        </div>
      </div>
    );
  }
}

export default Home;
