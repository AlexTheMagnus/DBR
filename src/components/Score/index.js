import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

import { scores } from '../../score.json';

import AddCard from './AddCard';
import EditCard from './EditCard';
import PlayerCard from './playerCard';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      scores, //Es lo mimso que "score: score"
    };
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  //Delete player
  removeCard(index) {
    this.setState({
      scores: this.state.scores.filter((j, i) => {
        return i !== index;
      }),
    });
  }

  handleEditCard(data) {
    var index = 0;
    var auxdict;

    this.state.scores.forEach((score) => {
      if (score.player === data.name) {
        auxdict = JSON.stringify(score);
        auxdict = JSON.parse(auxdict);

        //Deleting old card
        this.setState({
          scores: this.state.scores.splice(index, 1),
        });
      }
      index++;
    });

    auxdict[data.side] = data.points;

    this.handleAddCard(auxdict);
    //Borrar luego
  }

  //Add player
  handleAddCard(score) {
    this.setState({
      scores: [...this.state.scores, score],
    });
  }

  render() {
    return (
      <div className="Score mt-4">
        <header className="App-header">
          <div className="row mt-4" style={{ width: '100%' }}>
            <div className="col mt-4">
              <span>
                <AddCard onAddCard={this.handleAddCard} />
              </span>
            </div>
            <div className="col mt-4">
              <h1 style={{ color: 'gold' }}>
                <strong>Score Mode</strong>
              </h1>
            </div>
            <div className="col mt-4" style={{ textAlign: 'right' }}>
              <span className="badge badge-pill badge-warning ml-2">
                Players: {this.state.scores.length}
              </span>
            </div>
          </div>
          <div className="container">
            <div className="col mt-4">
              <EditCard
                onEditCard={this.handleEditCard}
                estado={this.state.scores}
              />
            </div>
            <div className="row mt-4">
              {this.state.scores.map((score, i) => {
                return (
                  <Grid xs="3">
                    <PlayerCard
                      key={i}
                      score={score}
                      i={i}
                      onRemoveCard={this.removeCard}
                    />
                  </Grid>
                );
              })}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Score;
