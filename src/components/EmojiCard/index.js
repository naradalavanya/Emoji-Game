import React from 'react'
import './index.css'

class EmojiCard extends React.Component {
  handleClick = () => {
    const {emoji, onClick} = this.props
    onClick(emoji.id)
  }

  render() {
    const {emoji} = this.props
    return (
      <button className="emoji-card" onClick={this.handleClick} type="button">
        <img
          src={emoji.emojiUrl}
          alt={emoji.emojiName}
          className="emoji-image"
        />
      </button>
    )
  }
}

export default EmojiCard
