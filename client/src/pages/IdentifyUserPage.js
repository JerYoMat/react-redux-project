import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm'
import { connect } from 'react-redux';
import { signup, login} from '../actions';
import './IdentifyUserPage.css';

class IdentifyUserPage extends Component {
  state = {
    activeTab: 0,
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  handleTabChange = (index) => { 
    this.setState({
      activeTab: index
    });
  }
  

  renderLogin() {
    switch(this.state.activeTab) {
      default:
      case 0: return (
      <LoginForm />
        );
      case 1: return this.renderSignup();
    }
  }

  renderSignup() {
    return (
      <SignupForm />
    );
  }
  render() {
    let {activeTab} = this.state;
    return (
      <div className="identify-container">
        <nav className="Form-nav">
        <ul>
          <li className={`Form-nav-item ${activeTab===0 && 'selected'}`}><button onClick={() => this.handleTabChange(0)}>Sign In</button>
          </li>
          <li className={`Form-nav-item ${activeTab===1 && 'selected'}`}><button onClick={() => this.handleTabChange(1)}>Sign Up</button>
          </li>
        </ul>
      </nav>
        <main className="Form-content">
          {this.renderLogin()}
        </main>
      </div>
    );
  }
}
const mapState = (state) => ({
  loadingUser: state.users.loadingUser,
  userError: state.users.userError
});

const mapDispatch = {
 login, signup
}

export default connect()(IdentifyUserPage);
