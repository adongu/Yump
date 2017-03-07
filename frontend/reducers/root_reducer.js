import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import ReviewReducer from './review_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  businesses: BusinessReducer,
  user: UserReducer,
  results: SearchReducer,
  reviews: ReviewReducer
});

export default rootReducer;
