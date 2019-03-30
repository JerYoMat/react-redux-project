import React, { Component } from 'react';
import { addCompany } from '../actions';
import { connect } from 'react-redux';
import './NewCompany.scss';

class NewCompany extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      ticker: '',
      exchange: '',
      fiscalYear: null,
      revenue: null,
      ebit: null,
      currentAssets: null,
      currentLiabilities: null,
      intangibleAssets: null,
      totalAssets: null,
      totalLiabilities: null,
      retainedEarnings: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      //TODO: Update and insert addCompany action creator
    )
  }
  setInputValue = e => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.companyCreateError && (
            <div className="error-message">
              Error: {this.props.companyCreateError.message}
            </div>
          )}
          <h3>Add Company Manually:</h3>
        <label>Name:<input disabled={this.props.saveInProgress}value={{/*TODO:*/}} onChange={e => this.setInputValue(e.target.value)} /></label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  saveInProgress: state.saveInProgress,  
  companyCreateError: state.companyCreateError
})

export default connect(mapStateToProps)(NewCompany);

