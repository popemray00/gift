import React from 'react';

class NumberGenerator extends React.Component {
  state = {
    randnum: 0
  }

  handleClick = () => {
    const rand = Math.floor(Math.random() * 51);
    this.setState({randnum: this.state.randnum = rand})
    if (this.state.winningNum === this.state.randnum) {
      console.log("WINNER")
    }
    else {
      console.log("Better luck next time")
    }
  }

  render() {
    return(
      <div>
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
