import React from 'react'
import Header from './header'
import ChatContainer from '../../containers/chatContainer'
import Footer from './footer'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {newMessage: ''}
  }

  getNewMessage(newMessage) {
    console.log('new message::::', newMessage)
    this.setState({ newMessage })
  }
  render() {
    return (
      <div className='message-list-container'>
        <Header />
        <ChatContainer newMessage={this.state.newMessage} />
        <Footer getNewMessage={(newMessage) => this.getNewMessage(newMessage)} />
      </div>
    )
  }
}