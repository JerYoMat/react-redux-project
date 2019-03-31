import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup, login} from '../actions';
import './LoginPage.css';

const LoginPage = ({userError, loadingUser,login, signup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div className='LoginPage'>
    <p>Please log in or sign up to continue.</p>
    <form onSubmit={e => e.preventDefault()}>
      <label>
        email
        <input
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      {userError && (
          <div className="error">{userError.message}</div>
        )}
      <button
        type='submit'
        onClick={() => login(email, password)}
      >
        Login
      </button>
      <button
        type='submit'
        onClick={() => signup(email, password)}
      >
        Sign Up
      </button>
    </form>
  </div>
  )
}

const mapState = (state) => ({
  loadingUser: state.loadingUser,
  userError: state.userError
});

const mapDispatch = {
 login, signup
}

export default connect(mapState, mapDispatch)(LoginPage);