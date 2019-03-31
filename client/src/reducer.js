import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN, 
  ADD_COMPANY_SUCCESS, 
  ADD_COMPANY_ERROR,
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR,
  OPEN_NEW_COMPANY_MODAL,
  CLOSE_NEW_COMPANY_MODAL, 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './actions';

const initialState = {
  companies: [],
  saveInProgress: false,  //For the Form
  companyCreateError: null,
  loadingCompanies: false, //For Loading from the db
  companyLoadError: null,
  newCompanyModalOpen: false,
  user: null,
  loadingUser: false,
  userError: null
}

const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_COMPANY_BEGIN:
      draft.saveInProgress= true;
      draft.companyCreateError= null;
      return;
    case ADD_COMPANY_SUCCESS:
      draft.companies.push(action.payload)
      draft.saveInProgress=false;
      draft.companyCreateError=null;
      draft.newCompanyModalOpen=false;
      return;
    case ADD_COMPANY_ERROR:
      draft.saveInProgress=false;
      draft.companyCreateError = action.error;
      return;
    case LOAD_COMPANIES_BEGIN:
      draft.loadingCompanies=true;
      draft.companyLoadError=null;
      return;
    case LOAD_COMPANIES_SUCCESS:
      draft.companies = action.payload
      draft.loadingCompanies = false;
      draft.companyLoadError = null;
      return;
    case LOAD_COMPANIES_ERROR:
      draft.loadingCompanies=false;
      draft.companyLoadError = action.error;
      return;
    case OPEN_NEW_COMPANY_MODAL:
      draft.newCompanyModalOpen=true;
      return;
    case CLOSE_NEW_COMPANY_MODAL:
      draft.newCompanyModalOpen=false;
      draft.companyCreateErro=null;
      return;
    case LOGIN_BEGIN:
    case SIGNUP_BEGIN: 
      draft.loadingUser=true;
      draft.userError=null;
      return;
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      draft.loadingUser=false;
      draft.user=action.payload;
      return;
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      draft.loadingUser=false;
      draft.userError=action.error;
      draft.user =null;
      return;
    default:
      return;
    }
}, initialState)

export default reducer;