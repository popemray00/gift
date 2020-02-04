import React from 'react';
import { Link } from 'react-router-dom';

class Instructions extends React.Component {

    render() {
      return (
        <div>
          <div>
           <h1>Here is the instructions </h1>
          </div>
          <div>
              <button><Link to="/Game">LET"S START PLAYING!</Link></button>
          </div>
        </div>
      );
    }
  }
  
  export default Instructions;
  