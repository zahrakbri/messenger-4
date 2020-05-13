import React, { useState } from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'
import { Link } from 'react-router-dom'


function SignupWithHook (props) {
  const [count, setCount] = useState(0)
  const [fields, setFields] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null
  })
  const handleError = () => {
    const confirmPasswordError = fields.password === fields.confirmPassword
      ? null
      : 'password and confirm password do not match'
    const errors = {
      email: validate('email', fields.email),
      password: validate('password', fields.password),
      confirmPassword: confirmPasswordError
    }

    setErrors(errors)
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <img src={logo} width='100px' className='logo' />
        <input
          placeholder='hook'
          name='email'
          onChange={handleChange}
          />
        { errors.email !== null &&
          <span>{errors.email}</span>
        }
        
        <input
          placeholder='password'
          name='password'
          onChange={handleChange}
          type='password' />


        <input
          placeholder='confirm password'
          name='confirmPassword'
          onChange={handleChange}
          type='password' />


        <button
          onClick={handleError}
        >Signup {count}</button>

        <Link to='/'>already have an account? login</Link>
      </div>
    </div>
  )
}

export default SignupWithHook