import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup, login} from '../actions';
import './LoginForm.css'

const LoginPage = ({userError, loadingUser,login, signup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div className='LoginPage'>
   
    <form onSubmit={e => e.preventDefault()}>
    <p>Please enter your credentials to continue.</p>
      <label>
        email
        <input
          name='email'
          value={email}
          disabled={loadingUser}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name='password'
          type='password'
          value={password}
          disabled={loadingUser}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      {userError && (
          <div className="error">{userError.message}</div>
        )}
      <label>
      <button
        type='submit'
        onClick={() => login(email, password)}
      >
        Login
      </button>
      </label>
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