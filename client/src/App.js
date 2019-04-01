import React from 'react';
import { connect } from 'react-redux';
import CompaniesListPage from './pages/CompaniesListPage'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import CompanyAnalysisPage from './pages/CompanyAnalysisPage'
import NavbarCustom from './components/NavbarCustom'
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = ({ user }) => {
  return (
    <Router>
      <React.Fragment>
        <NavbarCustom />
          <Route exact path="/signup" render={() => (
          user ? (
            <Redirect to="/"/>
          ) : (
            <SignupForm/>
          )
        )}/>
        <Route exact path="/login" render={() => (
          user ? (
            <Redirect to="/"/>
          ) : (
            <SignupForm/>
          )
        )}/>
        <Route exact path='/companies'component={CompaniesListPage} />
        <Route path='/companies/:companyId'
        render={({ match }) => <CompanyAnalysisPage companyId={match.params.companyId}/>}/>
        <Route exact path='/' component={Home}/>
      </React.Fragment>
    </Router>
  ) 
}

const mapStateToProps = (state) => ({
  user: state.users.user
})


export default connect(mapStateToProps)(App);