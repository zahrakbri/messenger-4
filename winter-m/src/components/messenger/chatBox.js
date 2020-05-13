import React from 'react'

export default class ChatBox extends React.Component {
  constructor() {
    super()
    this.state = {
      messageList: [
        {
          text: 'salam',
          sender: '1',
          id: '1'
        },
        {
          text: 'salam',
          sender: '8',
          id: '2'
        },
        {
          text: 'fhbgjnbj',
          sender: '1',
          id: '3'
        },
        {
          text: 'hvgufjgnjf',
          sender: '8',
          id: '4'
        },
        {
          text: 'vjf tghtug tghutg',
          sender: '8',
          id: '5'
        }
      ]
    }
  }

  render() {
    return (
      <div className='messagesBox'>
        {
          this.state.messageList.map((message) => {
            return(
              <div
                key={message.id}
                className={message.sender === '1' ? 'sender' : 'receiver'}
              >
                <span>{message.text}</span>
              </div>
            )
          })
        }

        <div
          className='sender'
        >
          <span>{this.props.newMessage}</span>
        </div>

      </div>
    )
  }
}