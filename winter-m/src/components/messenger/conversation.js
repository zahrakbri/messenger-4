import React from 'react'
import logo from '../../logo.svg'

export default class Conversation extends React.Component {

  render() {
    console.log('propss::', this.props)
    return (
      <div className='conversation'>
        <img src={logo} width='30px' />
        <div className='conversation-data'>
          <div>
            <span>{this.props.data.name}</span>
            <span>{this.props.data.latestMessageDate}</span>
          </div>
          <div>
            <span>{this.props.data.latestMessage}</span>
            <span>{this.props.data.unseen_message}</span>
          </div>
        </div>
      </div>
    )
  }
}