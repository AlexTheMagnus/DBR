import React, { Component } from "react";

class EditCard extends Component {
    constructor(props) {
        super(props);

        this.refToPointsInput = React.createRef();
        this.state = {
            value: [],
            name: this.props.estado[0].player,
            side: "ace",
            points: "0",
            sides: [
                { key: 6, face: "ace" },
                { key: 5, face: "king" },
                { key: 4, face: "queen" },
                { key: 3, face: "jack" },
                { key: 2, face: "red" },
                { key: 1, face: "black" }
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e, i) {
        let value = this.state.value.slice();
        value[i] = e.target.checked;

        for (let j = 0; j < 6; j++) {
            value[j] = false;
        }

        value[i] = true;
        this.setState({
            value,
            side: this.state.sides[i].face
        });

        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onEditCard(this.state);
        this.setState({
            name: this.props.estado[0].player,
            points: "0"
        });
        this.refToPointsInput.current.value = "";

        //console.log(this.props.score[this.state.name].ace);
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state.side);
    }

    render() {
        return (
            <div className="float-left">
                <form
                    onSubmit={this.handleSubmit}
                    className="card mt-4"
                    style={{ background: "#3a3d41" }}
                >
                    <div
                        className="card-title text-center"
                        style={{ background: "#1A1D20" }}
                    >
                        <h3 style={{ color: "gold" }}>
                            <strong>Add Score</strong>
                        </h3>
                    </div>
                    <div className="form-group">
                        <select
                            name="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        >
                            {this.props.estado.map((x, y) => (
                                <option key={y}>{x.player}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        {this.state.sides.map((item, i) => {
                            return (
                                <div>
                                    <ul
                                        style={{
                                            display: "block",
                                            float: "left",
                                            width: "28%"
                                        }}
                                    >
                                        <li style={{ display: "block" }}>
                                            <input
                                                checked={this.state.value[i]}
                                                type="checkbox"
                                                onChange={e =>
                                                    this.onChange(e, i)
                                                }
                                            />
                                            <div>
                                                <label>{item.face}</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="points"
                            className="form-control"
                            ref={this.refToPointsInput}
                            //value={this.state.points}
                            onChange={this.handleInputChange}
                            placeholder="Points"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Score
                    </button>
                </form>
            </div>
        );
    }
}

export default EditCard;
