import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveNewMessage } from '../../actions/conversation'

function Footer(props) {
  const [newMessage, setNewMessage] = useState('')
  console.log('###', props)

  return (
    <div className='footer'>
      <input
        placeholder='write a message...'
        onChange={(e) => setNewMessage(e.target.value)}
        />
      <button
        onClick={() => props.dispatch(saveNewMessage(newMessage))}
      >send</button>
    </div>
  )
}

export default connect()(Footer)