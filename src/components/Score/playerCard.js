import React from 'react';
import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const PlayerCard = ({ i, score, onRemoveCard }) => {
  const diceFaces = ['ace', 'king', 'queen', 'jack', 'red', 'black'];

  return (
    <Card style={{ background: '#1A1D20' }}>
      <CardHeader
        title={
          <Typography
            variant="h5"
            style={{ color: 'gold', fontWeight: 'bold' }}>
            {score.player}
          </Typography>
        }
        action={
          <IconButton onClick={() => onRemoveCard(i)} size="small" edge="end">
            <CancelRoundedIcon color="error" />
          </IconButton>
        }></CardHeader>

      <CardContent style={{ background: '#3a3d41' }}>
        {diceFaces.map((diceFace, key) => {
          return (
            <Typography
              key={key}
              variant="h6"
              style={{
                color: 'white',
                textTransform: 'capitalize',
              }}>
              {diceFace}: {score[diceFace]}
            </Typography>
          );
        })}
        <Typography variant="h6" style={{ color: 'white', fontWeight: 'bold' }}>
          Total:{' '}
          {parseInt(score.ace, 10) +
            parseInt(score.king, 10) +
            parseInt(score.queen, 10) +
            parseInt(score.jack, 10) +
            parseInt(score.red, 10) +
            parseInt(score.black, 10)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
