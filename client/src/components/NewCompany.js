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
  handleChange(e) {
    this.setState({value: e.target.value});
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
          <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  saveInProgress: state.saveInProgress,  
  companyCreateError: state.companyCreateError
})

export default connect(mapStateToProps)(NewCompany);

