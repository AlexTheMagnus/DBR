import React, { useState } from 'react';
import { Avatar, Card, Grid, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import DiceFace from './diceFaces/DiceFace';
import blackSpadesAvatar from '../../static/images/blackSpadesAvatar.svg';
import blueSpadesAvatar from '../../static/images/blueSpadesAvatar.svg';
import greenSpadesAvatar from '../../static/images/greenSpadesAvatar.svg';
import redSpadesAvatar from '../../static/images/redSpadesAvatar.svg';

const PlayerCard = ({ i, score, onRemoveCard }) => {
  const diceFaces = ['ace', 'king', 'queen', 'jack', 'ten', 'nine'];
  const avatars = [
    blackSpadesAvatar,
    blueSpadesAvatar,
    greenSpadesAvatar,
    redSpadesAvatar,
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(i % avatars.length);

  return (
    <Card
      style={{
        background: '#3a3d41',
        padding: '0.5em',
        paddingRight: '0',
      }}>
      <Grid container align="center" alignItems="center">
        <Grid item xs={3} style={{ paddingRight: '0.5em' }}>
          <Avatar
            onClick={() =>
              setSelectedAvatar((selectedAvatar + 1) % avatars.length)
            }
            src={avatars[selectedAvatar]}
            style={{ height: '3em', width: '3em' }}
          />
          <Typography
            variant="h5"
            style={{ color: 'gold', fontWeight: 'bold' }}>
            {score.player.substring(0, 7)}
          </Typography>
        </Grid>

        <Grid item xs={9} container>
          <Grid item xs={10} align="left">
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

          <Grid item xs={2}>
            <IconButton onClick={() => onRemoveCard(i)} size="small" edge="end">
              <CancelRoundedIcon color="error" />
            </IconButton>
          </Grid>

          <Grid item xs={12} container>
            {diceFaces.map((diceFace, key) => {
              return (
                <Grid
                  key={key}
                  item
                  xs={4}
                  container
                  justify="flex-start"
                  spacing={1}>
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
