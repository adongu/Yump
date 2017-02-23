import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessReducer,
  user: UserReducer,
  results: SearchReducer
});

export default rootReducer;
