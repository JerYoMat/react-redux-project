import React from 'react';
import { connect } from 'react-redux';
import NotFoundPage from './NotFoundPage';
import BarChart from '../components/BarChart';
import zScoreCalcs from '../functions/zScoreCalcs';
import Table from '../components/Table';

const CompanyAnalysisPage = ({ companyId, company, loading }) => {
  if (loading) {
    return <div>...Loading...</div>
  }

  if (!company) {
    return <NotFoundPage />
  }
  
  const zScoreObj = zScoreCalcs(company);
  const zScore = zScoreObj.zScore
  const seriesData = Object.values(zScoreObj.data)

  return (
    <div>
    <h2>{company.name}</h2>
    <h4 className={'alert alert-'+zScoreObj.risk.label}>
      Altman Z-Score: {zScore} - {zScoreObj.risk.message}
    </h4>
      <div className='row'>
      <BarChart 
        zScore={zScore} 
        seriesData={seriesData} 
        name={company.name} 
      />
      <Table data={zScoreObj.data}  />
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  return {
    loading: state.companies.loadingCompanies,
    company: state.companies.find(c => c.id === parseInt(ownProps.companyId, 10))
  }
}

export default connect(mapState)(CompanyAnalysisPage);