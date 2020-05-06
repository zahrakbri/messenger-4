import React from 'react'
import ConversationList from './conversationList'
import ChatScreen from './chatScreen'

export default class Messenger extends React.Component {

  render() {
    return (
      <div className='messenger-wrapper'>
        <ConversationList />
        <ChatScreen />
      </div>
    )
  }
}