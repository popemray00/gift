import React from 'react';

class NumberGenerator extends React.Component {
  state = {
    randnum: 0,
    winningNum: 12
  }

  randomNumber = () => {
    const rand = Math.floor(Math.random() * 51);
    this.setState({randnum: rand}) 
  }


  winningNumber = () => {
    const randwin = Math.floor(Math.random() * 51);
    this.setState({winningNum: randwin})
  }

  handleClick = () => {
    this.randomNumber()
    if ( this.state.randnum === this.state.winningNum) {

      alert("WINNER")
    }
    else {
      console.log("Better luck next time")
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
      </div>
    )
  }
}

export default NumberGenerator
