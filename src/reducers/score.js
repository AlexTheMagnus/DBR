import { scores } from '../score.json';

const scoresReducer = (state = scores, action) => {
  switch (action.type) {
    case 'ADDSCORE':
      return state;

    default:
      return state;
  }
};

export default scoresReducer;
