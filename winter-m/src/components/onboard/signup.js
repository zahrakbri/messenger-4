import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'

class Signup extends React.Component {
  constructor () {
    super ()
    this.state = {
      fields: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        email: null,
        password: null,
        confirmPassword: null
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // handleChange (e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  handleChange (e) {
    this.setState({ ...this.state, fields: { ...this.state.fields, [e.target.name]: e.target.value } })
  }

  handleError () {
    const confirmPasswordError = this.state.fields.password === this.state.fields.confirmPassword
      ? null
      : 'password and confirm password do not match'
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password),
      confirmPassword: confirmPasswordError
    }

    this.setState({ errors })
  }

  render () {
    console.log('state:::', this.state)
    return (
      <div className='container'>
        <div className='wrapper'>
          <img src={logo} width='100px' className='logo' />
          <input
            placeholder='email'
            name='email'
            onChange={this.handleChange}
            />
          { this.state.errors.email !== null &&
            <span>{this.state.errors.email}</span>
          }
          
          <input
            placeholder='password'
            onChange={(e) => this.handleChange(e)}
            name='password'
            type='password' />

          { this.state.errors.password !== null &&
            <span>{this.state.errors.password}</span>
          }
          <input
            onChange={(e) => this.handleChange(e)}
            placeholder='confirm password'
            name='confirmPassword'
            type='password' />

          { this.state.errors.confirmPassword !== null &&
            <span>{this.state.errors.confirmPassword}</span>
          }
          <button
            onClick={() => this.handleError()}
          >Signup</button>
        </div>
      </div>
    )
  }
}

export default Signup