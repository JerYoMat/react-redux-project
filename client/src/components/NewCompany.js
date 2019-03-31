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
      exchange: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit = e => {
    e.preventDefault();
   this.props.dispatch(
      addCompany(this.state)
    )
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.companyCreateError && (
            <div className="error-message">
              Error: {this.props.companyCreateError.message}
            </div>
          )}
          <h3>Add A New Company:</h3>
            <div>
              <label>Name:</label>
              <input name='name' type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              <label>Ticker:</label>
              <input name='ticker' type="text" value={this.state.ticker} onChange={this.handleChange} />
            </div>
            <div>
              <label>Primary Exchange:</label>
              <input name='exchange' type="text" value={this.state.exchange} onChange={this.handleChange} />
            </div>

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

/*
      fiscalYear: null,
      revenue: null,
      ebit: null,
      currentAssets: null,
      currentLiabilities: null,
      intangibleAssets: null,
      totalAssets: null,
      totalLiabilities: null,
      retainedEarnings: null */