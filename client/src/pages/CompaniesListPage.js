import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NewCompany from '../components/NewCompany'


const CompaniesListPage = ({ 
  companies, 
  loadingCompanies,
  companyLoadError
}) => {
  if (loadingCompanies) {
    return <div/>;
  }
  
  if (companyLoadError) {
    return <div className='error-message'>{companyLoadError.message}</div>
  }

  return (
  companies.length === 0 ? (
    <NewCompany />
    ) : (
    <div>
      <h1>Company Index:</h1>
        {companies.map(company => (
          <div className='card col-md-8'key={company.id}>
            <Link to={'/companies/'+ company.id}>
              <div className='card-body'>
                <p>Name: {company.companyname}</p>
                <span>Ticker: {company.primarysymbol}</span>
                <span>Exchange: {company.primaryexchange}</span>
                <p>Market Cap: {(company.market_cap).toLocaleString('en')}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
    )
  )
}

const mapStateToProps = state => ({
  companies: state.companies,
  loadingCompanies: state.loadingCompanies,
  companyLoadError: state.companyLoadError,
  isModalOpen: state.newCompanyModalOpen
})

export default connect(mapStateToProps)(CompaniesListPage);