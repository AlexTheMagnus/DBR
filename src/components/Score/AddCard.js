import React, { Component } from 'react';

class AddCard extends Component {
    constructor() {
        super();
        this.state = {
            player: '',
            ace: '',
            king: '',
            queen: '',
            jack: '',
            red: '',
            black: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.onAddCard(this.state);
      this.setState({
          player: '',
          ace: '',
          king: '',
          queen: '',
          jack: '',
          red: '',
          black: ''
      });
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
            <form onSubmit={this.handleSubmit} className="row  align-items-start">
                <div className="form-group">
                    <input
                        type="text"
                        name="PlayerName"
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
    )
  }

}

export default AddCard;
