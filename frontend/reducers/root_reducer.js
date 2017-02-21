import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessReducer,
  user: UserReducer
});

export default rootReducer;
