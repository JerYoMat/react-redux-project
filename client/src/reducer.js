import produce from 'immer';
import { ADD_COMPANY } from './actions';

const initialState = {
  companies: []
}

const reducer = produce((draft, action) => {
  switch(action.type) {
  case ADD_COMPANY:
    draft.companies.push(action.payload)
    return;
  default:
    return;
  }
}, initialState)

export default reducer;