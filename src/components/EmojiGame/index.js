import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      clickedEmojis: [],
      gameStatus: 'inProgress', // 'inProgress', 'won', 'lose'
    }
  }

  // Function to shuffle the emojisList
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleEmojiClick = id => {
    const {clickedEmojis, score} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({gameStatus: 'lose'})
    } else {
      const newScore = score + 1
      const newClickedEmojis = [...clickedEmojis, id]
      this.setState({
        score: newScore,
        clickedEmojis: newClickedEmojis,
      })

      if (newScore === emojisList.length) {
        this.setState({gameStatus: 'won', topScore: newScore})
      }
    }

    this.shuffledEmojisList()
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameStatus: 'inProgress',
    })
  }

  render() {
    const {score, topScore, gameStatus} = this.state
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} gameStatus={gameStatus} />
        {gameStatus === 'inProgress' ? (
          <ul className="emojis-container">
            {shuffledEmojis.map(emoji => (
              <li key={emoji.id}>
                <EmojiCard emoji={emoji} onClick={this.handleEmojiClick} />
              </li>
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            status={gameStatus}
            score={score}
            onPlayAgain={this.resetGame}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
