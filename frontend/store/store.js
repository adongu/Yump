import { createStore, applyMiddleWare } from "redux";
import rootReducer from '../reducers/root_reducer';

export default const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadtedState, applyMiddleWare(thunk));
};
