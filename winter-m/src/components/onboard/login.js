import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      emailError: null,
      passwordError: null
    }

    // this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

  handleChange (e) {
    console.log('hhh', e.target.value)
  }

  handleChangeEmail (e) {
    let name = e.target.name
    // this.state.email = e.target.value
    // console.log('state:::', this.state)
    this.setState({ [name]: e.target.value })
  }

  validationFields () {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)
    this.setState({emailError: emailError, passwordError: passwordError })
  }

  render () {
    console.log('this.state:::', this.state)
    return (
      <div className='container'>
        <div className='wrapper'>
          <h2>{this.props.title}</h2>
          <img src={logo} width='100px' className='logo' />
          <input
            onChange={(e) => this.handleChangeEmail(e)}
            name='email'
            placeholder='email' />
            { this.state.emailError !== null &&
              <p style={{ color: 'red' }}>{this.state.emailError}</p>
            }
          <input
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChangeEmail(e)}
            type='password' />

            { this.state.passwordError !== null &&
              <p style={{ color: 'red' }}>{this.state.passwordError}</p>
            }
          <button
            onClick={() => this.validationFields()}
          >login</button>
        </div>
      </div>
    )
  }
}

export default Login