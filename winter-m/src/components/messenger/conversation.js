import React from 'react'
import logo from '../../logo.svg'

export default class Conversation extends React.Component {

  render() {
    return (
      <div className='conversation'>
        <img src={logo} width='30px' />
        <div className='conversation-data'>
          <div>
            <span>zahra</span>
            <span>1/1</span>
          </div>
          <div>
            <span>Hi</span>
            <span>5</span>
          </div>
        </div>
      </div>
    )
  }
}