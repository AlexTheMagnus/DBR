import React, { Component } from 'react';

class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      player: '',
      ace: '0',
      king: '0',
      queen: '0',
      jack: '0',
      ten: '0',
      nine: '0',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddCard(this.state);
    this.setState({
      player: '',
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="float-left">
        <form onSubmit={this.handleSubmit} className="row align-items-start">
          <div className="form-group">
            <input
              type="text"
              name="player"
              className="form-control"
              value={this.state.player}
              onChange={this.handleInputChange}
              placeholder="Player Name"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddCard;
