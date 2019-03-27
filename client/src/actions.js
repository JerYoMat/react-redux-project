import { createCompany, getCompanies } from './api'

//* For adding a new company not in DB
export const ADD_COMPANY_BEGIN = 'ADD_COMPANY_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';


export const addCompany = (name, ticker, exchange, fiscalYear, revenue, ebit, currentAssets, currentLiabilities, totalAssets, totalLiabilities, retainedEarnings) => {
  return dispatch => {
  dispatch({ type: ADD_COMPANY_BEGIN})
  createCompany(name, ticker, exchange, fiscalYear, revenue, ebit, currentAssets, currentLiabilities, totalAssets, totalLiabilities, retainedEarnings)
    .then(company => {
      dispatch({ type: ADD_COMPANY_SUCCESS, payload: company })
    })
    .catch(error => {
      dispatch({ type: ADD_COMPANY_ERROR, error })
    })
  }
}
//Dealing with Modal for Creating a new company
export const OPEN_NEW_COMPANY_MODAL = 'OPEN_NEW_COMPANY_MODAL';
export const CLOSE_NEW_COMPANY_MODAL = 'CLOSE_NEW_COMPANY_MODAL';

export const openNewCompanyModal = () => ({
  type: OPEN_NEW_COMPANY_MODAL
})
export const closeNewCompanyModal = () => ({
  type: CLOSE_NEW_COMPANY_MODAL
})



//* For loading existing companies from DB
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';

export const loadCompanies = () => {
  return dispatch => {
    dispatch({ type: LOAD_COMPANIES_BEGIN })
    getCompanies()
      .then(companies => {
        dispatch({ type: LOAD_COMPANIES_SUCCESS, payload: companies})  
      })
      .catch(error => {
        dispatch({ type: LOAD_COMPANIES_ERROR, error})
      })
  }
}


