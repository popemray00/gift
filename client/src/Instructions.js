import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./Instructions.css"

class Instructions extends React.Component {

    render() {
      return (
        <div>
          <div className="header">
           <h1>How To Play. </h1>
          </div>
          <div className="rules">
            <h2>The rules are simple - </h2>
            <br />  
            <ul>
              <li>You have a Winning Number and your number.</li>
              <br />
              <li>When you click the "Good Luck" button it will generate random winning and your numbers.</li>
              <br />
              <li>If your number matches the Winning Number... YOU WIN!</li>
              <br />
              <li>If the numbers don't match try again.</li>
            </ul>
            <br/>
            <Button color="success"><Link className="buttext" to="/Game" >Let's Play</Link></Button>{' '}
          </div>
        </div>
      );
    }
  }
  
  export default Instructions;
  