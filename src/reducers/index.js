import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
