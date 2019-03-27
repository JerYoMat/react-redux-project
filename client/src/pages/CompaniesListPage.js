import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../actions';

const CompaniesListPage = ({ companies, dispatch }) => {
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
  return (
  companies.length === 0 ? (
    <div>
      <h1>Add A Company:</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:<input value={companyName} onChange={e => setCompanyName(e.target.value)} /></label>
        <label>Ticker:<input value={companyTicker} onChange={e => setCompanyTicker(e.target.value)}/></label>
        <label>Exchange:<input value={companyExchange} onChange={e => setCompanyExchange(e.target.value)}/></label>
        <label>Fiscal Year:<input value={companyFiscalYear} onChange={e => setCompanyFiscalYear(e.target.value)}/></label>
        <label>Revenue:<input value={companyRevenue} onChange={e => setCompanyRevenue(e.target.value)}/></label>
        <label>Ebit:<input value={companyEbit} onChange={e => setCompanyEbit(e.target.value)}/></label>
        <label>Total Current Assets:<input value={companyCurrentAssets} onChange={e => setCompanyCurrentAssets(e.target.value)}/></label>
        <label>Total Current Liabilities:<input value={companyCurrentLiabilities} onChange={e => setCompanyCurrentLiabilities(e.target.value)}/></label>
        <label>Total Assets:<input value={companyTotalAssets} onChange={e => setCompanyTotalAssets(e.target.value)}/></label>
        <label>Total Liabilities:<input value={companyTotalLiabilities} onChange={e => setCompanyTotalLiabilities(e.target.value)}/></label>
        <label>Retained Earnings:<input value={companyRetainedEarnings} onChange={e => setCompanyRetainedEarnings(e.target.value)}/></label>
        <button type='submit'>Add Company</button>
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
    </div>
    )
  )
}

const mapStateToProps = state => ({
  companies: state.companies
})

export default connect(mapStateToProps)(CompaniesListPage);