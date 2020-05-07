import React from 'react'
import logo from '../../logo.svg'
import Conversation from './conversation'

export default class ConversationList extends React.Component {
  constructor () {
    super()
    this.state = {
      conversationList: [
        {
          name: 'Arman',
          latestMessage: 'Bale',
          latestMessageDate: '1 min',
          profile_url: 'https://...',
          unseen_message: '1',
          id: '5',
          email: 'arman@gmail.com'
        },
        {
          name: 'Nillofar',
          latestMessage: 'salam',
          latestMessageDate: '2 min',
          profile_url: 'https://...',
          unseen_message: '0',
          id: '3',
          email: 'n@gmail.com'
        },
      ]
    }
  }
  render() {
    return (
      <div className='conv-list'>
        {
          this.state.conversationList.map((conv) => {
            return(
              <Conversation data={conv} key={conv.email} />
            )
          })
        }
      </div>
    )
  }
}