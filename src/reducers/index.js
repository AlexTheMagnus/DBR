import { combineReducers } from 'redux';
import diceFacesReducer from './diceFaces';
import scoreReducer from './score';

const allReducersCombined = combineReducers({
  diceFaces: diceFacesReducer,
  scores: scoreReducer,
});

export default allReducersCombined;
