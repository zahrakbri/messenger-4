import React from 'react'
import logo from '../../logo.svg'
class Login extends React.Component {

  render () {
    return (
      <div>
        <div>
          <img src={logo} />
          <input />
          <input />
          <button>login</button>
        </div>
      </div>
    )
  }
}

export default Login