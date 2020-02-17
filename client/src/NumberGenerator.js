import React from 'react';
import { Button } from 'reactstrap';

class NumberGenerator extends React.Component {
  state = {
    randnum: 0,
    winningNum: 1,
    winOrLose: " "
  }

  randomNumber = () => {
    const rand = Math.floor(Math.random() * 51);
    this.setState({randnum: rand}) 
  }


  winningNumber = () => {
    const randWin = Math.floor(Math.random() * 51);
    this.setState({winningNum: randWin})
  }

  winOrLoss = () => {
    if ( this.state.winningNum !== this.state.randnum) {
      this.setState({winOrLose: "Better luck next time, try again!"}) 
      console.log("Better luck next time")
      return this.state.winOrLose
    } 
    else {
      this.setState({winOrLose: "You did it! You WON!!!!!"})
      console.log("YOU WON")
      alert("You did it! You WON!!!!!")
      return this.state.winOrLose

    }
  }

  handleClick = () => {
    this.winOrLoss()
    this.randomNumber();
    this.winningNumber();
  }
  

  render() {
    return(
      <div>
        <div>
          <h2>Your winning # is...</h2>
          <h1>{this.state.winningNum}</h1>
        </div>
        <div>
          <h2>Your Number:</h2>
          <h1>{this.state.randnum}</h1>
          <Button color="success" onClick={this.handleClick}>GOOD LUCK!</Button>{' '}
        </div>
        <div>
          <h3>{this.state.winOrLose}</h3>
        </div>
      </div>
    )
  }
}

export default NumberGenerator
