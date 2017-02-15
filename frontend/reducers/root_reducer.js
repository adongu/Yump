import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

export default const rootReducer = combineReducers({
  session: SessionReducer
});
