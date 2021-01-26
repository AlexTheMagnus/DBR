import { combineReducers } from 'redux';
import diceFacesReducer from './diceFaces';
import playersReducer from './players';

const allReducersCombined = combineReducers({
  diceFaces: diceFacesReducer,
  players: playersReducer,
});

export default allReducersCombined;
