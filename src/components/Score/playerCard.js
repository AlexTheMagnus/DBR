import React from 'react';
import { Avatar, Card, Grid, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import DiceFace from './diceFaces/DiceFace';

const PlayerCard = ({ i, score, onRemoveCard }) => {
  const diceFaces = ['ace', 'king', 'queen', 'jack', 'ten', 'nine'];

  return (
    <Card style={{ background: '#3a3d41' }}>
      <Grid
        container
        align="center"
        alignItems="center"
        style={{ margin: '0.5em' }}>
        <Grid item xs={3}>
          <Avatar aria-label="recipe">A</Avatar>
          <Typography
            variant="h5"
            style={{ color: 'gold', fontWeight: 'bold' }}>
            {score.player}
          </Typography>
        </Grid>

        <Grid item xs={9} container>
          <Grid item xs={9} align="left">
            <Typography
              variant="h6"
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              {'Puntos: '}
              {parseInt(score.ace, 10) +
                parseInt(score.king, 10) +
                parseInt(score.queen, 10) +
                parseInt(score.jack, 10) +
                parseInt(score.ten, 10) +
                parseInt(score.nine, 10)}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <IconButton onClick={() => onRemoveCard(i)} size="small" edge="end">
              <CancelRoundedIcon color="error" />
            </IconButton>
          </Grid>

          <Grid item xs={12} container>
            {diceFaces.map((diceFace, key) => {
              return (
                <Grid item xs={4} container justify="flex-start" spacing={1}>
                  <Grid item>
                    <DiceFace face={diceFace} />
                  </Grid>
                  <Grid item>
                    <Typography
                      key={key}
                      variant="h6"
                      style={{
                        color: 'white',
                        textTransform: 'capitalize',
                      }}>
                      {score[diceFace]}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PlayerCard;
