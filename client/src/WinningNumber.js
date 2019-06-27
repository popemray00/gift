import React from 'react';

class WinningNumber extends React.Component {

  winningNum = () => {
    const winningNumberbetween0and50 = Math.floor(Math.random() * 5100);
    console.log(winningNumberbetween0and50)

  }

	render () {
		return(
      <div>
      <p>50</p>
      </div>
		)
	}
}

export default WinningNumber
