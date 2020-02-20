import React from 'react'
import logo from '../../logo.svg'
class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }

    // this.handleChangeEmail = this.handleChangeEmail.bind(this)
  }

  handleChange (e) {
    console.log('hhh', e.target.value)
  }

  handleChangeEmail (e) {
    let name = e.target.name
    // this.state.email = e.target.value
    this.setState({ [name]: e.target.value })
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
          <p>{this.state.email}</p>
          <input
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChangeEmail(e)}
            type='password' />
          <button>login</button>
        </div>
      </div>
    )
  }
}

export default Login