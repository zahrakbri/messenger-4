import React, { useState } from 'react'

export default function Footer(props) {
  const [newMessage, setNewMessage] = useState('')
  console.log('###', props)

  return (
    <div className='footer'>
      <input
        placeholder='write a message...'
        onChange={(e) => setNewMessage(e.target.value)}
        />
      <button
        onClick={() => props.getNewMessage(newMessage)}
      >send</button>
    </div>
  )
}