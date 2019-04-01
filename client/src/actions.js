import { createCompany, getCompanies, loginUser, createUser } from './api'

//* For adding a new company not in DB
export const ADD_COMPANY_BEGIN = 'ADD_COMPANY_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';

export const addCompany = (companyData) => {
  return dispatch => {
  dispatch({ type: ADD_COMPANY_BEGIN})
  createCompany(companyData)
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
  return dispatch => {  //the second param here can be state.
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

/*Login Flow */
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: LOGIN_BEGIN })
    loginUser(email, password)
      .then(user => {
        dispatch({ type: LOGIN_SUCCESS, payload: user})  
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error})
      })
  }
}
/*Signup Flow */
export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signup = (email, password) => {
  return dispatch => {
    dispatch({ type: SIGNUP_BEGIN })
    createUser(email, password)
      .then(user => {
        dispatch({ type: SIGNUP_SUCCESS, payload: user})  
      })
      .catch(error => {
        dispatch({ type: SIGNUP_ERROR, error})
      })
  }
}
