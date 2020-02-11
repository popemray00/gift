import React from 'react';

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

  handleClick = () => {
    this.randomNumber();
    this.winningNumber();
    this.winOrLoss()
  }

  winOrLoss = () => {
    if ( this.state.winningNum !== this.state.randnum) {
      this.setState({winOrLose: "Better luck next time"}) 
      console.log("Better luck next time")
      return this.state.winOrLose
    } 
    
    else {
      this.setState({winOrLose: "You did it! You WON!!!!!"})
      console.log("YOU WON")
      return this.state.winOrLose
    }
  }
  

  render() {
    return(
      <div>
        <p>{this.state.winningNum}</p>
        <button onClick={this.handleClick}>GOOD LUCK</button>
      <div>
        <h1>Your Number:</h1>
        <h1>{this.state.randnum}</h1>
      </div>
        <p>{this.state.winOrLose}</p>
      </div>
    )
  }
}

export default NumberGenerator
