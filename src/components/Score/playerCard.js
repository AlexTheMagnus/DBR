import React from 'react';
import { Avatar, Card, Grid, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { useSelector, useDispatch } from 'react-redux';
import { changeAvatar } from '../../actions/';

import DiceFace from './diceFaces/DiceFace';
import blackSpadesAvatar from '../../static/images/blackSpadesAvatar.svg';
import blueSpadesAvatar from '../../static/images/blueSpadesAvatar.svg';
import greenSpadesAvatar from '../../static/images/greenSpadesAvatar.svg';
import redSpadesAvatar from '../../static/images/redSpadesAvatar.svg';

const PlayerCard = ({ i, onRemoveCard }) => {
  const diceFaces = ['ace', 'king', 'queen', 'jack', 'ten', 'nine'];

  const avatars = [
    blackSpadesAvatar,
    blueSpadesAvatar,
    greenSpadesAvatar,
    redSpadesAvatar,
  ];

  function totalPoints() {
    var total = 0;

    for (var diceFace in diceFaces) {
      total += player.score[diceFaces[diceFace]];
    }
    return total;
  }

  const player = useSelector((state) => state.players[i]);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(changeAvatar(i, avatars.length))}
            src={avatars[player.avatar]}
            style={{ height: '3em', width: '3em' }}
          />
          <Typography
            variant="h5"
            style={{ color: 'gold', fontWeight: 'bold' }}>
            {player.name.substring(0, 7)}
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
              {'Puntos: ' + totalPoints()}
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
                      {player.score[diceFace]}
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
