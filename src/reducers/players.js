import { players } from '../players.json';

const playersReducer = (state = players, action) => {
  switch (action.type) {
    case 'ADDSCORE':
      return state;

    case 'CHANGEAVATAR':
      const playerPosition = action.payload.playerPosition;
      const numberOfAvatars = action.payload.numberOfAvatars;

      state[playerPosition].avatar =
        (state[playerPosition].avatar + 1) % numberOfAvatars;

      return state;

    default:
      return state;
  }
};

export default playersReducer;
