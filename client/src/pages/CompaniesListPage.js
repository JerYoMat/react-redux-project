import React from 'react';
import { connect } from 'react-redux';

const CompaniesListPage = ({ companies }) => {
return (
  companies.length === 0 ? (
    <div>
      <h1>Add A Company:</h1>
    </div>
    ) : (
    <div>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
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