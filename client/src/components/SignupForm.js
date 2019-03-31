import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup, login} from '../actions';
import './SignupForm.css';

const SignupPage = ({userError, loadingUser,login, signup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    
    <div className='signup-container'>
      {userError && (
        <div className="error">{userError.message}</div>
      )}
      <div className='card center'>
        <article className='card-body'>
          <a href='/login' className='float-right btn btn-outline-primary'>Sign In</a>
          <h4 className='card-title mb-4 mt-1'>Sign Up</h4>
          <div className='error'></div>
          <form>
            <div className='form-group'>
              <label>Your email</label>
              <input  
                className='form-control'
                placeholder='Email'
                type='email'
                value={email}
                disabled={loadingUser}
                onChange={e => setEmail(e.target.value)}
              />
            </div> 
            <div className='form-group'>
              <label>Your password</label>
              <input 
                className='form-control' 
                placeholder='******' 
                type='password'
                value={password}
                disabled={loadingUser}
                onChange={e => setPassword(e.target.value)}
              />
            </div>  
            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary btn-block'
                onClick={() => signup(email, password)}
                > Sign Up  
              </button>
            </div>
          </form>
        </article>
      </div>
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

export default connect(mapState, mapDispatch)(SignupPage);