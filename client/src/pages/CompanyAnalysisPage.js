import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import { Route, Redirect } from 'react-router-dom';

const CompanyAnalysisPage = ({ companyId, company, loading }) => {
  if (loading) {
    return <div>...Loading...</div>
  }

  if (!company) {
    return <NotFoundPage />
  }
  return <div>Viewing {companyId} -- {company.name}</div>;
};

const mapState = (state, ownProps) => {
  return {
    loading: state.companies.loadingCompanies,
    company: state.companies.find(c => c.id === parseInt(ownProps.companyId, 10))
  }
}

export default connect(mapState)(CompanyAnalysisPage);