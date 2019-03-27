import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN, 
  ADD_COMPANY_SUCCESS, 
  ADD_COMPANY_ERROR,
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR 
} from './actions';

const initialState = {
  companies: [],
  saveInProgress: false,  //For the Form
  companyCreateError: null,
  loadingCompanies: false, //For Loading from the db
  companyLoadError: null
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
    default:
      return;
    }
}, initialState)

export default reducer;