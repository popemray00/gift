import React from 'react';

class NumberGenerator extends React.Component {
  state = {
    randnum: 0
  }

  handleClick = () => {
    const rand = Math.floor(Math.random() * 5100);
    this.setState({randnum: this.state.randnum = rand})
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>click</button>
      <div><h1>Your Number:</h1>
      <h1>{this.state.randnum}</h1>
      </div>
      </div>
    )
  }
}

export default NumberGenerator
