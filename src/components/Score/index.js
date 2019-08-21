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
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-title text-center">
                            <div className="card-header" style={{ background: '#1A1D20' }}>
                                <h3 style={{ color: 'gold' }}>{score.player}</h3>
                            </div>
                            <h3 style={{ color: 'black' }}>Ace: {score.ace}</h3>
                            <h3 style={{ color: 'black' }}>King: {score.king}</h3>
                            <h3 style={{ color: 'black' }}>Queen: {score.queen}</h3>
                            <h3 style={{ color: 'black' }}>Jack: {score.jack}</h3>
                            <h3 style={{ color: 'black' }}>Red: {score.red}</h3>
                            <h3 style={{ color: 'black' }}>Black: {score.black}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                Total: {score.total}
                            </span>
                        </div>
                    </div>
                </div>
            )
        })


        return (
            <div className="Score">
                <header className="App-header">
                    <h1>Pagina Score</h1>
                    {scores}
                </header>



            </div>
        );
    }
}

export default Score;
