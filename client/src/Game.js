import React from 'react';
import NumberGenerator from './NumberGenerator';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Game.css'


class Game extends React.Component {

  render() {
    return (
        <div>
            <div className="header">
                <h1>Let's get started</h1>
            </div>
            <div id="gamepage"> 
                <div className='container-fluid'>
                    <div className='gameplay'>
                        <NumberGenerator />
                        <br/>
                        <Button color="primary"><Link className="buttext" to="/" >Home</Link></Button>{' '}
                        <Button color="info"><Link className="buttext" to="/Instructions">Instructions</Link></Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Game;