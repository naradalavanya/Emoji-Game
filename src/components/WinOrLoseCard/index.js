import React from 'react'
import './index.css'

class WinOrLoseCard extends React.Component {
  render() {
    const {status, score, onPlayAgain} = this.props
    const isWon = status === 'won'
    const resultImage = isWon
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const resultText = isWon ? 'You Won' : 'You Lose'
    const scoreLabel = isWon ? 'Best Score' : 'Score'

    return (
      <div className="win-lose-card">
        <div className="result-details">
          <h1 className="result-text">{resultText}</h1>
          <p className="score-label">{scoreLabel}</p>
          <p className="score-value">{score}/12</p>
          <button
            className="play-again-button"
            onClick={onPlayAgain}
            type="button"
          >
            Play Again
          </button>
        </div>
        <div className="result-image-container">
          <img src={resultImage} alt="win or lose" className="result-image" />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
