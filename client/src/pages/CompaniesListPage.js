import React,{ useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addCompany } from '../actions';

const CompaniesListPage = ({ 
  companies, 
  dispatch,
  saveInProgress,  
  companyCreateError,
  loadingCompanies,
  companyLoadError
}) => {
  const [companyName, setCompanyName] = useState('');
  const [companyTicker, setCompanyTicker] = useState('');
  const [companyExchange, setCompanyExchange] = useState('');
  const [companyFiscalYear, setCompanyFiscalYear] = useState('');
  const [companyRevenue, setCompanyRevenue] = useState('');
  const [companyEbit, setCompanyEbit] = useState('');
  const [companyCurrentAssets, setCompanyCurrentAssets] = useState('');
  const [companyCurrentLiabilities, setCompanyCurrentLiabilities] = useState('');
  const [companyTotalAssets, setCompanyTotalAssets] = useState('');
  const [companyTotalLiabilities, setCompanyTotalLiabilities] = useState('');
  const [companyRetainedEarnings, setCompanyRetainedEarnings] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCompany(
      companyName, 
      companyTicker,
      companyExchange, 
      companyFiscalYear,
      companyRevenue,
      companyEbit,
      companyCurrentAssets,
      companyCurrentLiabilities,
      companyTotalAssets,
      companyTotalLiabilities,
      companyRetainedEarnings
      ))
  }

  if (loadingCompanies) {
    return <div/>;
  }
  
  if (companyLoadError) {
    return <div className='error-message'>{companyLoadError.message}</div>
  }

  return (
  companies.length === 0 ? (
    <div>
      <h1>Add A Company:</h1>
      <form onSubmit={handleSubmit}>
        {companyCreateError && (
            <div className="error-message">
              Error: {companyCreateError.message}
            </div>
          )}
        <label>Name:<input disabled={saveInProgress}value={companyName} onChange={e => setCompanyName(e.target.value)} /></label>
        <label>Ticker:<input disabled={saveInProgress}value={companyTicker} onChange={e => setCompanyTicker(e.target.value)}/></label>
        <label>Exchange:<input disabled={saveInProgress}value={companyExchange} onChange={e => setCompanyExchange(e.target.value)}/></label>
        <label>Fiscal Year:<input disabled={saveInProgress}value={companyFiscalYear} onChange={e => setCompanyFiscalYear(e.target.value)}/></label>
        <label>Revenue:<input disabled={saveInProgress}value={companyRevenue} onChange={e => setCompanyRevenue(e.target.value)}/></label>
        <label>Ebit:<input disabled={saveInProgress}value={companyEbit} onChange={e => setCompanyEbit(e.target.value)}/></label>
        <label>Total Current Assets:<input disabled={saveInProgress}value={companyCurrentAssets} onChange={e => setCompanyCurrentAssets(e.target.value)}/></label>
        <label>Total Current Liabilities:<input disabled={saveInProgress}value={companyCurrentLiabilities} onChange={e => setCompanyCurrentLiabilities(e.target.value)}/></label>
        <label>Total Assets:<input disabled={saveInProgress}value={companyTotalAssets} onChange={e => setCompanyTotalAssets(e.target.value)}/></label>
        <label>Total Liabilities:<input disabled={saveInProgress}value={companyTotalLiabilities} onChange={e => setCompanyTotalLiabilities(e.target.value)}/></label>
        <label>Retained Earnings:<input disabled={saveInProgress}value={companyRetainedEarnings} onChange={e => setCompanyRetainedEarnings(e.target.value)}/></label>
        <button disabled={saveInProgress} type='submit'>Add Company</button>
      </form>
    </div>
    ) : (
    <div>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
          <p>{company.name}</p>
          <p>{company.ticker}</p>
          <p>{company.exchange}</p></li>
        ))}
      </ul>
      <Modal isOpen={true}>
        Placeholder
      </Modal>
    </div>
    )
  )
}

const mapStateToProps = state => ({
  companies: state.companies,
  saveInProgress: state.saveInProgress,  
  companyCreateError: state.companyCreateError,
  loadingCompanies: state.loadingCompanies,
  companyLoadError: state.companyLoadError
})

export default connect(mapStateToProps)(CompaniesListPage);