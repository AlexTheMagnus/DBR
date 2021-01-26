export const changeAvatar = (playerPosition, numberOfAvatars) => {
  return {
    type: 'CHANGEAVATAR',
    payload: {
      playerPosition: playerPosition,
      numberOfAvatars: numberOfAvatars,
    },
  };
};
