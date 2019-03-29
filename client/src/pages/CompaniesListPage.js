import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import NewCompany from '../components/NewCompany'
import { openNewCompanyModal, closeNewCompanyModal } from '../actions';

const CompaniesListPage = ({ 
  companies, 
  loadingCompanies,
  companyLoadError,
  isModalOpen,
  openNewCompanyModal,
  closeNewCompanyModal
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
      <button onClick={openNewCompanyModal}>Add Company</button>
      
        {companies.map(company => (
          <div className='card col-md-8'key={company.id}>
            <Link to={'/companies/'+ company.id}>
              <div className='card-body'>
                <p>Name: {company.name}</p>
                <p>Ticker: {company.ticker}</p>
                <p>Exchange: {company.exchange}</p>
              </div>
            </Link>
          </div>
        ))}
      
      <Modal 
        className='new-company-modal'
        isOpen={isModalOpen}
        onRequestClose={closeNewCompanyModal}
      >
        <NewCompany />
      </Modal>
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
const mapDispatch = {
  openNewCompanyModal,
  closeNewCompanyModal
}

export default connect(mapStateToProps, mapDispatch)(CompaniesListPage);