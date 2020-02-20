import React from 'react'
import logo from '../../logo.svg'
class Login extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='wrapper'>
          <img src={logo} width='100px' className='logo' />
          <input
            placeholder='email' />
          <input
            placeholder='password'
            type='password' />
          <button>login</button>
        </div>
      </div>
    )
  }
}

export default Login