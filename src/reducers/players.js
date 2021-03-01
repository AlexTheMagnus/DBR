import { players } from '../players.json';

const playersReducer = (state = players, action) => {
  switch (action.type) {
    case 'ADDSCORE':
      const playerToScore = action.payload.playerName;
      const diceFace = action.payload.diceFace;
      const points = action.payload.points;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name === playerToScore) {
          state[i].score[diceFace] = points;
        }
      }

      return state;

    case 'CHANGEAVATAR':
      const playerToEdit = action.payload.playerToEdit;
      const numberOfAvatars = action.payload.numberOfAvatars;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name === playerToEdit) {
          state[i].avatar = (state[i].avatar + 1) % numberOfAvatars;
        }
      }

      return state;

    case 'DELETEPLAYER':
      const playerToDelete = action.payload.playerName;

      for (var i = 0; i < state.length; i++) {
        if (state[i].name === playerToDelete) {
          state.splice(i, 1);
        }
      }

      return state;

    default:
      return state;
  }
};

export default playersReducer;
