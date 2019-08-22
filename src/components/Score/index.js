import React, { Component } from 'react';

import { scores } from '../../score.json'
//console.log(score);

class Score extends Component {
    constructor() {
        super();
        this.state = {
            scores //Es lo mimso que "score: score"
        }
    }

    render() {
        //console.log(this.state.score);
        const scores = this.state.scores.map((score, i) => {
            return(
                <div className="col-md-3" key={i}>
                    <div className="card mt-4" style={{ background: '#1A1D20' }}>
                        <div className="card-title text-center" style={{ background: '#3a3d41' }}>
                            <div className="card-header" style={{ background: '#1A1D20' }}>
                                <h3 style={{ color: 'gold' }}><strong>{score.player}</strong></h3>
                            </div>
                            <h3 style={{ color: 'f1f1f1' }}>Ace: {score.ace}</h3>
                            <h3 style={{ color: 'f1f1f1' }}>King: {score.king}</h3>
                            <h3 style={{ color: 'f1f1f1' }}>Queen: {score.queen}</h3>
                            <h3 style={{ color: 'f1f1f1' }}>Jack: {score.jack}</h3>
                            <h3 style={{ color: 'f1f1f1' }}>Red: {score.red}</h3>
                            <h3 style={{ color: 'f1f1f1' }}>Black: {score.black}</h3>
                            <div className="card-header" style={{ background: '#1A1D20' }}>
                                <span className="badge badge-pill badge-danger ml-2">
                                    Total: {parseInt(score.ace, 10)  + parseInt(score.king, 10) + parseInt(score.queen, 10) + parseInt(score.jack, 10) + parseInt(score.red, 10) + parseInt(score.black, 10)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


        return (
            <div className="Score mt-4">
                <header className="App-header">
                    <div className="row mt-4" style={{ width: "100%" }}>
                        <div className="col mt-4"/>
                        <div className="col mt-4">
                            <h1 style={{ color: 'gold' }}><strong>Score Mode</strong></h1>
                        </div>
                        <div className="col mt-4" style={{ textAlign: "right" }} >
                            <span className="badge badge-pill badge-warning ml-2">
                                Players: { this.state.scores.length }
                            </span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-4">
                            {scores}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Score;
