import React from 'react';

class WinningNumber extends React.Component {

  state = {
    winningNum: 10,
  }

  winningNumber = () => {
    const rand = Math.floor(Math.random() * 51);
    this.setState({winningNum: this.state.winningNum = rand})
    if (this.state.winningNum === this.state.randnum) {
      console.log("WINNER")
    }
    else {
      console.log("Better luck next time")
    }
    console.log(this.state.winningNum)
  }


	render () {
		return(
      <div>
      <p>{this.state.winningNum}</p>
      </div>
		)
	}
}

export default WinningNumber
