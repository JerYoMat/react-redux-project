import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';


const SignupForm = ({ error, loading, signup }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="LoginPage">
      <p>Please log in or sign up to continue.</p>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Username
          <input
            name="email"
            value={email}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <div className="error">{error.message}</div>
        )}
       
        <button
          disabled={loading}
          onClick={() => signup(email, password)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const mapState = state => ({
  loading: state.users.loadingUser,
  error: state.users.userError
});
const mapDispatch = { signup };
export default connect(
  mapState,
  mapDispatch
)(SignupForm);