import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import BarChart from '../components/BarChart';
import zScoreCalcs from '../functions/zScoreCalcs';

const CompanyAnalysisPage = ({ companyId, company, loading }) => {
  if (loading) {
    return <div>...Loading...</div>
  }

  if (!company) {
    return <NotFoundPage />
  }
  
  const zScoreObj = zScoreCalcs(company);
  const seriesData = Object.values(zScoreObj.data)

  return <div>Viewing {companyId} -- {company.name}<BarChart zScore={zScoreObj.zScore} seriesData={seriesData} name={company.name} /></div>;
};

const mapState = (state, ownProps) => {
  return {
    loading: state.companies.loadingCompanies,
    company: state.companies.find(c => c.id === parseInt(ownProps.companyId, 10))
  }
}

export default connect(mapState)(CompanyAnalysisPage);