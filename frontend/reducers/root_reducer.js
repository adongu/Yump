import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessReducer
});

export default rootReducer;
