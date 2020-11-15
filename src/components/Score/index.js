import React, { Component } from "react";

import { scores } from "../../score.json";
//console.log(score);

import AddCard from "./AddCard";
import EditCard from "./EditCard";

class Score extends Component {
  constructor() {
    super();
    this.state = {
      scores, //Es lo mimso que "score: score"
    };
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
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
        //var auxdict = score;
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
    console.log("editado ", auxdict); //Checking edit

    console.log("tras remove ", auxdict); //Checking edit
    this.handleAddCard(auxdict);
    console.log("final ", auxdict); //Checking edit
    //Borrar luego

    //console.log(this.state.scores);
  }

  //Add player
  handleAddCard(score) {
    this.setState({
      scores: [...this.state.scores, score],
    });
  }

  //Generate cards
  render() {
    //console.log(this.state.score);
    let scores = this.state.scores.map((score, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div className="card mt-4" style={{ background: "#1A1D20" }}>
            <div
              className="card-title text-center"
              style={{ background: "#3a3d41" }}
            >
              <div className="card-header" style={{ background: "#1A1D20" }}>
                <button
                  className="btn btn-danger btn-sm float-right"
                  onClick={this.removeCard.bind(this, i)}
                >
                  X
                </button>
                <h3 style={{ color: "gold" }}>
                  <strong>{score.player}</strong>
                </h3>
              </div>
              <h3 style={{ color: "f1f1f1" }}>Ace: {score.ace}</h3>
              <h3 style={{ color: "f1f1f1" }}>King: {score.king}</h3>
              <h3 style={{ color: "f1f1f1" }}>Queen: {score.queen}</h3>
              <h3 style={{ color: "f1f1f1" }}>Jack: {score.jack}</h3>
              <h3 style={{ color: "f1f1f1" }}>Red: {score.red}</h3>
              <h3 style={{ color: "f1f1f1" }}>Black: {score.black}</h3>
              <div className="card-header" style={{ background: "#1A1D20" }}>
                <span className="badge badge-pill badge-danger ml-2">
                  Total:{" "}
                  {parseInt(score.ace, 10) +
                    parseInt(score.king, 10) +
                    parseInt(score.queen, 10) +
                    parseInt(score.jack, 10) +
                    parseInt(score.red, 10) +
                    parseInt(score.black, 10)}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });

    //Score main
    return (
      <div className="Score mt-4">
        <header className="App-header">
          <div className="row mt-4" style={{ width: "100%" }}>
            <div className="col mt-4">
              <span>
                <AddCard onAddCard={this.handleAddCard} />
              </span>
            </div>
            <div className="col mt-4">
              <h1 style={{ color: "gold" }}>
                <strong>Score Mode</strong>
              </h1>
            </div>
            <div className="col mt-4" style={{ textAlign: "right" }}>
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
            <div className="row mt-4">{scores}</div>
          </div>
        </header>
      </div>
    );
  }
}

export default Score;
