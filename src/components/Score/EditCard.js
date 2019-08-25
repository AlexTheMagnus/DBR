import React, { Component } from 'react';

class EditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.estado[0].player,
            side: 'ace',
            points: '0'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onEditCard(this.state);
        this.setState({
            name: this.props.estado[0].player,
            side: 'ace',
            points: '0'
        });

    //console.log(this.props.score[this.state.name].ace);
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="float-left">
                <form onSubmit={this.handleSubmit} className="card mt-4" style={{ background: '#3a3d41' }}>
                    <div className="card-title text-center" style={{ background: '#1A1D20' }}>
                        <h3 style={{ color: 'gold' }}><strong>Add Score</strong></h3>
                    </div>
                    <div className="form-group">
                            <select
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            >
                                {this.props.estado.map((x,y) => <option key={y}>{x.player}</option>)}
                            </select>
                    </div>
                    <div className="form-group">
                        <select
                            name="side"
                            className="form-control"
                            value={this.state.side}
                            onChange={this.handleInputChange}
                        >
                            <option>ace</option>
                            <option>king</option>
                            <option>queen</option>
                            <option>jack</option>
                            <option>red</option>
                            <option>black</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="points"
                            className="form-control"
                            value={this.state.points}
                            onChange={this.handleInputChange}
                            placeholder="Points"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Score
                    </button>
                </form>
            </div>
        )
    }

}

export default EditCard;
