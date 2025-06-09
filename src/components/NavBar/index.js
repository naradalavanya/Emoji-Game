import React from 'react'
import './index.css'

class NavBar extends React.Component {
  render() {
    const {score, topScore, gameStatus} = this.props

    // Hide "Score" and "Top Score" only when the game is won
    if (gameStatus === 'won') {
      return (
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="logo"
            />
            <h1 className="logo-title">Emoji Game</h1>
          </div>
        </nav>
      )
    }

    // Show "Score" and "Top Score" for inProgress and lose states
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          {gameStatus !== 'lose' && (
            <p className="score">Top Score: {topScore}</p>
          )}
        </div>
      </nav>
    )
  }
}

export default NavBar
