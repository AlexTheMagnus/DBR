import React, { Component } from 'react';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diceId : this.props.diceid,
            diceValue : Math.trunc((Math.random()*(6))+1)
        }
        console.log("diceValue", this.state.diceValue);
    }

    rolldice() {
        this.diceValue = (Math.random()*(6-1))+1;
    }

    render() {
        return (
            <img key={Dice.diceId} src={require(`../img/dice${this.state.diceValue}.png`)} alt="" className="img-responsive" />

        )
    }
}

export default Dice;
