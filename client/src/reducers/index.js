import companies from './companies';
import users from './users'
import { combineReducers} from 'redux';

export default combineReducers({
  companies: companies,
  users: users
})
