import React, { Component } from 'react';
import { scores } from '../../score.json'

class editableField extends Component {
    constructor() {
        super();
        this.state = {
            scores, //Es lo mimso que "scores: scores"
            isInEditMode: false
        }
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
        console.log(this.state.scores)
    }

    render() {
        return this.state.isInEditMode ?
        <div>
            <input
                type="text"
                defaultValue={this.state.scores}
            />
        </div> :
        <div onDoubleClick={this.changeEditMode}>
            {this.state.scores}

        </div>
    }
}

export default editableField;
