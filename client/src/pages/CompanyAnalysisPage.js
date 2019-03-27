import React from 'react';
import { connect } from 'react-redux';

const CompanyAnalysisPage = ({ companyId, company, loading }) => {
  if (loading) {
    return <div>...Loading...</div>
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