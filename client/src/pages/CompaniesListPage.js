import React,{ useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
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
      <ul>
        {companies.map(company => (
          <li key={company.id}>
          <p>{company.name}</p>
          <p>{company.ticker}</p>
          <p>{company.exchange}</p></li>
        ))}
      </ul>
      <Modal 
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