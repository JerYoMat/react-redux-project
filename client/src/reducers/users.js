import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions';

const initialState = {
  user: null,
  loadingUser: false,
  userError: null
}

const reducer = produce((draft, action) => {
  switch(action.type) {
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