import React from 'react'
import logo from '../../logo.svg'
import Conversation from './conversation'

export default class ConversationList extends React.Component {

  render() {
    return (
      <div className='conv-list'>
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    )
  }
}