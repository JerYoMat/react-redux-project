import produce from 'immer';
import { 
  ADD_COMPANY_BEGIN, 
  ADD_COMPANY_SUCCESS, 
  ADD_COMPANY_ERROR 
} from './actions';

const initialState = {
  companies: [],
  saveInProgress: false,
  courseCreateError: null
}

const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_COMPANY_BEGIN:
      draft.saveInProgress= true;
      draft.courseCreateError= null;
      return;
    case ADD_COMPANY_SUCCESS:
      draft.companies.push(action.payload)
      draft.saveInProgress=false;
      draft.courseCreateError=null;
      return;
    case ADD_COMPANY_ERROR:
      draft.saveInProgress=false
      draft.courseCreateError = action.error;
      return;
    default:
      return;
    }
}, initialState)

export default reducer;