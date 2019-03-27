import { createCompany } from './api'

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